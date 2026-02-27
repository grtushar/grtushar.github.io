---
layout: archive
title: "Games"
permalink: /games/
author_profile: true
---

<div class="snake-game">
  <h2>Snake</h2>

  <div class="snake-score-header">
    <span class="snake-score-label">Score: <strong id="snake-score">0</strong></span>
    <span class="snake-high-label">Best: <strong id="snake-high">0</strong></span>
  </div>

  <div class="snake-canvas-wrap">
    <canvas id="snake-canvas" width="400" height="400"></canvas>
    <div class="snake-overlay visible" id="snake-overlay">
      <div class="snake-overlay-title" id="snake-overlay-title">Snake</div>
      <div class="snake-overlay-score" id="snake-overlay-score"></div>
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

<script src="/assets/js/snake-game.js"></script>
