'use strict';

//imports
import Sass from "./main.scss";

document.addEventListener("DOMContentLoaded", () => {

  const circleSquare = document.querySelector(".circle-square-image");

  circleSquare.addEventListener("click", function () {
    event.preventDefault();
    this.classList.remove("rotate");
    void circleSquare.offsetWidth;
    circleSquare.classList.add("rotate");
  });

});
