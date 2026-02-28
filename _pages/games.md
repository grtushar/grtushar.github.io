---
layout: archive
title: "Games"
permalink: /games/
author_profile: true
---

<h2 class="snake-heading">Snake</h2>
<div class="snake-game">
  <div class="snake-game-area">
    <div class="snake-score-header">
      <span class="snake-score-label">Score: <strong id="snake-score">0</strong></span>
      <span class="snake-high-label">Best: <strong id="snake-high">0</strong></span>
    </div>

    <div class="snake-canvas-wrap">
      <canvas id="snake-canvas" width="400" height="400"></canvas>
      <div class="snake-overlay visible" id="snake-overlay">
        <div class="snake-overlay-title" id="snake-overlay-title">Snake</div>
        <div class="snake-overlay-score" id="snake-overlay-score"></div>
        <div class="snake-overlay-name-group" id="snake-name-group">
          <label class="snake-overlay-name-label" for="snake-name-input">Your Name</label>
          <input class="snake-overlay-name-input" id="snake-name-input" type="text"
                 maxlength="20" placeholder="Enter name..." autocomplete="off" />
        </div>
        <button class="snake-overlay-btn" id="snake-overlay-btn">Play</button>
      </div>
    </div>

    <div class="snake-dpad">
      <div class="snake-dpad-grid">
        <button class="snake-dpad-btn" id="dpad-up" aria-label="Up">&#9650;</button>
        <button class="snake-dpad-btn" id="dpad-left" aria-label="Left">&#9664;</button>
        <button class="snake-dpad-btn" id="dpad-right" aria-label="Right">&#9654;</button>
        <button class="snake-dpad-btn" id="dpad-down" aria-label="Down">&#9660;</button>
      </div>
    </div>

    <div class="snake-instructions">
      <p><strong>Desktop:</strong> Arrow keys or WASD to move &middot; Space to start</p>
      <p><strong>Mobile:</strong> Swipe on canvas or use the D-pad buttons</p>
    </div>
  </div>

  <div class="snake-leaderboard" id="snake-leaderboard">
    <div class="snake-leaderboard-title">&#127942; Leaderboard</div>
    <ul class="snake-leaderboard-list" id="snake-leaderboard-list">
      <li class="snake-leaderboard-empty">Loading scores...</li>
    </ul>
  </div>
</div>

<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script src="/assets/js/firebase-config.js"></script>
<script src="/assets/js/snake-game.js"></script>
