"use strict";

//============================================

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("loaded");

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".header__burger")) {
      document.documentElement.classList.toggle("menu-open");
    }
  });
});
