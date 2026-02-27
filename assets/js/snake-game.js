// Snake Game — with Firebase leaderboard & username support
(function () {
  'use strict';

  // --- Constants ---
  var COLS = 20, ROWS = 20, CELL = 20;
  var WIDTH = COLS * CELL, HEIGHT = ROWS * CELL;
  var INITIAL_SPEED = 150;   // ms per tick
  var SPEED_STEP = 3;        // ms faster per food
  var MIN_SPEED = 60;

  // --- DOM refs ---
  var canvas = document.getElementById('snake-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  var scoreEl = document.getElementById('snake-score');
  var highEl = document.getElementById('snake-high');
  var overlay = document.getElementById('snake-overlay');
  var overlayTitle = document.getElementById('snake-overlay-title');
  var overlayBtn = document.getElementById('snake-overlay-btn');
  var overlayScore = document.getElementById('snake-overlay-score');
  var nameGroup = document.getElementById('snake-name-group');
  var nameInput = document.getElementById('snake-name-input');
  var leaderboardList = document.getElementById('snake-leaderboard-list');

  // --- State ---
  var snake, direction, nextDirection, food, score, highScore, speed, loop, running;
  var playerName = '';

  // --- Username persistence ---
  function loadUsername() {
    try { return localStorage.getItem('snake-username') || ''; } catch (e) { return ''; }
  }
  function saveUsername(name) {
    try { localStorage.setItem('snake-username', name); } catch (e) { /* noop */ }
  }

  // Pre-fill name input
  playerName = loadUsername();
  if (nameInput) nameInput.value = playerName;

  // --- Firebase helpers ---
  function getFirestore() {
    return (typeof db !== 'undefined' && db) ? db : null;
  }

  function submitScore(name, pts) {
    var firestore = getFirestore();
    if (!firestore || pts <= 0) return;
    firestore.collection('snake-scores').add({
      name: name,
      score: pts,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function () {
      fetchLeaderboard();
    }).catch(function (err) {
      console.warn('Score submit failed:', err);
    });
  }

  function fetchLeaderboard() {
    var firestore = getFirestore();
    if (!firestore) {
      renderLeaderboard(null);
      return;
    }
    firestore.collection('snake-scores')
      .orderBy('score', 'desc')
      .limit(10)
      .get()
      .then(function (snapshot) {
        var entries = [];
        snapshot.forEach(function (doc) {
          var d = doc.data();
          entries.push({ name: d.name, score: d.score });
        });
        renderLeaderboard(entries);
      })
      .catch(function (err) {
        console.warn('Leaderboard fetch failed:', err);
        renderLeaderboard(null);
      });
  }

  function renderLeaderboard(entries) {
    if (!leaderboardList) return;
    leaderboardList.innerHTML = '';

    if (!entries) {
      leaderboardList.innerHTML = '<li class="snake-leaderboard-empty">No scores yet — be the first!</li>';
      return;
    }
    if (entries.length === 0) {
      leaderboardList.innerHTML = '<li class="snake-leaderboard-empty">No scores yet — be the first!</li>';
      return;
    }

    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      var li = document.createElement('li');
      li.className = 'snake-leaderboard-entry';
      if (e.name === playerName) {
        li.className += ' snake-leaderboard-mine';
      }
      li.innerHTML =
        '<span class="snake-leaderboard-rank">' + (i + 1) + '</span>' +
        '<span class="snake-leaderboard-name">' + escapeHtml(e.name) + '</span>' +
        '<span class="snake-leaderboard-pts">' + e.score + '</span>';
      leaderboardList.appendChild(li);
    }
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // --- Helpers ---
  function rand(max) { return Math.floor(Math.random() * max); }

  function getCSS(prop) {
    return getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
  }

  // --- High score persistence ---
  function loadHigh() {
    try { return parseInt(localStorage.getItem('snake-high'), 10) || 0; } catch (e) { return 0; }
  }
  function saveHigh(v) {
    try { localStorage.setItem('snake-high', v); } catch (e) { /* noop */ }
  }

  // --- Init / Reset ---
  function init() {
    var midX = Math.floor(COLS / 2);
    var midY = Math.floor(ROWS / 2);
    snake = [
      { x: midX, y: midY },
      { x: midX - 1, y: midY },
      { x: midX - 2, y: midY }
    ];
    direction = 'right';
    nextDirection = 'right';
    score = 0;
    highScore = loadHigh();
    speed = INITIAL_SPEED;
    running = false;
    updateScore();
    placeFood();
    draw();
    showOverlay('Snake', 'Play', undefined, true);
  }

  // --- Food placement ---
  function placeFood() {
    var occupied = {};
    snake.forEach(function (s) { occupied[s.x + ',' + s.y] = true; });
    var free = [];
    for (var x = 0; x < COLS; x++) {
      for (var y = 0; y < ROWS; y++) {
        if (!occupied[x + ',' + y]) free.push({ x: x, y: y });
      }
    }
    food = free.length ? free[rand(free.length)] : null;
  }

  // --- Score ---
  function updateScore() {
    if (scoreEl) scoreEl.textContent = score;
    if (highEl) highEl.textContent = highScore;
  }

  // --- Overlay ---
  function showOverlay(title, btnText, finalScore, showName) {
    if (overlayTitle) overlayTitle.textContent = title;
    if (overlayBtn) overlayBtn.textContent = btnText;
    if (overlayScore) overlayScore.textContent = finalScore !== undefined ? 'Score: ' + finalScore : '';
    if (nameGroup) nameGroup.style.display = showName ? '' : 'none';
    if (showName && nameInput) {
      nameInput.value = playerName;
      setTimeout(function () { nameInput.focus(); }, 100);
    }
    if (overlay) overlay.classList.add('visible');
  }
  function hideOverlay() {
    if (overlay) overlay.classList.remove('visible');
  }

  // --- Drawing ---
  function draw() {
    var tint = getCSS('--color-tint') || '#f0fdfa';
    var wash = getCSS('--color-wash') || '#ccfbf1';
    var dark = getCSS('--color-dark') || '#0f766e';
    var light = getCSS('--color-light') || '#14b8a6';
    var secondary = getCSS('--color-secondary') || '#0ea5e9';

    // Background
    ctx.fillStyle = tint;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Grid lines
    ctx.strokeStyle = wash;
    ctx.lineWidth = 0.5;
    for (var x = 0; x <= COLS; x++) {
      ctx.beginPath(); ctx.moveTo(x * CELL, 0); ctx.lineTo(x * CELL, HEIGHT); ctx.stroke();
    }
    for (var y = 0; y <= ROWS; y++) {
      ctx.beginPath(); ctx.moveTo(0, y * CELL); ctx.lineTo(WIDTH, y * CELL); ctx.stroke();
    }

    // Food
    if (food) {
      var fx = food.x * CELL + CELL / 2;
      var fy = food.y * CELL + CELL / 2;
      var pulse = 5 + Math.sin(Date.now() / 200) * 2;
      ctx.save();
      ctx.shadowColor = secondary;
      ctx.shadowBlur = pulse;
      ctx.fillStyle = secondary;
      ctx.beginPath();
      ctx.arc(fx, fy, CELL / 2 - 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Snake body (draw tail-to-head so head is on top)
    for (var i = snake.length - 1; i >= 0; i--) {
      var seg = snake[i];
      var t = snake.length > 1 ? i / (snake.length - 1) : 1;
      // Gradient: tail = light, head = dark
      var r = lerp(parseInt(light.slice(1, 3), 16), parseInt(dark.slice(1, 3), 16), t);
      var g = lerp(parseInt(light.slice(3, 5), 16), parseInt(dark.slice(3, 5), 16), t);
      var b = lerp(parseInt(light.slice(5, 7), 16), parseInt(dark.slice(5, 7), 16), t);
      ctx.fillStyle = 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';

      var sx = seg.x * CELL + 1;
      var sy = seg.y * CELL + 1;
      var sw = CELL - 2;
      roundRect(ctx, sx, sy, sw, sw, 4);
      ctx.fill();
    }

    // Eyes on head
    if (snake.length) {
      var head = snake[0];
      var hx = head.x * CELL + CELL / 2;
      var hy = head.y * CELL + CELL / 2;
      var dx = 0, dy = 0;
      if (direction === 'right') dx = 3;
      else if (direction === 'left') dx = -3;
      else if (direction === 'up') dy = -3;
      else dy = 3;

      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(hx + dx - 3, hy + dy - 3 * (dx ? 1 : 0), 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(hx + dx + 3, hy + dy + 3 * (dx ? 1 : 0), 2.5, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#1e293b';
      ctx.beginPath(); ctx.arc(hx + dx - 3, hy + dy - 3 * (dx ? 1 : 0), 1.2, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(hx + dx + 3, hy + dy + 3 * (dx ? 1 : 0), 1.2, 0, Math.PI * 2); ctx.fill();
    }
  }

  function lerp(a, b, t) { return a + (b - a) * t; }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  // --- Game loop ---
  function tick() {
    direction = nextDirection;
    var head = { x: snake[0].x, y: snake[0].y };

    if (direction === 'up') head.y--;
    else if (direction === 'down') head.y++;
    else if (direction === 'left') head.x--;
    else head.x++;

    // Wall collision
    if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
      return gameOver();
    }

    // Self collision
    for (var i = 0; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        return gameOver();
      }
    }

    snake.unshift(head);

    // Eat food
    if (food && head.x === food.x && head.y === food.y) {
      score++;
      if (score > highScore) {
        highScore = score;
        saveHigh(highScore);
      }
      updateScore();
      speed = Math.max(MIN_SPEED, speed - SPEED_STEP);
      placeFood();
      restartLoop();
    } else {
      snake.pop();
    }

    draw();
  }

  function restartLoop() {
    clearInterval(loop);
    loop = setInterval(tick, speed);
  }

  function startGame() {
    // Read and validate username
    if (nameInput) {
      var name = nameInput.value.trim();
      if (!name) {
        nameInput.focus();
        nameInput.style.borderColor = '#f87171';
        setTimeout(function () { nameInput.style.borderColor = ''; }, 1500);
        return;
      }
      playerName = name;
      saveUsername(playerName);
    }

    if (running) return;
    running = true;
    hideOverlay();
    restartLoop();
  }

  function gameOver() {
    running = false;
    clearInterval(loop);
    draw();
    // Submit score to Firebase
    submitScore(playerName, score);
    showOverlay('Game Over', 'Retry', score, true);
  }

  // --- Direction helpers ---
  var OPPOSITES = { up: 'down', down: 'up', left: 'right', right: 'left' };

  function setDir(dir) {
    if (!running) { init(); startGame(); return; }
    if (OPPOSITES[dir] !== direction) {
      nextDirection = dir;
    }
  }

  // --- Keyboard ---
  var KEY_MAP = {
    ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
    w: 'up', s: 'down', a: 'left', d: 'right',
    W: 'up', S: 'down', A: 'left', D: 'right'
  };

  document.addEventListener('keydown', function (e) {
    // Don't hijack typing in any input field
    var tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') {
      if (e.key === 'Enter' && e.target === nameInput) {
        e.preventDefault();
        init();
        startGame();
      }
      return;
    }

    if (e.key === ' ' || e.key === 'Enter') {
      if (!running) { e.preventDefault(); init(); startGame(); }
      return;
    }
    var dir = KEY_MAP[e.key];
    if (dir) {
      e.preventDefault();
      setDir(dir);
    }
  });

  // --- Touch swipe on canvas ---
  var touchStartX, touchStartY;
  canvas.addEventListener('touchstart', function (e) {
    var t = e.touches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
  }, { passive: true });

  canvas.addEventListener('touchend', function (e) {
    if (touchStartX === undefined) return;
    var t = e.changedTouches[0];
    var dx = t.clientX - touchStartX;
    var dy = t.clientY - touchStartY;
    var absDx = Math.abs(dx), absDy = Math.abs(dy);
    if (Math.max(absDx, absDy) < 20) {
      // Tap — start game
      if (!running) { init(); startGame(); }
      return;
    }
    if (absDx > absDy) {
      setDir(dx > 0 ? 'right' : 'left');
    } else {
      setDir(dy > 0 ? 'down' : 'up');
    }
  }, { passive: true });

  // --- D-pad buttons ---
  ['up', 'down', 'left', 'right'].forEach(function (dir) {
    var btn = document.getElementById('dpad-' + dir);
    if (btn) {
      btn.addEventListener('touchstart', function (e) {
        e.preventDefault();
        setDir(dir);
      });
      btn.addEventListener('click', function () { setDir(dir); });
    }
  });

  // --- Overlay play button ---
  if (overlayBtn) {
    overlayBtn.addEventListener('click', function () { init(); startGame(); });
  }

  // --- Boot ---
  init();
  fetchLeaderboard();
})();
