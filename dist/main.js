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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/puzzle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/puzzle.js":
/*!***********************!*\
  !*** ./lib/puzzle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// todo

// ///////
// Rehearsal
// ///////

// 1. Select elements (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");
// 2. Listen to a click on the button
button.addEventListener("click", (event) => {
  console.log(event);
  // 3. Change the DOM, display the hint, add class active
  hint.classList.add("active");
});

// ///////
// Livecode
// ///////

const canItMove = (tile) => {
  // pseudo code
  // 1. select the empty space (with class empty), get its x and y positions
  const emptyTile = document.querySelector(".empty");
  const emptyTileCell = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;
  
  // 2. get the clicked tile from params, get its x and y positions
  const tileCell = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  
  // 3. compare the location of clicked tile and empty space
  // 4. return true if "nearby", flase else
  const cellNearby = Math.abs(emptyTileCell - tileCell);
  const rowNearby = Math.abs(emptyTileRow - tileRow);
  return (cellNearby + rowNearby) === 1;
}

const swipeTile = (tile) => {
  const emptyTile = document.querySelector(".empty");
  tile.classList.add("empty");
  emptyTile.innerText = tile.innerText;
  emptyTile.classList.remove("empty");
  tile.innerText = "";
};

const didWeWin = (tiles) => {
  const result = [];
  tiles.forEach((tile) => {
    result.push(tile.innerText);
  });
  return result.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
}

// 1. Select every td element
const tiles = document.querySelectorAll("td");

// 2. Listen to a click on each td
tiles.forEach((tile) => {
  tile.addEventListener("click", (event) => {
    // console.log(event);
    const clickedTile = event.currentTarget;
    // 3. if tile can be moved
    if (canItMove(clickedTile)) {
      // 4. swipe tile and empty space (class and content)
      swipeTile(clickedTile);
      // 5. check if won! :D
      if(didWeWin(tiles)) {
        setTimeout(() => {
          alert("We won 🤟, I love you!");
        }, 500);
      }
    }
  });
});

// 6. Go home and digest the indian curry (for onsite students)

/***/ })

/******/ });
//# sourceMappingURL=main.js.map