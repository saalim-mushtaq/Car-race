/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.css */ \"./src/scss/styles.css\");\n\nconst score = document.querySelector('.score');\nconst startScreen = document.querySelector('.startScreen');\nconst gameArea = document.querySelector('.gameArea'); // console.log(gameArea);\n\nstartScreen.addEventListener('click', start);\nlet player = {\n  speed: 5,\n  score: 0\n};\nlet keys = {\n  ArrowUp: false,\n  ArrowDown: false,\n  ArrowLeft: false,\n  ArrowRight: false\n};\ndocument.addEventListener('keydown', keyDown);\ndocument.addEventListener('keyup', keyUp);\n\nfunction keyDown(e) {\n  e.preventDefault();\n  console.log(e.key);\n  keys[e.key] = true; // console.log(keys)\n}\n\nfunction keyUp(e) {\n  e.preventDefault();\n  keys[e.key] = false; // console.log(e.key);\n  // console.log(keys)\n}\n\nfunction isCollide(a, b) {\n  aRect = a.getBoundingClientRect();\n  bRect = b.getBoundingClientRect();\n  return !(aRect.bottom < bRect.top || aRect.top > bRect.bottom || aRect.right < bRect.left || aRect.left > bRect.right);\n}\n\nfunction moveLines() {\n  let lines = document.querySelectorAll('.lines');\n  lines.forEach(function (item) {\n    if (item.y >= 700) {\n      item.y -= 750;\n    }\n\n    item.y += player.speed;\n    item.style.top = item.y + \"px\";\n  });\n}\n\nfunction endGame() {\n  player.start = false;\n  startScreen.classList.remove('hide');\n  startScreen.innerHTML = \"Game Over <br> Your Final Score is \" + player.score + \"<br> Press Here To Restart The Game\";\n}\n\nfunction moveEnemy(car) {\n  let enemy = document.querySelectorAll('.enemy');\n  enemy.forEach(function (item) {\n    if (isCollide(car, item)) {\n      console.log(\"hit\");\n      endGame();\n    }\n\n    if (item.y >= 700) {\n      item.y -= 750;\n      item.style.left = Math.floor(Math.random() * 350) + \"px\";\n    }\n\n    item.y += player.speed;\n    item.style.top = item.y + \"px\";\n  });\n}\n\nfunction playGame() {\n  let car = document.querySelector('.car');\n  let road = gameArea.getBoundingClientRect();\n\n  if (player.start) {\n    moveLines();\n    moveEnemy(car);\n\n    if (keys.ArrowUp && player.y > road.top + 70) {\n      player.y -= player.speed;\n    }\n\n    if (keys.ArrowDown && player.y < road.bottom - 70) {\n      player.y += player.speed;\n    }\n\n    if (keys.ArrowLeft && player.x > 0) {\n      player.x -= player.speed;\n    }\n\n    if (keys.ArrowRight && player.x < road.width - 50) {\n      player.x += player.speed;\n    }\n\n    car.style.top = player.y + \"px\";\n    car.style.left = player.x + \"px\";\n    window.requestAnimationFrame(playGame);\n    player.score++;\n    score.innerText = \"Score: \" + player.score;\n  }\n}\n\nfunction start() {\n  // gameArea.classList.remove('hide');\n  startScreen.classList.add('hide');\n  gameArea.innerHTML = \"\";\n  player.start = true;\n  player.score = 0;\n  window.requestAnimationFrame(playGame);\n\n  for (let x = 0; x < 5; x++) {\n    let roadLine = document.createElement('div');\n    roadLine.setAttribute('class', 'lines');\n    roadLine.y = x * 150;\n    roadLine.style.top = roadLine.y + \"px\";\n    gameArea.appendChild(roadLine);\n  }\n\n  let car = document.createElement('div');\n  car.setAttribute('class', 'car');\n  gameArea.appendChild(car);\n  player.x = car.offsetLeft;\n  player.y = car.offsetTop;\n\n  for (x = 0; x < 3; x++) {\n    let enemyCar = document.createElement('div');\n    enemyCar.setAttribute('class', 'enemy');\n    enemyCar.y = x * 150;\n    enemyCar.style.top = enemyCar.y + \"px\";\n    enemyCar.style.background = 'black';\n    enemyCar.style.left = Math.floor(Math.random() * 350) + \"px\";\n    gameArea.appendChild(enemyCar);\n  }\n}\n\n//# sourceURL=webpack://webpack-start/./src/js/main.js?");

/***/ }),

/***/ "./src/scss/styles.css":
/*!*****************************!*\
  !*** ./src/scss/styles.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-start/./src/scss/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;