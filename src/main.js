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

  burgerButton.addEventListener("click", function () {
    if (mobileNav.classList.contains("slide-down")) {
      mobileNav.classList.remove("slide-down");
      mobileNav.classList.add("slide-up");
    } else {
      mobileNav.classList.remove("slide-up");
      mobileNav.classList.add("slide-down");
    }
  })

});
