const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  theme_switcher: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),
};

refs.theme_switcher.addEventListener('click', themeSwitcher);

function themeSwitcher(event) {
  if (!darkThemeEnabled()) {
    enableLightTheme();
  } else {
    enableDarkTheme();
  }
}

function darkThemeEnabled() {
  return refs.theme_switcher.checked;
}

function enableLightTheme() {
  refs.theme_switcher.checked = false;
  refs.body.classList.toggle(Theme.DARK);
  refs.body.classList.toggle(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

function enableDarkTheme() {
  refs.theme_switcher.checked = true;
  refs.body.classList.toggle(Theme.DARK);
  refs.body.classList.toggle(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
}

function pageLoad() {
  if (!localStorage.hasOwnProperty('theme')) {
    localStorage.setItem('theme', Theme.LIGHT);
    return;
  }
  const curr = localStorage.getItem('theme');
  if (curr === Theme.DARK) {
    enableDarkTheme();
  }
}

pageLoad();
