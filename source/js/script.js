var mainNav=document.querySelector(".main-nav");
var mainNavButton=document.querySelector(".page-header__menu-toggle");
mainNav.classList.remove("main-nav--nojs");
mainNavButton.addEventListener("click", function() {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
  if (mainNavButton.classList.contains("page-header__menu-toggle--open")) {
    mainNavButton.classList.remove("page-header__menu-toggle--open");
    mainNavButton.classList.add("page-header__menu-toggle--close");
  } else {
    mainNavButton.classList.remove("page-header__menu-toggle--close");
    mainNavButton.classList.add("page-header__menu-toggle--open");
  }
});
