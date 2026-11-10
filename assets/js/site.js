/* Site behaviour: cursor spotlight, section scroll-spy, post table of
   contents, and copy buttons on code blocks. No dependencies. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COPY_ICON = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

  // --- Cursor spotlight (homepage) -------------------------------------
  var spotlight = document.querySelector('.spotlight');
  if (spotlight && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', function (e) {
      spotlight.style.setProperty('--spot-x', e.clientX + 'px');
      spotlight.style.setProperty('--spot-y', e.clientY + 'px');
    }, { passive: true });
  }

  // --- Scroll-spy: mark the link whose section is in view --------------
  function scrollSpy(links, offsetRatio) {
    var pairs = [];
    links.forEach(function (link) {
      var id = decodeURIComponent(link.hash.slice(1));
      var target = id && document.getElementById(id);
      if (target) pairs.push({ link: link, target: target });
    });
    if (!pairs.length) return;

    var ticking = false;
    function update() {
      ticking = false;
      var line = window.innerHeight * offsetRatio;
      var current = pairs[0];
      for (var i = 0; i < pairs.length; i++) {
        if (pairs[i].target.getBoundingClientRect().top <= line) current = pairs[i];
      }
      // At the very bottom, the last section wins
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = pairs[pairs.length - 1];
      }
      pairs.forEach(function (p) {
        var active = p === current;
        p.link.classList.toggle('is-active', active);
        if (active) p.link.setAttribute('aria-current', 'location');
        else p.link.removeAttribute('aria-current');
      });
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.home__nav a[href^="#"]'));
  if (navLinks.length) scrollSpy(navLinks, 0.35);

  // --- Post table of contents ------------------------------------------
  var toc = document.querySelector('[data-toc]');
  var tocList = document.querySelector('[data-toc-list]');
  var prose = document.querySelector('.post .prose');
  if (toc && tocList && prose) {
    var headings = prose.querySelectorAll('h2[id], h3[id]');
    var hasH2 = prose.querySelector('h2[id]') !== null;
    var tocLinks = [];
    Array.prototype.forEach.call(headings, function (h) {
      var li = document.createElement('li');
      if (hasH2 && h.tagName === 'H3') li.className = 'toc__sub';
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      tocList.appendChild(li);
      tocLinks.push(a);
    });
    if (tocLinks.length >= 2) {
      toc.classList.add('has-items');
      scrollSpy(tocLinks, 0.25);
    }
  }

  // --- Code blocks: language label + copy button -----------------------
  var blocks = document.querySelectorAll('.prose div.highlighter-rouge');
  Array.prototype.forEach.call(blocks, function (block) {
    var code = block.querySelector('code');
    if (!code) return;
    var match = /language-([\w+#-]+)/.exec(block.className);
    var lang = match ? match[1] : '';
    if (lang === 'plaintext' || lang === 'text') lang = '';

    var bar = document.createElement('div');
    bar.className = 'code-bar';
    var label = document.createElement('span');
    label.textContent = lang;
    bar.appendChild(label);

    if (navigator.clipboard) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'code-bar__copy';
      button.innerHTML = COPY_ICON + '<span>Copy</span>';
      button.setAttribute('aria-label', 'Copy code to clipboard');
      button.addEventListener('click', function () {
        navigator.clipboard.writeText(code.innerText.replace(/\n$/, '')).then(function () {
          button.querySelector('span').textContent = 'Copied';
          setTimeout(function () { button.querySelector('span').textContent = 'Copy'; }, 2000);
        });
      });
      bar.appendChild(button);
    }
    block.insertBefore(bar, block.firstChild);
  });
})();
