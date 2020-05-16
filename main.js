document.querySelector(".hamburger-container").addEventListener("click", openNav);

function openNav() {
  var element = document.querySelector(".nav-links");
  var hamburger = document.querySelector(".hamburger-container");
  var overlay = document.querySelector(".header-nav-overlay");
  element.classList.toggle("nav-links-mobile");
  hamburger.classList.toggle("hamburger-container-close");
  overlay.classList.toggle("header-nav-overlay-active");
}