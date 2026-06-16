/**
 * MOBILE MENU TOGGLE
 */
const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const menuIcon = menuBtn.querySelector("ion-icon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-80");
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("opacity-100");

  menuIcon.setAttribute(
    "name",
    mobileMenu.classList.contains("max-h-80")
      ? "close-outline"
      : "menu-outline",
  );
});

// menu auto close
const navLinks = mobileMenu.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.remove("max-h-80");

    mobileMenu.classList.add("opacity-0");
    mobileMenu.classList.remove("opacity-100");

    menuIcon.setAttribute("name", "menu-outline");
  });
});

/**
 * Dark mode toggle
 */
const themeToggle = document.querySelector("#theme-toggle")
const themeIcon = document.querySelector("#theme-icon")

const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark")
  themeIcon.setAttribute("name", "sunny-outline")
}

themeToggle.addEventListener("click",() => {
  document.documentElement.classList.toggle("dark")

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark")
    themeIcon.setAttribute("name", "sunny-outline")
  } else {
    localStorage.setItem("theme", "light")
    themeIcon.setAttribute("name", "moon-outline")
  }
})
