const themeButton = document.getElementById("themeSwitcher");

function getPreferredTheme() {
  // get preferred theme by user's browser
  let preferred_theme = "light"
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    preferred_theme = "dark";
  }
  return preferred_theme
}

function getCurrentTheme() {
  // get current theme based on status of theme switcher icon
  icon = themeButton.querySelector("i");
  if (icon.classList.contains("fa-moon")) {
      current_theme = "dark"
  } else if (icon.classList.contains("fa-sun")) {
      current_theme = "light"
  } else {
      current_theme = "auto"
  }
  return current_theme
}

function updateIcon(theme) {
  // Update icon of the theme switcher button
  if (theme == "dark") {
    fa_icon_class = "fa-solid fa-moon";
  } else if (theme == "light") {
    fa_icon_class = "fa-solid fa-sun";
  } else {
    fa_icon_class = "fa-solid fa-circle-half-stroke";
  }
  icon = themeButton.querySelector("i");
  icon.removeAttribute("class");
  icon.setAttribute("class", fa_icon_class);
  icon.setAttribute("title", "Toggle theme" + " (" + theme + ")");
}

function setTheme(theme) {
  // set a theme by changing the data-bs-theme in the body
  localStorage.setItem("theme", theme); // save choice to local storage
  if (theme == "auto") {
    theme = getPreferredTheme();
  }
  document.body.setAttribute("data-bs-theme", theme);
}

function cycleTheme() {
  theme = getCurrentTheme();
  if (theme == "auto")  {
    theme = "light";
  } else if (theme == "light")  {
    theme = "dark";
  } else if (theme == "dark")  {
    theme = "auto";
  }
  setTheme(theme);
  updateIcon(theme);
}


themeButton.addEventListener("click", () => {
    cycleTheme()
});


let theme = localStorage.getItem("theme");
if (theme) {
  setTheme(theme);
  updateIcon(theme);
} else {
  setTheme("auto");
  updateIcon("auto");
}
