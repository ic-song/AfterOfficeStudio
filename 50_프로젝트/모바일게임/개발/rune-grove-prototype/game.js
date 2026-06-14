const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");
const panel = document.querySelector(".game-panel");

const ui = {
  time: document.querySelector("#time"),
  level: document.querySelector("#level"),
  runes: document.querySelector("#runes"),
  xpBar: document.querySelector("#xpBar"),
  startScreen: document.querySelector("#startScreen"),
  levelScreen: document.querySelector("#levelScreen"),
  resultScreen: document.querySelector("#resultScreen"),
  choices: document.querySelector("#choices"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  startBtn: document.querySelector("#startBtn"),
  againBtn: document.querySelector("#againBtn"),
  pauseBtn: document.querySelector("#pauseBtn"),
  bankedRunes: document.querySelector("#bankedRunes"),
  metaDamage: document.querySelector("#metaDamage"),
  metaMagnet: document.querySelector("#metaMagnet"),
  metaReward: document.querySelector("#metaReward"),
};

const storageKey = "rune-grove-prototype-v1";
const runDuration = 60;
let lastTime = performance.now();
let paused = true;
let choosing = false;
let game;
let keys = new Set();
let pointer = null;
let meta = loadMeta();

const upgrades = [
  {
    id: "bolt",
    title: "불꽃 화살",
    desc: "공격 피해 +4",
    apply: (g) => (g.stats.damage += 4),
  },
  {
    id: "tempo",
    title: "속사 주문",
    desc: "공격 간격 12% 감소",
    apply: (g) => (g.stats.fireRate *= 0.88),
  },
  {
    id: "chain",
    title: "번개 사슬",
    desc: "투사체가 추가 적 1명 관통",
    apply: (g) => (g.stats.pierce += 1),
  },
  {
    id: "frost",
    title: "서리 파동",
    desc: "주변 적 이동 속도 감소",
    apply: (g) => (g.stats.frost += 0.16),
  },
  {
    id: "magnet",
    title: "룬 흡수",
    desc: "흡수 범위 +30",
    apply: (g) => (g.stats.magnet += 30),
  },
  {
    id: "ward",
    title: "수정 수호막",
    desc: "수정 체력 +18",
    apply: (g) => {
      g.crystal.maxHp += 18;
      g.crystal.hp = Math.min(g.crystal.maxHp, g.crystal.hp + 18);
    },
  },
  {
    id: "reward",
    title: "룬 감응",
    desc: "이번 런 룬 보상 +20%",
    apply: (g) => (g.stats.runeBonus += 0.2),
  },
];

function loadMeta() {
  try {
    return {
      runes: 0,
      damage: 0,
      magnet: 0,
      reward: 0,
      ...JSON.parse(localStorage.getItem(storageKey) || "{}"),
    };
  } catch {
    return { runes: 0, damage: 0, magnet: 0, reward: 0 };
  }
}

function saveMeta() {
  localStorage.setItem(storageKey, JSON.stringify(meta));
}

function resize() {
  const rect = panel.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  canvas.logicalWidth = rect.width;
  canvas.logicalHeight = rect.height;
  if (game) {
    game.player.x = clamp(game.player.x, 24, rect.width - 24);
    game.player.y = clamp(game.player.y, 84, rect.height - 42);
    game.crystal.x = rect.width / 2;
    game.crystal.y = rect.height / 2;
  }
}

function newGame() {
  const w = canvas.logicalWidth || 390;
  const h = canvas.logicalHeight || 760;
  return {
    state: "running",
    elapsed: 0,
    spawnTimer: 0,
    eliteTimer: 9,
    attackTimer: 0,
    level: 1,
    xp: 0,
    xpNeed: 12,
    kills: 0,
    runes: 0,
    shake: 0,
    player: { x: w / 2, y: h / 2 + 90, r: 13, speed: 178 },
    crystal: { x: w / 2, y: h / 2, r: 28, hp: 100, maxHp: 100 },
    stats: {
      damage: 10 + meta.damage * 3,
      fireRate: 0.58,
      pierce: 0,
      frost: 0,
      magnet: 62 + meta.magnet * 16,
      runeBonus: meta.reward * 0.08,
    },
    enemies: [],
    shots: [],
    drops: [],
    popups: [],
  };
}

function startRun() {
  game = newGame();
  paused = false;
  choosing = false;
  ui.pauseBtn.textContent = "Pause";
  ui.startScreen.classList.add("hidden");
  ui.resultScreen.classList.add("hidden");
  ui.levelScreen.classList.add("hidden");
  lastTime = performance.now();
}

function update(dt) {
  if (!game || paused || choosing || game.state !== "running") return;

  game.elapsed += dt;
  game.spawnTimer -= dt;
  game.eliteTimer -= dt;
  game.attackTimer -= dt;
  game.shake = Math.max(0, game.shake - dt * 10);

  movePlayer(dt);
  spawnEnemies(dt);
  attackNearest();
  updateShots(dt);
  updateEnemies(dt);
  updateDrops(dt);
  updatePopups(dt);

  if (game.elapsed >= runDuration || game.crystal.hp <= 0) {
    finishRun(game.crystal.hp > 0);
  }
}

function movePlayer(dt) {
  const dir = { x: 0, y: 0 };
  if (keys.has("arrowleft") || keys.has("a")) dir.x -= 1;
  if (keys.has("arrowright") || keys.has("d")) dir.x += 1;
  if (keys.has("arrowup") || keys.has("w")) dir.y -= 1;
  if (keys.has("arrowdown") || keys.has("s")) dir.y += 1;

  if (pointer) {
    const dx = pointer.x - game.player.x;
    const dy = pointer.y - game.player.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 8) {
      dir.x += dx / dist;
      dir.y += dy / dist;
    }
  }

  const len = Math.hypot(dir.x, dir.y) || 1;
  game.player.x = clamp(game.player.x + (dir.x / len) * game.player.speed * dt, 18, canvas.logicalWidth - 18);
  game.player.y = clamp(game.player.y + (dir.y / len) * game.player.speed * dt, 72, canvas.logicalHeight - 28);
}

function spawnEnemies() {
  const pressure = 1 + game.elapsed / 50;
  if (game.spawnTimer <= 0) {
    const count = game.elapsed > 35 ? 3 : game.elapsed > 18 ? 2 : 1;
    for (let i = 0; i < count; i += 1) {
      game.enemies.push(makeEnemy(false, pressure));
    }
    game.spawnTimer = Math.max(0.22, 0.78 - game.elapsed * 0.008);
  }

  if (game.eliteTimer <= 0) {
    game.enemies.push(makeEnemy(true, pressure));
    game.eliteTimer = 12;
  }
}

function makeEnemy(elite, pressure) {
  const w = canvas.logicalWidth;
  const h = canvas.logicalHeight;
  const side = Math.floor(Math.random() * 4);
  let x = 0;
  let y = 0;
  if (side === 0) {
    x = Math.random() * w;
    y = -20;
  } else if (side === 1) {
    x = w + 20;
    y = Math.random() * h;
  } else if (side === 2) {
    x = Math.random() * w;
    y = h + 20;
  } else {
    x = -20;
    y = Math.random() * h;
  }
  return {
    x,
    y,
    r: elite ? 18 : 11,
    hp: (elite ? 60 : 22) * pressure,
    maxHp: (elite ? 60 : 22) * pressure,
    speed: (elite ? 36 : 56) + Math.random() * 18,
    elite,
    hitFlash: 0,
  };
}

function attackNearest() {
  if (game.attackTimer > 0 || game.enemies.length === 0) return;
  let target = null;
  let best = Infinity;
  for (const enemy of game.enemies) {
    const d = dist(game.player, enemy);
    if (d < best) {
      best = d;
      target = enemy;
    }
  }
  if (!target || best > 260) return;
  const angle = Math.atan2(target.y - game.player.y, target.x - game.player.x);
  game.shots.push({
    x: game.player.x,
    y: game.player.y,
    vx: Math.cos(angle) * 420,
    vy: Math.sin(angle) * 420,
    r: 5,
    life: 1.1,
    damage: game.stats.damage,
    pierce: game.stats.pierce,
    hit: new Set(),
  });
  game.attackTimer = game.stats.fireRate;
}

function updateShots(dt) {
  for (const shot of game.shots) {
    shot.x += shot.vx * dt;
    shot.y += shot.vy * dt;
    shot.life -= dt;
    for (const enemy of game.enemies) {
      if (shot.hit.has(enemy) || dist(shot, enemy) > shot.r + enemy.r) continue;
      shot.hit.add(enemy);
      enemy.hp -= shot.damage;
      enemy.hitFlash = 0.12;
      game.popups.push({ x: enemy.x, y: enemy.y - 8, text: Math.round(shot.damage), life: 0.45 });
      if (shot.pierce > 0) {
        shot.pierce -= 1;
      } else {
        shot.life = -1;
        break;
      }
    }
  }
  game.shots = game.shots.filter((s) => s.life > 0 && s.x > -30 && s.x < canvas.logicalWidth + 30 && s.y > -30 && s.y < canvas.logicalHeight + 30);
}

function updateEnemies(dt) {
  for (const enemy of game.enemies) {
    enemy.hitFlash = Math.max(0, enemy.hitFlash - dt);
    const dx = game.crystal.x - enemy.x;
    const dy = game.crystal.y - enemy.y;
    const d = Math.hypot(dx, dy) || 1;
    const slow = d < 92 ? game.stats.frost : 0;
    enemy.x += (dx / d) * enemy.speed * (1 - slow) * dt;
    enemy.y += (dy / d) * enemy.speed * (1 - slow) * dt;

    if (d < enemy.r + game.crystal.r) {
      game.crystal.hp -= enemy.elite ? 14 : 7;
      enemy.hp = 0;
      game.shake = 1;
    }
  }

  const dead = game.enemies.filter((enemy) => enemy.hp <= 0);
  for (const enemy of dead) {
    game.kills += 1;
    const xp = enemy.elite ? 8 : 3;
    const rune = enemy.elite ? 4 : Math.random() < 0.35 ? 1 : 0;
    game.drops.push({ x: enemy.x, y: enemy.y, type: "xp", value: xp, r: 5 });
    if (rune) game.drops.push({ x: enemy.x + 7, y: enemy.y - 7, type: "rune", value: rune, r: 6 });
  }
  game.enemies = game.enemies.filter((enemy) => enemy.hp > 0);
}

function updateDrops(dt) {
  for (const drop of game.drops) {
    const d = dist(game.player, drop);
    if (d < game.stats.magnet) {
      drop.x += ((game.player.x - drop.x) / Math.max(d, 1)) * 420 * dt;
      drop.y += ((game.player.y - drop.y) / Math.max(d, 1)) * 420 * dt;
    }
    if (d < game.player.r + drop.r + 4) {
      if (drop.type === "xp") addXp(drop.value);
      if (drop.type === "rune") game.runes += Math.ceil(drop.value * (1 + game.stats.runeBonus));
      drop.collected = true;
    }
  }
  game.drops = game.drops.filter((drop) => !drop.collected);
}

function addXp(value) {
  game.xp += value;
  while (game.xp >= game.xpNeed) {
    game.xp -= game.xpNeed;
    game.level += 1;
    game.xpNeed = Math.floor(game.xpNeed * 1.28 + 4);
    openLevelChoices();
    break;
  }
}

function openLevelChoices() {
  choosing = true;
  paused = true;
  ui.choices.innerHTML = "";
  const pool = [...upgrades].sort(() => Math.random() - 0.5).slice(0, 3);
  for (const upgrade of pool) {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `<span>${upgrade.desc}</span><strong>${upgrade.title}</strong>`;
    button.addEventListener("click", () => {
      upgrade.apply(game);
      ui.levelScreen.classList.add("hidden");
      choosing = false;
      paused = false;
      lastTime = performance.now();
    });
    ui.choices.appendChild(button);
  }
  ui.levelScreen.classList.remove("hidden");
}

function updatePopups(dt) {
  for (const popup of game.popups) {
    popup.y -= 22 * dt;
    popup.life -= dt;
  }
  game.popups = game.popups.filter((popup) => popup.life > 0);
}

function finishRun(won) {
  game.state = "finished";
  paused = true;
  const survivalBonus = won ? 12 : Math.floor(game.elapsed / 10);
  const earned = Math.max(1, game.runes + survivalBonus + Math.floor(game.kills / 12));
  meta.runes += earned;
  saveMeta();
  updateMetaUI();
  ui.resultTitle.textContent = won ? "생존 성공" : "수정 파괴";
  ui.resultSummary.textContent = `${Math.floor(game.elapsed)}초 생존, ${game.kills}마리 처치, 룬 ${earned}개 획득`;
  ui.resultScreen.classList.remove("hidden");
}

function draw() {
  const w = canvas.logicalWidth || 390;
  const h = canvas.logicalHeight || 760;
  ctx.clearRect(0, 0, w, h);

  const sx = game?.shake ? (Math.random() - 0.5) * game.shake * 8 : 0;
  const sy = game?.shake ? (Math.random() - 0.5) * game.shake * 8 : 0;
  ctx.save();
  ctx.translate(sx, sy);
  drawBackground(w, h);
  if (game) {
    drawCrystal();
    for (const drop of game.drops) drawDrop(drop);
    for (const shot of game.shots) drawShot(shot);
    for (const enemy of game.enemies) drawEnemy(enemy);
    drawPlayer();
    for (const popup of game.popups) drawPopup(popup);
  }
  ctx.restore();
  updateHud();
}

function drawBackground(w, h) {
  const gradient = ctx.createLinearGradient(0, 0, 0, h);
  gradient.addColorStop(0, "#1e3327");
  gradient.addColorStop(1, "#0d1712");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(255,255,255,.045)";
  ctx.lineWidth = 1;
  for (let y = 30; y < h; y += 34) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y + Math.sin(y) * 8);
    ctx.stroke();
  }
}

function drawCrystal() {
  const c = game.crystal;
  ctx.save();
  ctx.translate(c.x, c.y);
  ctx.fillStyle = "rgba(120, 255, 164, .12)";
  ctx.beginPath();
  ctx.arc(0, 0, c.r + 28, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#77e7a0";
  ctx.beginPath();
  ctx.moveTo(0, -c.r);
  ctx.lineTo(c.r * 0.72, 0);
  ctx.lineTo(0, c.r);
  ctx.lineTo(-c.r * 0.72, 0);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#e8fff0";
  ctx.stroke();
  ctx.restore();

  const pct = clamp(c.hp / c.maxHp, 0, 1);
  ctx.fillStyle = "rgba(0,0,0,.35)";
  ctx.fillRect(c.x - 34, c.y + c.r + 12, 68, 6);
  ctx.fillStyle = pct > 0.35 ? "#7dd97f" : "#f26d6d";
  ctx.fillRect(c.x - 34, c.y + c.r + 12, 68 * pct, 6);
}

function drawPlayer() {
  const p = game.player;
  ctx.fillStyle = "rgba(120, 170, 255, .16)";
  ctx.beginPath();
  ctx.arc(p.x, p.y, game.stats.magnet, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#caa7ff";
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(p.x + 4, p.y - 4, 4, 0, Math.PI * 2);
  ctx.fill();
}

function drawEnemy(enemy) {
  ctx.fillStyle = enemy.hitFlash > 0 ? "#ffffff" : enemy.elite ? "#f3c96b" : "#f26d6d";
  ctx.beginPath();
  ctx.arc(enemy.x, enemy.y, enemy.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(0,0,0,.45)";
  ctx.fillRect(enemy.x - enemy.r, enemy.y - enemy.r - 8, enemy.r * 2, 4);
  ctx.fillStyle = "#7dd97f";
  ctx.fillRect(enemy.x - enemy.r, enemy.y - enemy.r - 8, enemy.r * 2 * clamp(enemy.hp / enemy.maxHp, 0, 1), 4);
}

function drawShot(shot) {
  ctx.fillStyle = "#8cecff";
  ctx.beginPath();
  ctx.arc(shot.x, shot.y, shot.r, 0, Math.PI * 2);
  ctx.fill();
}

function drawDrop(drop) {
  ctx.fillStyle = drop.type === "xp" ? "#67d7ff" : "#f3c96b";
  ctx.beginPath();
  ctx.arc(drop.x, drop.y, drop.r, 0, Math.PI * 2);
  ctx.fill();
}

function drawPopup(popup) {
  ctx.globalAlpha = clamp(popup.life / 0.45, 0, 1);
  ctx.fillStyle = "#fff7d6";
  ctx.font = "700 13px system-ui";
  ctx.textAlign = "center";
  ctx.fillText(popup.text, popup.x, popup.y);
  ctx.globalAlpha = 1;
}

function updateHud() {
  if (!game) return;
  ui.time.textContent = Math.max(0, Math.ceil(runDuration - game.elapsed));
  ui.level.textContent = game.level;
  ui.runes.textContent = game.runes;
  ui.xpBar.style.width = `${clamp((game.xp / game.xpNeed) * 100, 0, 100)}%`;
}

function updateMetaUI() {
  ui.bankedRunes.textContent = meta.runes;
  ui.metaDamage.textContent = `Lv ${meta.damage}`;
  ui.metaMagnet.textContent = `Lv ${meta.magnet}`;
  ui.metaReward.textContent = `Lv ${meta.reward}`;
}

function buyMeta(kind) {
  const cost = 8 + meta[kind] * 6;
  if (meta.runes < cost) return;
  meta.runes -= cost;
  meta[kind] += 1;
  saveMeta();
  updateMetaUI();
}

function loop(now) {
  const dt = Math.min(0.033, (now - lastTime) / 1000);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function dist(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function setPointer(event) {
  const rect = canvas.getBoundingClientRect();
  pointer = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

window.addEventListener("resize", resize);
window.addEventListener("keydown", (event) => keys.add(event.key.toLowerCase()));
window.addEventListener("keyup", (event) => keys.delete(event.key.toLowerCase()));
canvas.addEventListener("pointerdown", (event) => {
  canvas.setPointerCapture(event.pointerId);
  setPointer(event);
});
canvas.addEventListener("pointermove", (event) => {
  if (pointer) setPointer(event);
});
canvas.addEventListener("pointerup", () => {
  pointer = null;
});
canvas.addEventListener("pointercancel", () => {
  pointer = null;
});

ui.startBtn.addEventListener("click", startRun);
ui.againBtn.addEventListener("click", () => {
  ui.resultScreen.classList.add("hidden");
  ui.startScreen.classList.remove("hidden");
});
ui.pauseBtn.addEventListener("click", () => {
  if (!game || choosing || game.state !== "running") return;
  paused = !paused;
  ui.pauseBtn.textContent = paused ? "Resume" : "Pause";
  lastTime = performance.now();
});

document.querySelectorAll(".meta").forEach((button) => {
  button.addEventListener("click", () => buyMeta(button.dataset.meta));
});

resize();
updateMetaUI();
game = newGame();
requestAnimationFrame(loop);
