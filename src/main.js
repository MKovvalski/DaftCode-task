'use strict';

//imports
import Sass from "./main.scss";

document.addEventListener("DOMContentLoaded", () => {

  // rotation effect on kolko_kwadrat element

  const circleSquare = document.querySelector(".circle-square-image");

  circleSquare.addEventListener("click", function () {
    event.preventDefault();
    this.classList.remove("rotate");
    void circleSquare.offsetWidth;
    circleSquare.classList.add("rotate");
  });

  // sliding-down/sliding-up mobile nav menu

  const mobileNav = document.querySelector(".main-nav");
  const burgerButton = document.querySelector(".burger-button");
  const burgerImg = document.querySelector(".burger-img");
  const xImg = document.querySelector(".x-img");

  burgerButton.addEventListener("click", function () {
    if (mobileNav.classList.contains("slide-down")) {
      // hide mobile-menu
      mobileNav.classList.remove("slide-down");
      mobileNav.classList.add("slide-up");
      burgerButton.setAttribute("aria-expanded", "false");
      setTimeout(() => {
        // transition x icon to burger icon
        xImg.classList.remove("x-img-opacity");
        burgerImg.classList.remove("burger-img-opacity");
      },200);
    } else {
      // show mobile-menu
      mobileNav.classList.remove("slide-up");
      mobileNav.classList.add("slide-down");
      burgerButton.setAttribute("aria-expanded", "true");
      // transition burger icon to x icon
      burgerImg.classList.add("burger-img-opacity");
      xImg.classList.add("x-img-opacity");
    }
  })

});
