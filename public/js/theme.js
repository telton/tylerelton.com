(function () {
  'use strict';

  const STORAGE_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleLabel = document.getElementById('theme-label');

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

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggleLabel) {
      toggleLabel.textContent = theme === DARK ? 'light' : 'dark';
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
