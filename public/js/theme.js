(function () {
  'use strict';

  const STORAGE_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const moonIcon = document.getElementById('theme-icon-moon');
  const sunIcon = document.getElementById('theme-icon-sun');

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (_) {}
  }

  function updateIcons(theme) {
    if (!moonIcon || !sunIcon) return;
    if (theme === DARK) {
      moonIcon.classList.remove('hidden');
      sunIcon.classList.add('hidden');
    } else {
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
    }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    updateIcons(theme);
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-label', 'Switch to ' + (theme === DARK ? 'light' : 'dark') + ' mode');
      toggleBtn.setAttribute('title', 'Switch to ' + (theme === DARK ? 'light' : 'dark') + ' mode');
    }
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') || getSystemTheme();
    const next = current === DARK ? LIGHT : DARK;
    applyTheme(next);
    setStoredTheme(next);
  }

  function init() {
    const stored = getStoredTheme();
    const initial = stored || getSystemTheme();
    applyTheme(initial);

    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
