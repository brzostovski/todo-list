/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  /* COLORS */
  --main-font-color: white;
  --main-bg-color: rgb(69, 69, 69);
  --main-shadow-color: rgba(0, 0, 0, 0.5);
  --banner-bg-color: rgb(26, 26, 26);
  --note-bg-color: rgba(30, 144, 255, 0.2);
  --accent-color: dodgerblue;
  --bg-click-color: brightness(0.7);
  --pop-up-color: rgba(255, 255, 255, 0.2);
  --background-blur: blur(7px);

  /* DIMENSIONS */
  --main-margin: 20px;
  --note-margin: 10px;
  --main-padding: 10px;
  --main-border-radius: 10px;
  --input-border-radius: 4px;
  --btn-padding: 0 10px;
  --form-container-width: 400px;
  --form-container-height: 300px;
  --form-btn-height: 24px;
  --form-btn-width: 70px;

  /* PROPERTIES */
  --main-shadow: 0 0 16px var(--main-shadow-color);

  /* DURATIONS */
  --main-transition-duration: 0.2s;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  color: var(--main-font-color);
  background-color: var(--main-bg-color);
}

#page-container > * {
  max-width: 100dvw;
}

#page-container {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif
  ;

  height: 100dvh;

  display: grid;
  grid-template: 1fr 10fr 1fr / 200px 1fr;
  grid-template-areas:
    'header header'
    'aside main'
    'footer footer';
}

header,
footer {
  padding: var(--main-padding);

  background-color: var(--banner-bg-color);
}

header *,
footer * {
  background-color: var(--banner-bg-color);
}

header {
  grid-area: header;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: xx-large;
  font-weight: bolder;
}

header > form {
  font-size: small;

  padding: var(--main-padding);

  height: var(--form-container-height);
  width: var(--form-container-width);

  position: absolute;
  top: calc((100dvh / 2) - (var(--form-container-height) / 2));
  left: calc((100dvw / 2) - (var(--form-container-width) / 2));

  border-radius: var(--main-border-radius);
  box-shadow: var(--main-shadow);

  background-color: var(--pop-up-color);
  backdrop-filter: var(--background-blur);
  -webkit-backdrop-filter: var(--background-blur);

  display: flex;
  flex-direction: column;
}

label {
  background-color: transparent;
}

input,
textarea {
  color: var(--main-bg-color);
  background-color: var(--main-font-color);

  border-radius: var(--input-border-radius);

  resize: none;
  overflow: auto;
}

#desc {
  height: 10rem;
}

button {
  all: unset;

  cursor: pointer;
  color: var(--banner-bg-color);
  font-size: normal;

  background-color: var(--accent-color);

  padding: var(--btn-padding);
  border: outset var(--accent-color);
  border-radius: var(--main-border-radius);

  transition-duration: var(--main-transition-duration);
}

button:hover {
  scale: 1.05;
}

button:active {
  scale: 1;
  filter: var(--bg-click-color);
}

#add-note-btn {
  color: var(--main-font-color);

  display: flex;
  justify-content: center;
  align-items: center;

  height: var(--form-btn-height);
  width: var(--form-btn-width);
}

aside {
  grid-area: aside;

  background-color: var(--accent-color);
}

aside * {
  background-color: var(--accent-color);
}

main {
  grid-area: main;

  max-width: 800px;

  flex: 1;

  padding: var(--main-padding);

  overflow: auto;

  display: flex;
  flex-direction: column;
  
  gap: 10px;
}

.note > * {
  margin: var(--note-margin);
  background-color: transparent;
}

.note {
  min-width: 200px;
  max-width: 800px;

  background-color: var(--note-bg-color);

  box-shadow: var(--main-shadow);

  border-radius: var(--main-border-radius);
}

.note > .title {
  font-weight: bold;
}

.note > .description {
  font-style: italic;
}

footer {
  grid-area: footer;

  display: flex;
  justify-content: center;
  align-items: center;
}

.hidden {
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,wBAAwB;EACxB,gCAAgC;EAChC,uCAAuC;EACvC,kCAAkC;EAClC,wCAAwC;EACxC,0BAA0B;EAC1B,iCAAiC;EACjC,wCAAwC;EACxC,4BAA4B;;EAE5B,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,0BAA0B;EAC1B,0BAA0B;EAC1B,qBAAqB;EACrB,6BAA6B;EAC7B,8BAA8B;EAC9B,uBAAuB;EACvB,sBAAsB;;EAEtB,eAAe;EACf,gDAAgD;;EAEhD,cAAc;EACd,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;;EAET,6BAA6B;EAC7B,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE;;EAEA;;EAEA,cAAc;;EAEd,aAAa;EACb,uCAAuC;EACvC;;;mBAGiB;AACnB;;AAEA;;EAEE,4BAA4B;;EAE5B,wCAAwC;AAC1C;;AAEA;;EAEE,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;;EAEnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;;EAEhB,4BAA4B;;EAE5B,oCAAoC;EACpC,kCAAkC;;EAElC,kBAAkB;EAClB,4DAA4D;EAC5D,4DAA4D;;EAE5D,wCAAwC;EACxC,8BAA8B;;EAE9B,qCAAqC;EACrC,uCAAuC;EACvC,+CAA+C;;EAE/C,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;EAEE,2BAA2B;EAC3B,wCAAwC;;EAExC,yCAAyC;;EAEzC,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;;EAEV,eAAe;EACf,6BAA6B;EAC7B,iBAAiB;;EAEjB,qCAAqC;;EAErC,2BAA2B;EAC3B,kCAAkC;EAClC,wCAAwC;;EAExC,oDAAoD;AACtD;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,QAAQ;EACR,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;;EAE7B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,gBAAgB;;EAEhB,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,eAAe;;EAEf,gBAAgB;;EAEhB,OAAO;;EAEP,4BAA4B;;EAE5B,cAAc;;EAEd,aAAa;EACb,sBAAsB;;EAEtB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;;EAEhB,sCAAsC;;EAEtC,8BAA8B;;EAE9B,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  /* COLORS */\n  --main-font-color: white;\n  --main-bg-color: rgb(69, 69, 69);\n  --main-shadow-color: rgba(0, 0, 0, 0.5);\n  --banner-bg-color: rgb(26, 26, 26);\n  --note-bg-color: rgba(30, 144, 255, 0.2);\n  --accent-color: dodgerblue;\n  --bg-click-color: brightness(0.7);\n  --pop-up-color: rgba(255, 255, 255, 0.2);\n  --background-blur: blur(7px);\n\n  /* DIMENSIONS */\n  --main-margin: 20px;\n  --note-margin: 10px;\n  --main-padding: 10px;\n  --main-border-radius: 10px;\n  --input-border-radius: 4px;\n  --btn-padding: 0 10px;\n  --form-container-width: 400px;\n  --form-container-height: 300px;\n  --form-btn-height: 24px;\n  --form-btn-width: 70px;\n\n  /* PROPERTIES */\n  --main-shadow: 0 0 16px var(--main-shadow-color);\n\n  /* DURATIONS */\n  --main-transition-duration: 0.2s;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  color: var(--main-font-color);\n  background-color: var(--main-bg-color);\n}\n\n#page-container > * {\n  max-width: 100dvw;\n}\n\n#page-container {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif\n  ;\n\n  height: 100dvh;\n\n  display: grid;\n  grid-template: 1fr 10fr 1fr / 200px 1fr;\n  grid-template-areas:\n    'header header'\n    'aside main'\n    'footer footer';\n}\n\nheader,\nfooter {\n  padding: var(--main-padding);\n\n  background-color: var(--banner-bg-color);\n}\n\nheader *,\nfooter * {\n  background-color: var(--banner-bg-color);\n}\n\nheader {\n  grid-area: header;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\nheader > form {\n  font-size: small;\n\n  padding: var(--main-padding);\n\n  height: var(--form-container-height);\n  width: var(--form-container-width);\n\n  position: absolute;\n  top: calc((100dvh / 2) - (var(--form-container-height) / 2));\n  left: calc((100dvw / 2) - (var(--form-container-width) / 2));\n\n  border-radius: var(--main-border-radius);\n  box-shadow: var(--main-shadow);\n\n  background-color: var(--pop-up-color);\n  backdrop-filter: var(--background-blur);\n  -webkit-backdrop-filter: var(--background-blur);\n\n  display: flex;\n  flex-direction: column;\n}\n\nlabel {\n  background-color: transparent;\n}\n\ninput,\ntextarea {\n  color: var(--main-bg-color);\n  background-color: var(--main-font-color);\n\n  border-radius: var(--input-border-radius);\n\n  resize: none;\n  overflow: auto;\n}\n\n#desc {\n  height: 10rem;\n}\n\nbutton {\n  all: unset;\n\n  cursor: pointer;\n  color: var(--banner-bg-color);\n  font-size: normal;\n\n  background-color: var(--accent-color);\n\n  padding: var(--btn-padding);\n  border: outset var(--accent-color);\n  border-radius: var(--main-border-radius);\n\n  transition-duration: var(--main-transition-duration);\n}\n\nbutton:hover {\n  scale: 1.05;\n}\n\nbutton:active {\n  scale: 1;\n  filter: var(--bg-click-color);\n}\n\n#add-note-btn {\n  color: var(--main-font-color);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: var(--form-btn-height);\n  width: var(--form-btn-width);\n}\n\naside {\n  grid-area: aside;\n\n  background-color: var(--accent-color);\n}\n\naside * {\n  background-color: var(--accent-color);\n}\n\nmain {\n  grid-area: main;\n\n  max-width: 800px;\n\n  flex: 1;\n\n  padding: var(--main-padding);\n\n  overflow: auto;\n\n  display: flex;\n  flex-direction: column;\n  \n  gap: 10px;\n}\n\n.note > * {\n  margin: var(--note-margin);\n  background-color: transparent;\n}\n\n.note {\n  min-width: 200px;\n  max-width: 800px;\n\n  background-color: var(--note-bg-color);\n\n  box-shadow: var(--main-shadow);\n\n  border-radius: var(--main-border-radius);\n}\n\n.note > .title {\n  font-weight: bold;\n}\n\n.note > .description {\n  font-style: italic;\n}\n\nfooter {\n  grid-area: footer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function notes() {
  return {
    projectsArr,
    Project,
    addNote,
  };
});

let Project = (function (name, ...notes) {
  this.name = name;
  this.notes = notes;

  return {
    name,
    notes,
  }
});

let projectsArr = [];
let inbox = new Project('Inbox'); // this creates default project called "Inbox"
projectsArr[0] = inbox;

let Note = (function (title, description, dueDate, flag) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.flag = flag;

  return {
    title,
    description,
    dueDate,
    flag,
  }
});

function _createNote() {
  let _title = document.getElementById('title').value;
  let _desc = document.getElementById('desc').value;
  let _date = document.getElementById('date').value;
  let _flag = document.getElementById('flag-button').checked;

  return (new Note(_title, _desc, _date, _flag));
};

function addNote() {
  let _note = _createNote();
  projectsArr[0].notes.push(_note);
};

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function page() {
  return {
    init,
    checkFormValidity,
  };
});

const init = (() => {
  let _pageContainer = document.createElement('div');
  _pageContainer.id = 'page-container';

  let _pageHeader = _initHeader();
  let _pageAside = _initAside();
  let _pageMain = _initMain(); // form will live on top of main
  let _pageFooter = _initFooter();

  let pageContents = {
    header: _pageHeader,
    aside: _pageAside,
    main: _pageMain,
    footer: _pageFooter,
  };

  Object.keys(pageContents).forEach(key => {
    _pageContainer.appendChild(pageContents[key]);
  });

  document.body.appendChild(_pageContainer);

  return {
    pageContents,
  };
});

const _initHeader = (() => {
  let headerWrapper = document.createElement('header');

  let _headerContent = {
    title: document.createElement('span'),
    form: document.createElement('form'),
    toggleForm: document.createElement('button'),
  }

  _headerContent.title.textContent = 'Project: Todo List';
  _headerContent.form.classList.add('hidden');
  _headerContent.toggleForm.textContent = '﹢';
  _headerContent.toggleForm.id = 'toggle-form-btn';

  let _formContent = {
    title: {
      label: `<label for="title">Title:</label>`,
      input: `
        <input
        type="text"
        name="note-title"
        id="title"
        placeholder="Note title"
        required>`,
    },
    description: {
      label: `<label for="desc">Description:</label>`,
      input: `
      <textarea
      name="note-description"
      id="desc"
      wrap="soft"
      placeholder="Note description"
      required></textarea>`,
    },
    date: {
      label: `<label for="date">Due date:</label>`,
      input: `<input type="text" name="due-date" id="date">`, // input will be date picker
    },
    flag: {
      button: `<label for="flag-button">Flagged</label>
        <input type="checkbox" id="flag-button">`, // should be stylized button that acts as toggle
    },
    submit: {
      button: `<button type="button" id="add-note-btn">Add note!</button>`,
    },
  }

  Object.keys(_formContent).forEach(key => {
    if ((key === 'flag') || (key === 'submit')) {
      _headerContent.form.innerHTML += _formContent[key].button;
    } else {
      _headerContent.form.innerHTML += _formContent[key].label;
      _headerContent.form.innerHTML += _formContent[key].input;
    };
  });

  Object.keys(_headerContent).forEach(key => {
    headerWrapper.appendChild(_headerContent[key]);
  });

  return headerWrapper;
});

const _initAside = (() => {
  let asideWrapper = document.createElement('aside');

  let _asideContent = {
    home: document.createElement('div'), // this will contain link to 'homepage' showing all notes
    flagged: document.createElement('div'), // this will display notes with flag:true
    projects: document.createElement('div'), // this will show subfolders ('projects') and allow to create new one
  }

  Object.keys(_asideContent).forEach(key => {
    _asideContent[key].id = key;
    _asideContent[key].textContent = key; // this will change to display section title
    asideWrapper.appendChild(_asideContent[key]);
  });

  return asideWrapper;
});

const _initMain = (() => {
  let mainWrapper = document.createElement('main');

  return mainWrapper;
});

const _initFooter = (() => {
  let footerWrapper = document.createElement('footer');

  let _footerContent = {
    link: document.createElement('span'),
  }

  _footerContent.link.innerHTML =
  `© <a href="https://github.com/brzostovski" target="_blank">brzostovski</a> 2023`;

  Object.keys(_footerContent).forEach(key => {
    footerWrapper.appendChild(_footerContent[key]);
  });

  return footerWrapper;
});

function checkFormValidity(form) {
  let isFormValid = form.checkValidity();
  if (!isFormValid) {
    form.reportValidity();
    return false;
  } else {
    return true;
  }
};

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function render(project, domElement) {
  project.notes.forEach(note => {
    domElement.appendChild(createNoteCard(note).card);
  });
});

let createNoteCard = (function(note) {
  let card = document.createElement('div');
  card.classList.add('note');

  Object.keys(note).forEach(key => {
    let _section = document.createElement('div');
    _section.classList.add(key);
    _section.textContent = note[key];
    card.appendChild(_section);
  });

  return {card};
});

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes */ "./src/notes.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");





(() => {
  const pageContents = (0,_page__WEBPACK_IMPORTED_MODULE_1__["default"])().init().pageContents;
  (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_notes__WEBPACK_IMPORTED_MODULE_2__["default"])().projectsArr[0], pageContents.main);

  const form = document.querySelector('form');
  const addNoteBtn = document.getElementById('add-note-btn');
  const toggleFormBtn = document.getElementById('toggle-form-btn');

  const bindEvents = (function() {
    addNoteBtn.onclick = addNoteBtnAction;
    toggleFormBtn.onclick = toggleFormBtnAction;
  })();

  function toggleFormBtnAction() {
    if (form.classList.contains('hidden')) {
      form.classList.remove('hidden');
      toggleFormBtn.textContent = '-';
    } else {
      form.classList.add('hidden');
      toggleFormBtn.textContent = '+';
    }; // above is more reliable than 'classList.toggle' for some reason
  };

  function addNoteBtnAction() {
    if (!(0,_page__WEBPACK_IMPORTED_MODULE_1__["default"])().checkFormValidity(form)) {
      return;
    } else {
      pageContents.main.innerHTML = '';
      (0,_notes__WEBPACK_IMPORTED_MODULE_2__["default"])().addNote();
      (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_notes__WEBPACK_IMPORTED_MODULE_2__["default"])().projectsArr[0], pageContents.main);
    }
  }

  return {};
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFlBQVksUUFBUSxPQUFPLE9BQU8sTUFBTSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksY0FBYyxjQUFjLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFlBQVksY0FBYyxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxhQUFhLFlBQVksYUFBYSxZQUFZLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxjQUFjLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFP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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNLO0FBQ0U7QUFDRTs7QUFFOUI7QUFDQSx1QkFBdUIsaURBQUk7QUFDM0IsRUFBRSxtREFBTSxDQUFDLGtEQUFLOztBQUVkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxTQUFTLGlEQUFJO0FBQ2I7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLGtEQUFLO0FBQ1gsTUFBTSxtREFBTSxDQUFDLGtEQUFLO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25vdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC8qIENPTE9SUyAqL1xuICAtLW1haW4tZm9udC1jb2xvcjogd2hpdGU7XG4gIC0tbWFpbi1iZy1jb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xuICAtLW1haW4tc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC0tYmFubmVyLWJnLWNvbG9yOiByZ2IoMjYsIDI2LCAyNik7XG4gIC0tbm90ZS1iZy1jb2xvcjogcmdiYSgzMCwgMTQ0LCAyNTUsIDAuMik7XG4gIC0tYWNjZW50LWNvbG9yOiBkb2RnZXJibHVlO1xuICAtLWJnLWNsaWNrLWNvbG9yOiBicmlnaHRuZXNzKDAuNyk7XG4gIC0tcG9wLXVwLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIC0tYmFja2dyb3VuZC1ibHVyOiBibHVyKDdweCk7XG5cbiAgLyogRElNRU5TSU9OUyAqL1xuICAtLW1haW4tbWFyZ2luOiAyMHB4O1xuICAtLW5vdGUtbWFyZ2luOiAxMHB4O1xuICAtLW1haW4tcGFkZGluZzogMTBweDtcbiAgLS1tYWluLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0taW5wdXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLWJ0bi1wYWRkaW5nOiAwIDEwcHg7XG4gIC0tZm9ybS1jb250YWluZXItd2lkdGg6IDQwMHB4O1xuICAtLWZvcm0tY29udGFpbmVyLWhlaWdodDogMzAwcHg7XG4gIC0tZm9ybS1idG4taGVpZ2h0OiAyNHB4O1xuICAtLWZvcm0tYnRuLXdpZHRoOiA3MHB4O1xuXG4gIC8qIFBST1BFUlRJRVMgKi9cbiAgLS1tYWluLXNoYWRvdzogMCAwIDE2cHggdmFyKC0tbWFpbi1zaGFkb3ctY29sb3IpO1xuXG4gIC8qIERVUkFUSU9OUyAqL1xuICAtLW1haW4tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcblxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XG59XG5cbiNwYWdlLWNvbnRhaW5lciA+ICoge1xuICBtYXgtd2lkdGg6IDEwMGR2dztcbn1cblxuI3BhZ2UtY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZcbiAgO1xuXG4gIGhlaWdodDogMTAwZHZoO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxMGZyIDFmciAvIDIwMHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnaGVhZGVyIGhlYWRlcidcbiAgICAnYXNpZGUgbWFpbidcbiAgICAnZm9vdGVyIGZvb3Rlcic7XG59XG5cbmhlYWRlcixcbmZvb3RlciB7XG4gIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFubmVyLWJnLWNvbG9yKTtcbn1cblxuaGVhZGVyICosXG5mb290ZXIgKiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhbm5lci1iZy1jb2xvcik7XG59XG5cbmhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5oZWFkZXIgPiBmb3JtIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcblxuICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xuXG4gIGhlaWdodDogdmFyKC0tZm9ybS1jb250YWluZXItaGVpZ2h0KTtcbiAgd2lkdGg6IHZhcigtLWZvcm0tY29udGFpbmVyLXdpZHRoKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygoMTAwZHZoIC8gMikgLSAodmFyKC0tZm9ybS1jb250YWluZXItaGVpZ2h0KSAvIDIpKTtcbiAgbGVmdDogY2FsYygoMTAwZHZ3IC8gMikgLSAodmFyKC0tZm9ybS1jb250YWluZXItd2lkdGgpIC8gMikpO1xuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tc2hhZG93KTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtdXAtY29sb3IpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJhY2tncm91bmQtYmx1cik7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1iYWNrZ3JvdW5kLWJsdXIpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG5cbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taW5wdXQtYm9yZGVyLXJhZGl1cyk7XG5cbiAgcmVzaXplOiBub25lO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuI2Rlc2Mge1xuICBoZWlnaHQ6IDEwcmVtO1xufVxuXG5idXR0b24ge1xuICBhbGw6IHVuc2V0O1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWJhbm5lci1iZy1jb2xvcik7XG4gIGZvbnQtc2l6ZTogbm9ybWFsO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG5cbiAgcGFkZGluZzogdmFyKC0tYnRuLXBhZGRpbmcpO1xuICBib3JkZXI6IG91dHNldCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xuXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLW1haW4tdHJhbnNpdGlvbi1kdXJhdGlvbik7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIHNjYWxlOiAxLjA1O1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgc2NhbGU6IDE7XG4gIGZpbHRlcjogdmFyKC0tYmctY2xpY2stY29sb3IpO1xufVxuXG4jYWRkLW5vdGUtYnRuIHtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaGVpZ2h0OiB2YXIoLS1mb3JtLWJ0bi1oZWlnaHQpO1xuICB3aWR0aDogdmFyKC0tZm9ybS1idG4td2lkdGgpO1xufVxuXG5hc2lkZSB7XG4gIGdyaWQtYXJlYTogYXNpZGU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuYXNpZGUgKiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG5cbiAgbWF4LXdpZHRoOiA4MDBweDtcblxuICBmbGV4OiAxO1xuXG4gIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XG5cbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gIGdhcDogMTBweDtcbn1cblxuLm5vdGUgPiAqIHtcbiAgbWFyZ2luOiB2YXIoLS1ub3RlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubm90ZSB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90ZS1iZy1jb2xvcik7XG5cbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1zaGFkb3cpO1xuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5ub3RlID4gLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ub3RlID4gLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5mb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsdUNBQXVDO0VBQ3ZDLGtDQUFrQztFQUNsQyx3Q0FBd0M7RUFDeEMsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyx3Q0FBd0M7RUFDeEMsNEJBQTRCOztFQUU1QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsc0JBQXNCOztFQUV0QixlQUFlO0VBQ2YsZ0RBQWdEOztFQUVoRCxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTOztFQUVULDZCQUE2QjtFQUM3QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTs7RUFFQTs7RUFFQSxjQUFjOztFQUVkLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkM7OzttQkFHaUI7QUFDbkI7O0FBRUE7O0VBRUUsNEJBQTRCOztFQUU1Qix3Q0FBd0M7QUFDMUM7O0FBRUE7O0VBRUUsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjs7RUFFaEIsNEJBQTRCOztFQUU1QixvQ0FBb0M7RUFDcEMsa0NBQWtDOztFQUVsQyxrQkFBa0I7RUFDbEIsNERBQTREO0VBQzVELDREQUE0RDs7RUFFNUQsd0NBQXdDO0VBQ3hDLDhCQUE4Qjs7RUFFOUIscUNBQXFDO0VBQ3JDLHVDQUF1QztFQUN2QywrQ0FBK0M7O0VBRS9DLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLHdDQUF3Qzs7RUFFeEMseUNBQXlDOztFQUV6QyxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7O0VBRVYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixpQkFBaUI7O0VBRWpCLHFDQUFxQzs7RUFFckMsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyx3Q0FBd0M7O0VBRXhDLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFFBQVE7RUFDUiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7O0VBRTdCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxlQUFlOztFQUVmLGdCQUFnQjs7RUFFaEIsT0FBTzs7RUFFUCw0QkFBNEI7O0VBRTVCLGNBQWM7O0VBRWQsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0VBRWhCLHNDQUFzQzs7RUFFdEMsOEJBQThCOztFQUU5Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qIENPTE9SUyAqL1xcbiAgLS1tYWluLWZvbnQtY29sb3I6IHdoaXRlO1xcbiAgLS1tYWluLWJnLWNvbG9yOiByZ2IoNjksIDY5LCA2OSk7XFxuICAtLW1haW4tc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAtLWJhbm5lci1iZy1jb2xvcjogcmdiKDI2LCAyNiwgMjYpO1xcbiAgLS1ub3RlLWJnLWNvbG9yOiByZ2JhKDMwLCAxNDQsIDI1NSwgMC4yKTtcXG4gIC0tYWNjZW50LWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgLS1iZy1jbGljay1jb2xvcjogYnJpZ2h0bmVzcygwLjcpO1xcbiAgLS1wb3AtdXAtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIC0tYmFja2dyb3VuZC1ibHVyOiBibHVyKDdweCk7XFxuXFxuICAvKiBESU1FTlNJT05TICovXFxuICAtLW1haW4tbWFyZ2luOiAyMHB4O1xcbiAgLS1ub3RlLW1hcmdpbjogMTBweDtcXG4gIC0tbWFpbi1wYWRkaW5nOiAxMHB4O1xcbiAgLS1tYWluLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtLWlucHV0LWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC0tYnRuLXBhZGRpbmc6IDAgMTBweDtcXG4gIC0tZm9ybS1jb250YWluZXItd2lkdGg6IDQwMHB4O1xcbiAgLS1mb3JtLWNvbnRhaW5lci1oZWlnaHQ6IDMwMHB4O1xcbiAgLS1mb3JtLWJ0bi1oZWlnaHQ6IDI0cHg7XFxuICAtLWZvcm0tYnRuLXdpZHRoOiA3MHB4O1xcblxcbiAgLyogUFJPUEVSVElFUyAqL1xcbiAgLS1tYWluLXNoYWRvdzogMCAwIDE2cHggdmFyKC0tbWFpbi1zaGFkb3ctY29sb3IpO1xcblxcbiAgLyogRFVSQVRJT05TICovXFxuICAtLW1haW4tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbiNwYWdlLWNvbnRhaW5lciA+ICoge1xcbiAgbWF4LXdpZHRoOiAxMDBkdnc7XFxufVxcblxcbiNwYWdlLWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWZcXG4gIDtcXG5cXG4gIGhlaWdodDogMTAwZHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxMGZyIDFmciAvIDIwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyJ1xcbiAgICAnYXNpZGUgbWFpbidcXG4gICAgJ2Zvb3RlciBmb290ZXInO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgKixcXG5mb290ZXIgKiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5oZWFkZXIgPiBmb3JtIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuXFxuICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xcblxcbiAgaGVpZ2h0OiB2YXIoLS1mb3JtLWNvbnRhaW5lci1oZWlnaHQpO1xcbiAgd2lkdGg6IHZhcigtLWZvcm0tY29udGFpbmVyLXdpZHRoKTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYygoMTAwZHZoIC8gMikgLSAodmFyKC0tZm9ybS1jb250YWluZXItaGVpZ2h0KSAvIDIpKTtcXG4gIGxlZnQ6IGNhbGMoKDEwMGR2dyAvIDIpIC0gKHZhcigtLWZvcm0tY29udGFpbmVyLXdpZHRoKSAvIDIpKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1tYWluLXNoYWRvdyk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtdXAtY29sb3IpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1iYWNrZ3JvdW5kLWJsdXIpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJhY2tncm91bmQtYmx1cik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbnB1dC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jZGVzYyB7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xcbiAgZm9udC1zaXplOiBub3JtYWw7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcblxcbiAgcGFkZGluZzogdmFyKC0tYnRuLXBhZGRpbmcpO1xcbiAgYm9yZGVyOiBvdXRzZXQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1tYWluLXRyYW5zaXRpb24tZHVyYXRpb24pO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgc2NhbGU6IDEuMDU7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxuICBmaWx0ZXI6IHZhcigtLWJnLWNsaWNrLWNvbG9yKTtcXG59XFxuXFxuI2FkZC1ub3RlLWJ0biB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoZWlnaHQ6IHZhcigtLWZvcm0tYnRuLWhlaWdodCk7XFxuICB3aWR0aDogdmFyKC0tZm9ybS1idG4td2lkdGgpO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBncmlkLWFyZWE6IGFzaWRlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuYXNpZGUgKiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG5cXG4gIG1heC13aWR0aDogODAwcHg7XFxuXFxuICBmbGV4OiAxO1xcblxcbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG5cXG4gIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm5vdGUgPiAqIHtcXG4gIG1hcmdpbjogdmFyKC0tbm90ZS1tYXJnaW4pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5ub3RlIHtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90ZS1iZy1jb2xvcik7XFxuXFxuICBib3gtc2hhZG93OiB2YXIoLS1tYWluLXNoYWRvdyk7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubm90ZSA+IC50aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5vdGUgPiAuZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gbm90ZXMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdHNBcnIsXG4gICAgUHJvamVjdCxcbiAgICBhZGROb3RlLFxuICB9O1xufSk7XG5cbmxldCBQcm9qZWN0ID0gKGZ1bmN0aW9uIChuYW1lLCAuLi5ub3Rlcykge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIG5vdGVzLFxuICB9XG59KTtcblxubGV0IHByb2plY3RzQXJyID0gW107XG5sZXQgaW5ib3ggPSBuZXcgUHJvamVjdCgnSW5ib3gnKTsgLy8gdGhpcyBjcmVhdGVzIGRlZmF1bHQgcHJvamVjdCBjYWxsZWQgXCJJbmJveFwiXG5wcm9qZWN0c0FyclswXSA9IGluYm94O1xuXG5sZXQgTm90ZSA9IChmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBmbGFnKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLmZsYWcgPSBmbGFnO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBmbGFnLFxuICB9XG59KTtcblxuZnVuY3Rpb24gX2NyZWF0ZU5vdGUoKSB7XG4gIGxldCBfdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgbGV0IF9kZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MnKS52YWx1ZTtcbiAgbGV0IF9kYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgbGV0IF9mbGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWctYnV0dG9uJykuY2hlY2tlZDtcblxuICByZXR1cm4gKG5ldyBOb3RlKF90aXRsZSwgX2Rlc2MsIF9kYXRlLCBfZmxhZykpO1xufTtcblxuZnVuY3Rpb24gYWRkTm90ZSgpIHtcbiAgbGV0IF9ub3RlID0gX2NyZWF0ZU5vdGUoKTtcbiAgcHJvamVjdHNBcnJbMF0ubm90ZXMucHVzaChfbm90ZSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBwYWdlKCkge1xuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgY2hlY2tGb3JtVmFsaWRpdHksXG4gIH07XG59KTtcblxuY29uc3QgaW5pdCA9ICgoKSA9PiB7XG4gIGxldCBfcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfcGFnZUNvbnRhaW5lci5pZCA9ICdwYWdlLWNvbnRhaW5lcic7XG5cbiAgbGV0IF9wYWdlSGVhZGVyID0gX2luaXRIZWFkZXIoKTtcbiAgbGV0IF9wYWdlQXNpZGUgPSBfaW5pdEFzaWRlKCk7XG4gIGxldCBfcGFnZU1haW4gPSBfaW5pdE1haW4oKTsgLy8gZm9ybSB3aWxsIGxpdmUgb24gdG9wIG9mIG1haW5cbiAgbGV0IF9wYWdlRm9vdGVyID0gX2luaXRGb290ZXIoKTtcblxuICBsZXQgcGFnZUNvbnRlbnRzID0ge1xuICAgIGhlYWRlcjogX3BhZ2VIZWFkZXIsXG4gICAgYXNpZGU6IF9wYWdlQXNpZGUsXG4gICAgbWFpbjogX3BhZ2VNYWluLFxuICAgIGZvb3RlcjogX3BhZ2VGb290ZXIsXG4gIH07XG5cbiAgT2JqZWN0LmtleXMocGFnZUNvbnRlbnRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgX3BhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnRzW2tleV0pO1xuICB9KTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF9wYWdlQ29udGFpbmVyKTtcblxuICByZXR1cm4ge1xuICAgIHBhZ2VDb250ZW50cyxcbiAgfTtcbn0pO1xuXG5jb25zdCBfaW5pdEhlYWRlciA9ICgoKSA9PiB7XG4gIGxldCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgbGV0IF9oZWFkZXJDb250ZW50ID0ge1xuICAgIHRpdGxlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgZm9ybTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpLFxuICAgIHRvZ2dsZUZvcm06IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxuICB9XG5cbiAgX2hlYWRlckNvbnRlbnQudGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdDogVG9kbyBMaXN0JztcbiAgX2hlYWRlckNvbnRlbnQuZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgX2hlYWRlckNvbnRlbnQudG9nZ2xlRm9ybS50ZXh0Q29udGVudCA9ICfvuaInO1xuICBfaGVhZGVyQ29udGVudC50b2dnbGVGb3JtLmlkID0gJ3RvZ2dsZS1mb3JtLWJ0bic7XG5cbiAgbGV0IF9mb3JtQ29udGVudCA9IHtcbiAgICB0aXRsZToge1xuICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPmAsXG4gICAgICBpbnB1dDogYFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwibm90ZS10aXRsZVwiXG4gICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdGUgdGl0bGVcIlxuICAgICAgICByZXF1aXJlZD5gLFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cImRlc2NcIj5EZXNjcmlwdGlvbjo8L2xhYmVsPmAsXG4gICAgICBpbnB1dDogYFxuICAgICAgPHRleHRhcmVhXG4gICAgICBuYW1lPVwibm90ZS1kZXNjcmlwdGlvblwiXG4gICAgICBpZD1cImRlc2NcIlxuICAgICAgd3JhcD1cInNvZnRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlIGRlc2NyaXB0aW9uXCJcbiAgICAgIHJlcXVpcmVkPjwvdGV4dGFyZWE+YCxcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgZGF0ZTo8L2xhYmVsPmAsXG4gICAgICBpbnB1dDogYDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkdWUtZGF0ZVwiIGlkPVwiZGF0ZVwiPmAsIC8vIGlucHV0IHdpbGwgYmUgZGF0ZSBwaWNrZXJcbiAgICB9LFxuICAgIGZsYWc6IHtcbiAgICAgIGJ1dHRvbjogYDxsYWJlbCBmb3I9XCJmbGFnLWJ1dHRvblwiPkZsYWdnZWQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJmbGFnLWJ1dHRvblwiPmAsIC8vIHNob3VsZCBiZSBzdHlsaXplZCBidXR0b24gdGhhdCBhY3RzIGFzIHRvZ2dsZVxuICAgIH0sXG4gICAgc3VibWl0OiB7XG4gICAgICBidXR0b246IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImFkZC1ub3RlLWJ0blwiPkFkZCBub3RlITwvYnV0dG9uPmAsXG4gICAgfSxcbiAgfVxuXG4gIE9iamVjdC5rZXlzKF9mb3JtQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICgoa2V5ID09PSAnZmxhZycpIHx8IChrZXkgPT09ICdzdWJtaXQnKSkge1xuICAgICAgX2hlYWRlckNvbnRlbnQuZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0uYnV0dG9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmlubmVySFRNTCArPSBfZm9ybUNvbnRlbnRba2V5XS5sYWJlbDtcbiAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uaW5uZXJIVE1MICs9IF9mb3JtQ29udGVudFtrZXldLmlucHV0O1xuICAgIH07XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKF9oZWFkZXJDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaGVhZGVyV3JhcHBlci5hcHBlbmRDaGlsZChfaGVhZGVyQ29udGVudFtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRlcldyYXBwZXI7XG59KTtcblxuY29uc3QgX2luaXRBc2lkZSA9ICgoKSA9PiB7XG4gIGxldCBhc2lkZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuXG4gIGxldCBfYXNpZGVDb250ZW50ID0ge1xuICAgIGhvbWU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAvLyB0aGlzIHdpbGwgY29udGFpbiBsaW5rIHRvICdob21lcGFnZScgc2hvd2luZyBhbGwgbm90ZXNcbiAgICBmbGFnZ2VkOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgLy8gdGhpcyB3aWxsIGRpc3BsYXkgbm90ZXMgd2l0aCBmbGFnOnRydWVcbiAgICBwcm9qZWN0czogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIC8vIHRoaXMgd2lsbCBzaG93IHN1YmZvbGRlcnMgKCdwcm9qZWN0cycpIGFuZCBhbGxvdyB0byBjcmVhdGUgbmV3IG9uZVxuICB9XG5cbiAgT2JqZWN0LmtleXMoX2FzaWRlQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIF9hc2lkZUNvbnRlbnRba2V5XS5pZCA9IGtleTtcbiAgICBfYXNpZGVDb250ZW50W2tleV0udGV4dENvbnRlbnQgPSBrZXk7IC8vIHRoaXMgd2lsbCBjaGFuZ2UgdG8gZGlzcGxheSBzZWN0aW9uIHRpdGxlXG4gICAgYXNpZGVXcmFwcGVyLmFwcGVuZENoaWxkKF9hc2lkZUNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBhc2lkZVdyYXBwZXI7XG59KTtcblxuY29uc3QgX2luaXRNYWluID0gKCgpID0+IHtcbiAgbGV0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gIHJldHVybiBtYWluV3JhcHBlcjtcbn0pO1xuXG5jb25zdCBfaW5pdEZvb3RlciA9ICgoKSA9PiB7XG4gIGxldCBmb290ZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgbGV0IF9mb290ZXJDb250ZW50ID0ge1xuICAgIGxpbms6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgfVxuXG4gIF9mb290ZXJDb250ZW50LmxpbmsuaW5uZXJIVE1MID1cbiAgYMKpIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJ6b3N0b3Zza2lcIiB0YXJnZXQ9XCJfYmxhbmtcIj5icnpvc3RvdnNraTwvYT4gMjAyM2A7XG5cbiAgT2JqZWN0LmtleXMoX2Zvb3RlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBmb290ZXJXcmFwcGVyLmFwcGVuZENoaWxkKF9mb290ZXJDb250ZW50W2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gZm9vdGVyV3JhcHBlcjtcbn0pO1xuXG5mdW5jdGlvbiBjaGVja0Zvcm1WYWxpZGl0eShmb3JtKSB7XG4gIGxldCBpc0Zvcm1WYWxpZCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICBpZiAoIWlzRm9ybVZhbGlkKSB7XG4gICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcmVuZGVyKHByb2plY3QsIGRvbUVsZW1lbnQpIHtcbiAgcHJvamVjdC5ub3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xuICAgIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZUNhcmQobm90ZSkuY2FyZCk7XG4gIH0pO1xufSk7XG5cbmxldCBjcmVhdGVOb3RlQ2FyZCA9IChmdW5jdGlvbihub3RlKSB7XG4gIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnbm90ZScpO1xuXG4gIE9iamVjdC5rZXlzKG5vdGUpLmZvckVhY2goa2V5ID0+IHtcbiAgICBsZXQgX3NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGtleSk7XG4gICAgX3NlY3Rpb24udGV4dENvbnRlbnQgPSBub3RlW2tleV07XG4gICAgY2FyZC5hcHBlbmRDaGlsZChfc2VjdGlvbik7XG4gIH0pO1xuXG4gIHJldHVybiB7Y2FyZH07XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCBub3RlcyBmcm9tICcuL25vdGVzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuXG4oKCkgPT4ge1xuICBjb25zdCBwYWdlQ29udGVudHMgPSBwYWdlKCkuaW5pdCgpLnBhZ2VDb250ZW50cztcbiAgcmVuZGVyKG5vdGVzKCkucHJvamVjdHNBcnJbMF0sIHBhZ2VDb250ZW50cy5tYWluKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBhZGROb3RlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1ub3RlLWJ0bicpO1xuICBjb25zdCB0b2dnbGVGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1mb3JtLWJ0bicpO1xuXG4gIGNvbnN0IGJpbmRFdmVudHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgYWRkTm90ZUJ0bi5vbmNsaWNrID0gYWRkTm90ZUJ0bkFjdGlvbjtcbiAgICB0b2dnbGVGb3JtQnRuLm9uY2xpY2sgPSB0b2dnbGVGb3JtQnRuQWN0aW9uO1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZvcm1CdG5BY3Rpb24oKSB7XG4gICAgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHRvZ2dsZUZvcm1CdG4udGV4dENvbnRlbnQgPSAnLSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB0b2dnbGVGb3JtQnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgIH07IC8vIGFib3ZlIGlzIG1vcmUgcmVsaWFibGUgdGhhbiAnY2xhc3NMaXN0LnRvZ2dsZScgZm9yIHNvbWUgcmVhc29uXG4gIH07XG5cbiAgZnVuY3Rpb24gYWRkTm90ZUJ0bkFjdGlvbigpIHtcbiAgICBpZiAoIXBhZ2UoKS5jaGVja0Zvcm1WYWxpZGl0eShmb3JtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlQ29udGVudHMubWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgIG5vdGVzKCkuYWRkTm90ZSgpO1xuICAgICAgcmVuZGVyKG5vdGVzKCkucHJvamVjdHNBcnJbMF0sIHBhZ2VDb250ZW50cy5tYWluKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge307XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==