/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);


//imports



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
      }, 200);
    } else {
      // show mobile-menu
      mobileNav.classList.remove("slide-up");
      mobileNav.classList.add("slide-down");
      burgerButton.setAttribute("aria-expanded", "true");
      // transition burger icon to x icon
      burgerImg.classList.add("burger-img-opacity");
      xImg.classList.add("x-img-opacity");
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?url=false!../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?url=false!../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/*stylelint-disable*/\n/*stylelint-disable*/\n/*\n\tHTML5 Reset :: style.css\n\t----------------------------------------------------------\n\tWe have learned much from/been inspired by/taken code where offered from:\n\n\tEric Meyer\t\t\t\t\t:: http://meyerweb.com\n\tHTML5 Doctor\t\t\t\t:: http://html5doctor.com\n\tand the HTML5 Boilerplate\t:: http://html5boilerplate.com\n\n-------------------------------------------------------------------------------*/\n/* Let's default this puppy out\n-------------------------------------------------------------------------------*/\nhtml, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-weight: normal;\n  vertical-align: baseline;\n  background: transparent; }\n\nmain, article, aside, figure, footer, header, nav, section, details, summary {\n  display: block; }\n\n/* Handle box-sizing while better addressing child elements:\n   http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */\nhtml {\n  box-sizing: border-box; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\n/* consider resetting the default cursor: https://gist.github.com/murtaugh/5247154 */\n/* Responsive images and other embedded objects */\n/* if you don't have full control over `img` tags (if you have to overcome attributes), consider adding height: auto */\nimg,\nobject,\nembed {\n  max-width: 100%; }\n\n/*\n   Note: keeping IMG here will cause problems if you're using foreground images as sprites.\n\tIn fact, it *will* cause problems with Google Maps' controls at small size.\n\tIf this is the case for you, try uncommenting the following:\n\n#map img {\n\t\tmax-width: none;\n}\n*/\n/* force a vertical scrollbar to prevent a jumpy page */\nhtml {\n  overflow-y: scroll; }\n\n/* we use a lot of ULs that aren't bulleted.\n\tyou'll have to restore the bullets within content,\n\twhich is fine because they're probably customized anyway */\nul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\ndel {\n  text-decoration: line-through; }\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted #000;\n  cursor: help; }\n\n/* tables still need cellspacing=\"0\" in the markup */\ntable {\n  border-collapse: separate;\n  border-spacing: 0; }\n\nth {\n  font-weight: bold;\n  vertical-align: bottom; }\n\ntd {\n  font-weight: normal;\n  vertical-align: top; }\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0; }\n\ninput, select {\n  vertical-align: middle; }\n\npre {\n  white-space: pre;\n  /* CSS2 */\n  white-space: pre-wrap;\n  /* CSS 2.1 */\n  white-space: pre-line;\n  /* CSS 3 (and 2.1 as well, actually) */\n  word-wrap: break-word;\n  /* IE */ }\n\ninput[type=\"radio\"] {\n  vertical-align: text-bottom; }\n\ninput[type=\"checkbox\"] {\n  vertical-align: bottom; }\n\n.ie7 input[type=\"checkbox\"] {\n  vertical-align: baseline; }\n\n.ie6 input {\n  vertical-align: text-bottom; }\n\nselect, input, textarea {\n  font: 99% sans-serif; }\n\ntable {\n  font-size: inherit;\n  font: 100%; }\n\nsmall {\n  font-size: 85%; }\n\nstrong {\n  font-weight: bold; }\n\ntd, td img {\n  vertical-align: top; }\n\n/* Make sure sup and sub don't mess with your line-heights http://gist.github.com/413930 */\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* standardize any monospaced elements */\npre, code, kbd, samp {\n  font-family: monospace, sans-serif; }\n\n/* hand cursor on clickable elements */\n.clickable,\nlabel,\ninput[type=button],\ninput[type=submit],\ninput[type=file],\nbutton {\n  cursor: pointer; }\n\n/* Webkit browsers add a 2px margin outside the chrome of form elements */\nbutton, input, select, textarea {\n  margin: 0; }\n\n/* make buttons play nice in IE */\nbutton,\ninput[type=button] {\n  width: auto;\n  overflow: visible; }\n\n/* scale images in IE7 more attractively */\n.ie7 img {\n  -ms-interpolation-mode: bicubic; }\n\n/* prevent BG image flicker upon hover\n   (commented out as usage is rare, and the filter syntax messes with some pre-processors)\n.ie6 html {filter: expression(document.execCommand(\"BackgroundImageCache\", false, true));}\n*/\n/* let's clear some floats */\n.clearfix:after {\n  content: \" \";\n  display: block;\n  clear: both; }\n\n/*stylelint-disable*/\n/*stylelint-disable*/\n/*stylelint-disable*/\n.container {\n  width: 100vw;\n  height: 100vh;\n  min-height: 900px;\n  background: linear-gradient(rgba(0, 24, 32, 0.2), rgba(0, 24, 32, 0.2)), url(\"./images/jpg-files/bg_image.jpg\");\n  background-repeat: no-repeat;\n  background-size: 182%;\n  background-position: 68% 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  overflow: hidden;\n  position: relative; }\n\n/*stylelint-disable*/\n.main-header {\n  width: 100%;\n  padding-left: 5.5%;\n  padding-right: 5.59%;\n  margin-top: 2.5vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n\n.header {\n  margin-top: 3.45vh;\n  width: 14.7vw;\n  object-fit: cover; }\n\n.nav-list {\n  margin-top: 0.3vh;\n  text-transform: uppercase;\n  font-family: \"Open Sans\", sans-serif;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.nav-list-icons {\n  display: none; }\n\n.nav-element {\n  margin-right: 3.38vw;\n  position: relative; }\n  .nav-element:after {\n    position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0.4vh;\n    background-color: #ffffff;\n    top: 99%;\n    left: 0;\n    transition: all 0.2s; }\n  .nav-element:hover:after {\n    width: 102%; }\n\n.nav-link {\n  font-size: 1.12vw;\n  color: #ffffff;\n  font-weight: 600;\n  text-decoration: none; }\n\n.addOn {\n  margin-right: 3.6vw; }\n\n.nav-element-last {\n  width: 10.3vw;\n  height: 5vh;\n  min-height: 44px;\n  border: 0.3vw solid #ffffff;\n  border-radius: 5px;\n  margin-right: 0;\n  text-align: center;\n  line-height: 4.2vh;\n  vertical-align: middle;\n  margin-top: 0.3vh; }\n  .nav-element-last:hover {\n    background-color: #ffffff; }\n    .nav-element-last:hover .nav-link-last {\n      color: #001820; }\n\n.burger-button {\n  display: none; }\n\n/*stylelint-disable*/\n.main-content {\n  margin-top: 12.95vh;\n  width: 40.4%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.content-main-text {\n  width: 95.5%;\n  line-height: 4.9vh;\n  font-size: 2.48vw;\n  font-weight: 500;\n  color: #000000;\n  text-align: center;\n  font-family: \"Raleway\", sans-serif; }\n  .content-main-text span {\n    color: #ffffff;\n    font-weight: 600; }\n\n.line-break {\n  display: none; }\n\n.circle-square-image {\n  width: 7vw;\n  height: 7vw;\n  margin-top: 13.15vh;\n  object-fit: cover; }\n\n.content-main-sub-text {\n  margin-top: 14vh;\n  color: #ffffff;\n  font-size: 1.24vw;\n  text-align: center;\n  font-family: \"Open Sans\", sans-serif;\n  letter-spacing: 0.0039vw; }\n\n.contact-list {\n  width: 89.6%;\n  max-width: 41vw;\n  margin-top: 2.4vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n\n.contact-element {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n  .contact-element span {\n    color: #ffffff;\n    text-transform: uppercase;\n    font-family: \"Open Sans\", sans-serif; }\n\n.contact-element-icon {\n  width: 1.70vw;\n  height: 1.70vw;\n  margin-right: 0.40vw; }\n\n.contact-element-link {\n  text-decoration: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.contact-element-text {\n  margin-left: 0.6vw;\n  font-size: 1.12vw; }\n\n.contact-element-icon-google {\n  width: 2.2vw;\n  height: 2.2vw;\n  margin-right: 0.24vw; }\n\n.rotate {\n  animation: rotate 0.5s linear 1 forwards; }\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg); } }\n\n/*stylelint-disable*/\n.bottom-nav-link {\n  z-index: 1;\n  width: 6.9vw;\n  height: 6.9vw;\n  background-color: #ffffff;\n  position: absolute;\n  border-radius: 6%;\n  bottom: -3.7vw;\n  border: none;\n  transform: rotate(45deg);\n  font-family: \"Open Sans\", sans-serif; }\n\n.bottom-nav-link-text {\n  position: absolute;\n  color: #001820;\n  font-size: 1vw;\n  text-transform: uppercase;\n  top: 17%;\n  right: 53%;\n  transform: rotate(-45deg); }\n\n.bottom-nav-link-text-2 {\n  display: none;\n  position: absolute;\n  color: #001820;\n  font-size: 14px;\n  text-transform: uppercase;\n  top: 30%;\n  right: 49%;\n  transform: rotate(-45deg); }\n\n/*stylelint-disable*/\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .container {\n    min-height: 530px;\n    background: linear-gradient(rgba(0, 24, 32, 0.2), rgba(0, 24, 32, 0.2)), url(\"./images/jpg-files/bg_image.jpg\");\n    background-repeat: no-repeat;\n    background-size: 384%;\n    background-position: 61% 45%; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .container {\n    min-height: 768px;\n    background: linear-gradient(rgba(0, 24, 32, 0.2), rgba(0, 24, 32, 0.2)), url(\"./images/jpg-files/bg_image.jpg\");\n    background-repeat: no-repeat;\n    background-size: 193%;\n    background-position: 66% 36%; } }\n\n/*stylelint-disable*/\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .main-header {\n    height: 13.8vh;\n    margin-top: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .main-header {\n    height: 16vh;\n    margin-top: 0;\n    padding-left: 3.65vw;\n    padding-right: 4.05vw; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .header {\n    margin: 0;\n    height: 5.6vh;\n    width: 35%;\n    z-index: 3; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .header {\n    margin-top: 4.4vh;\n    width: 17.50%; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .main-nav {\n    z-index: 2;\n    width: 100%;\n    height: 0;\n    position: absolute;\n    top: 0;\n    background-color: #001820;\n    margin-top: 0 !important;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .nav-list {\n    width: 100%;\n    height: 53%;\n    margin-top: 21.1vh;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .nav-element {\n    height: 25px;\n    line-height: 4.6vh;\n    margin-bottom: 9.45vh;\n    margin-right: 0;\n    padding: 0; }\n    .nav-element:after {\n      content: none; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .nav-element {\n    line-height: 4vh;\n    height: 4.20vh;\n    margin-right: 4.13vw; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .nav-link {\n    font-size: 5vw; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .nav-link {\n    font-size: 1.1vw;\n    letter-spacing: 0.032vw; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .nav-list-icons {\n    width: 64%;\n    margin-top: 15%;\n    overflow: hidden;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .nav-element-last {\n    width: 60vw;\n    padding: 3.5vh;\n    line-height: 0;\n    border: 0.6vh solid #ffffff; }\n    .nav-element-last:hover {\n      background-color: transparent; }\n      .nav-element-last:hover .nav-link-last {\n        color: #ffffff; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .nav-element-last {\n    width: 11.3vw;\n    height: 4.5vh;\n    min-height: 33px;\n    margin-top: 0;\n    line-height: 3.4vh;\n    margin-right: 0; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .nav-icon {\n    width: 8vw;\n    height: 8vw;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .burger-button {\n    width: 9vw;\n    position: absolute;\n    display: block;\n    top: 4.3vh;\n    right: 7.05vw;\n    z-index: 3;\n    padding: 0;\n    background-color: transparent;\n    border: none; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .burger-img {\n    left: 0;\n    position: absolute;\n    transition: all 0.2s;\n    opacity: 1; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .x-img {\n    display: none;\n    width: 6.8vw;\n    left: 1vw;\n    position: absolute;\n    transition: all 0.2s;\n    opacity: 0; } }\n\n@media only screen and (min-width: 1440px) {\n  .x-img {\n    display: none; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .x-img {\n    display: none; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .x-img-opacity {\n    display: block;\n    opacity: 1; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .burger-img-opacity {\n    opacity: 0; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .slide-down {\n    animation: slide-down 0.3s linear 1 forwards; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .slide-up {\n    animation: slide-up 0.3s linear 1 forwards; } }\n\n@keyframes slide-down {\n  100% {\n    height: 100%; } }\n\n@keyframes slide-up {\n  0% {\n    height: 100%; }\n  100% {\n    height: 0; } }\n\n/*stylelint-disable*/\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .main-content {\n    margin-top: 3.6vh;\n    width: 69vw; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .main-content {\n    margin-top: 8.1vh;\n    width: 51vw; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .content-main-text {\n    color: #ffffff;\n    width: 100%;\n    font-size: 5.8vw;\n    line-height: 4.5vh;\n    letter-spacing: 0.1px; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .content-main-text {\n    font-size: 2.7vw;\n    letter-spacing: 0.04vw;\n    line-height: 4.67vh; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .line-break-desktop {\n    display: none; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .line-break {\n    display: block; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .circle-square-image {\n    width: 20vw;\n    height: 20vw;\n    margin-top: 4.2vh;\n    margin-bottom: 0; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .circle-square-image {\n    width: 7.8vw;\n    height: 7.8vw;\n    margin-top: 13.7vh; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .content-main-sub-text {\n    font-size: 3.2vw;\n    line-height: 3.7vh;\n    margin-top: 4vh;\n    letter-spacing: -0.04vw; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .content-main-sub-text {\n    margin-left: -0.4vw;\n    margin-top: 14.8vh;\n    font-size: 1.4vw;\n    letter-spacing: -0.004vw; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .contact-list {\n    margin-top: 5.6vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: space-between; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .contact-list {\n    width: 78.8%;\n    margin-top: 3.4vh;\n    margin-right: 0.3vw; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .contact-element {\n    margin-bottom: 5.35vh;\n    margin-left: 1.7vw;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .contact-element-link {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .contact-element-icon {\n    width: 5vw;\n    height: 5vw; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .contact-element-icon {\n    width: 1.65vw;\n    height: 1.65vw;\n    margin-top: 0; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .contact-element-icon-google {\n    width: 5vw;\n    height: 5vw;\n    margin-top: 0;\n    margin-right: 0.4vw; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .contact-element-icon-google {\n    width: 2.4vw;\n    height: 2.4vw;\n    margin: 0; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .contact-element-text {\n    font-size: 3.8vw;\n    margin-left: 4vw; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .contact-element-text {\n    font-size: 1.15vw;\n    margin-left: 1.1vw;\n    letter-spacing: 0.013vw; } }\n\n/*stylelint-disable*/\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .bottom-nav-link {\n    width: 17vw;\n    height: 17vw;\n    bottom: -9vw;\n    border-radius: 0.8vw; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .bottom-nav-link {\n    width: 8vw;\n    height: 8vw;\n    bottom: -4.2vw; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .bottom-nav-link-text {\n    display: none; } }\n\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\n  .bottom-nav-link-text {\n    font-size: 1.05vw;\n    top: 20%;\n    right: 55%; } }\n\n@media only screen and (min-width: 320px) and (max-width: 550px) {\n  .bottom-nav-link-text-2 {\n    display: block;\n    z-index: 1;\n    top: 6.5%;\n    right: 69%;\n    font-size: 4.5vw; } }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map