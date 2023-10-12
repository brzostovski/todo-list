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
  --todo-bg-color: rgba(30, 144, 255, 0.2);
  --accent-color: dodgerblue;
  --bg-click-color: brightness(0.7);
  --pop-up-color: rgba(255, 255, 255, 0.2);
  --background-blur: blur(7px);

  /* DIMENSIONS */
  --main-margin: 20px;
  --todo-margin: 10px;
  --main-padding: 10px;
  --main-border-radius: 10px;
  --input-border-radius: 4px;
  --btn-padding: 5px 10px;
  --form-btn-margin: 0 10px;
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

#desc-input {
  height: 10rem;
}

#btn-container {
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
}

header > button,
form button {
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

header > button {
  font-size: large;
}

#btn-container > button {
  color: var(--main-font-color);

  margin: var(--form-btn-margin);

  display: flex;
  justify-content: center;
  align-items: center;

  height: var(--form-btn-height);
  width: var(--form-btn-width);
}

aside {
  grid-area: aside;

  background-color: var(--accent-color);

  display: flex;
  flex-direction: column;
}

aside > div {
  background-color: transparent;
}

#projects {
  display: flex;
  flex-direction: column;
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

.todo * {
  margin: var(--todo-margin);
  background-color: transparent;
}

.todo {
  min-width: 200px;
  max-width: 800px;

  background-color: var(--todo-bg-color);

  box-shadow: var(--main-shadow);

  border-radius: var(--main-border-radius);
}

.todo > .title {
  font-weight: bold;
}

.todo > .description {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,wBAAwB;EACxB,gCAAgC;EAChC,uCAAuC;EACvC,kCAAkC;EAClC,wCAAwC;EACxC,0BAA0B;EAC1B,iCAAiC;EACjC,wCAAwC;EACxC,4BAA4B;;EAE5B,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,0BAA0B;EAC1B,0BAA0B;EAC1B,uBAAuB;EACvB,yBAAyB;EACzB,6BAA6B;EAC7B,8BAA8B;EAC9B,uBAAuB;EACvB,sBAAsB;;EAEtB,eAAe;EACf,gDAAgD;;EAEhD,cAAc;EACd,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;;EAET,6BAA6B;EAC7B,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE;;EAEA;;EAEA,cAAc;;EAEd,aAAa;EACb,uCAAuC;EACvC;;;mBAGiB;AACnB;;AAEA;;EAEE,4BAA4B;;EAE5B,wCAAwC;AAC1C;;AAEA;;EAEE,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;;EAEnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;;EAEhB,4BAA4B;;EAE5B,oCAAoC;EACpC,kCAAkC;;EAElC,kBAAkB;EAClB,4DAA4D;EAC5D,4DAA4D;;EAE5D,wCAAwC;EACxC,8BAA8B;;EAE9B,qCAAqC;EACrC,uCAAuC;EACvC,+CAA+C;;EAE/C,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;EAEE,2BAA2B;EAC3B,wCAAwC;;EAExC,yCAAyC;;EAEzC,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;;EAE7B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,UAAU;;EAEV,eAAe;EACf,6BAA6B;EAC7B,iBAAiB;;EAEjB,qCAAqC;;EAErC,2BAA2B;EAC3B,kCAAkC;EAClC,wCAAwC;;EAExC,oDAAoD;AACtD;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,QAAQ;EACR,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;;EAE7B,8BAA8B;;EAE9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,gBAAgB;;EAEhB,qCAAqC;;EAErC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;;EAEf,gBAAgB;;EAEhB,OAAO;;EAEP,4BAA4B;;EAE5B,cAAc;;EAEd,aAAa;EACb,sBAAsB;;EAEtB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;;EAEhB,sCAAsC;;EAEtC,8BAA8B;;EAE9B,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  /* COLORS */\n  --main-font-color: white;\n  --main-bg-color: rgb(69, 69, 69);\n  --main-shadow-color: rgba(0, 0, 0, 0.5);\n  --banner-bg-color: rgb(26, 26, 26);\n  --todo-bg-color: rgba(30, 144, 255, 0.2);\n  --accent-color: dodgerblue;\n  --bg-click-color: brightness(0.7);\n  --pop-up-color: rgba(255, 255, 255, 0.2);\n  --background-blur: blur(7px);\n\n  /* DIMENSIONS */\n  --main-margin: 20px;\n  --todo-margin: 10px;\n  --main-padding: 10px;\n  --main-border-radius: 10px;\n  --input-border-radius: 4px;\n  --btn-padding: 5px 10px;\n  --form-btn-margin: 0 10px;\n  --form-container-width: 400px;\n  --form-container-height: 300px;\n  --form-btn-height: 24px;\n  --form-btn-width: 70px;\n\n  /* PROPERTIES */\n  --main-shadow: 0 0 16px var(--main-shadow-color);\n\n  /* DURATIONS */\n  --main-transition-duration: 0.2s;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  color: var(--main-font-color);\n  background-color: var(--main-bg-color);\n}\n\n#page-container > * {\n  max-width: 100dvw;\n}\n\n#page-container {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif\n  ;\n\n  height: 100dvh;\n\n  display: grid;\n  grid-template: 1fr 10fr 1fr / 200px 1fr;\n  grid-template-areas:\n    'header header'\n    'aside main'\n    'footer footer';\n}\n\nheader,\nfooter {\n  padding: var(--main-padding);\n\n  background-color: var(--banner-bg-color);\n}\n\nheader *,\nfooter * {\n  background-color: var(--banner-bg-color);\n}\n\nheader {\n  grid-area: header;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\nheader > form {\n  font-size: small;\n\n  padding: var(--main-padding);\n\n  height: var(--form-container-height);\n  width: var(--form-container-width);\n\n  position: absolute;\n  top: calc((100dvh / 2) - (var(--form-container-height) / 2));\n  left: calc((100dvw / 2) - (var(--form-container-width) / 2));\n\n  border-radius: var(--main-border-radius);\n  box-shadow: var(--main-shadow);\n\n  background-color: var(--pop-up-color);\n  backdrop-filter: var(--background-blur);\n  -webkit-backdrop-filter: var(--background-blur);\n\n  display: flex;\n  flex-direction: column;\n}\n\nlabel {\n  background-color: transparent;\n}\n\ninput,\ntextarea {\n  color: var(--main-bg-color);\n  background-color: var(--main-font-color);\n\n  border-radius: var(--input-border-radius);\n\n  resize: none;\n  overflow: auto;\n}\n\n#desc-input {\n  height: 10rem;\n}\n\n#btn-container {\n  background-color: transparent;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nheader > button,\nform button {\n  all: unset;\n\n  cursor: pointer;\n  color: var(--banner-bg-color);\n  font-size: normal;\n\n  background-color: var(--accent-color);\n\n  padding: var(--btn-padding);\n  border: outset var(--accent-color);\n  border-radius: var(--main-border-radius);\n\n  transition-duration: var(--main-transition-duration);\n}\n\nbutton:hover {\n  scale: 1.05;\n}\n\nbutton:active {\n  scale: 1;\n  filter: var(--bg-click-color);\n}\n\nheader > button {\n  font-size: large;\n}\n\n#btn-container > button {\n  color: var(--main-font-color);\n\n  margin: var(--form-btn-margin);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: var(--form-btn-height);\n  width: var(--form-btn-width);\n}\n\naside {\n  grid-area: aside;\n\n  background-color: var(--accent-color);\n\n  display: flex;\n  flex-direction: column;\n}\n\naside > div {\n  background-color: transparent;\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  grid-area: main;\n\n  max-width: 800px;\n\n  flex: 1;\n\n  padding: var(--main-padding);\n\n  overflow: auto;\n\n  display: flex;\n  flex-direction: column;\n  \n  gap: 10px;\n}\n\n.todo * {\n  margin: var(--todo-margin);\n  background-color: transparent;\n}\n\n.todo {\n  min-width: 200px;\n  max-width: 800px;\n\n  background-color: var(--todo-bg-color);\n\n  box-shadow: var(--main-shadow);\n\n  border-radius: var(--main-border-radius);\n}\n\n.todo > .title {\n  font-weight: bold;\n}\n\n.todo > .description {\n  font-style: italic;\n}\n\nfooter {\n  grid-area: footer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}"],"sourceRoot":""}]);
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

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const page = {
  init: (() => {
    let _pageContainer = document.createElement('div');
    _pageContainer.id = 'page-container';
  
    const _initHeader = (() => {
      let headerWrapper = document.createElement('header');
    
      let _headerContent = {
        title: document.createElement('span'),
        form: document.createElement('form'),
        showForm: document.createElement('button'),
      }
    
      _headerContent.title.textContent = 'Project: Todo List';
      _headerContent.form.classList.add('hidden');
      _headerContent.showForm.textContent = 'New todo';
      _headerContent.showForm.id = 'show-form-btn';
    
      let _formContent = {
        project: {
          label: `<label for="project-input">Project:</label>`,
          input: `
          <input
          type="text"
          list="projects-list"
          name="todos-project"
          id="project-input"
          value="Inbox">
          <datalist id="projects-list"></datalist>`,
        },
        title: {
          label: `<label for="title-input">Title:</label>`,
          input: `
            <input
            type="text"
            name="todo-title"
            id="title-input"
            placeholder="Todo title"
            required>`,
        },
        description: {
          label: `<label for="desc-input">Description:</label>`,
          input: `
          <textarea
          name="todo-description"
          id="desc-input"
          wrap="soft"
          placeholder="Todo description"></textarea>`,
        },
        date: {
          label: `<label for="date-input">Due date:</label>`,
          input: `<input type="date" name="due-date" id="date-input">`,
        },
        flag: {
          button: `<label for="flag-button">Flagged</label>
            <input type="checkbox" id="flag-btn">`,
        },
        buttons: {
          button: `
            <div id="btn-container">
              <button type="button" id="add-todo-btn">Add todo!</button>
              <button type="button" id="cancel-btn">Cancel</button>
            </div>
          `,
        },
      }
    
      Object.keys(_formContent).forEach(key => {
        if (
          (key === 'flag') ||
          (key === 'buttons')) {
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
        home: {
          elemType: 'button',
          label: 'Home',
        },
        flaggedTodos: {
          elemType: 'button',
          label: 'Flagged',
        },
        completedTodos: {
          elemType: 'button',
          label: 'Completed',
        },
        projects: {
          elemType: 'div',
          label: 'Projects:',
        },
      }
    
      Object.keys(_asideContent).forEach(key => {
        let _newElem = document.createElement(_asideContent[key].elemType);
        _newElem.id = key;
        _newElem.textContent = _asideContent[key].label;
        asideWrapper.appendChild(_newElem);
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
  
    let _pageHeader = _initHeader();
    let _pageAside = _initAside();
    let _pageMain = _initMain();
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
  }),
  checkFormValidity: (function(form) {
    let isFormValid = form.checkValidity();
    if (!isFormValid) {
      form.reportValidity();
      return false;
    } else {
      return true;
    }
  }),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function render() {
  return {
    projectBtn,
    projectsDropdown,
    allTodos,
    flaggedTodos,
    projectTodos,
  }
});

const _createTodoCard = (function(todo) {
  let _todo = document.createElement('div');
  _todo.classList.add('todo');
  _todo.dataset.todoId = todo.id; //use dataset to link cards, buttons to todos and projects

  let _completedBtn = document.createElement('button');
  _completedBtn.classList.add('completed-btn');
  _completedBtn.dataset.todoId = todo.id;
  _completedBtn.textContent = 'Completed';

  let _noteContent = document.createElement('div');
  _noteContent.classList.add('note-content');

  Object.keys(todo).forEach(key => {
    if (key === 'id') return;

    let _section = document.createElement('div');
    _section.classList.add(key);

    if (key === 'flag') {
      (todo[key] === true)
      ? (_section.textContent = '⚑')
      : (_section.textContent = '⚐')
    } else {
      _section.textContent = todo[key];
    }
    _noteContent.appendChild(_section);
  });

  let _deleteNoteBtn = document.createElement('button');
  _deleteNoteBtn.classList.add('delete-note-btn');
  _deleteNoteBtn.dataset.todoId = todo.id;
  _deleteNoteBtn.textContent = 'Delete note';

  _todo.appendChild(_completedBtn);
  _todo.appendChild(_noteContent);
  _todo.appendChild(_deleteNoteBtn);

  return _todo;
});

const projectBtn = (function(project, domElement) {
  const _createProjectBtn = (function(project) {
    let _btn = document.createElement('button');
    _btn.classList.add('project-btn');
    _btn.id = project;
    _btn.textContent = project;
  
    return _btn;
  });

  domElement.appendChild(_createProjectBtn(project));
});

const projectsDropdown = (function(projectsArr, datalist) {
  datalist.innerHTML = '';
  projectsArr.forEach(project => {
    datalist.innerHTML += `<option value="${project}">${project}</option>`;
  })
});

const allTodos = (function(todosArr, domElement) {
  if (todosArr === undefined) return;
  domElement.innerHTML = '';
  todosArr.forEach(todo => {
    domElement.appendChild(_createTodoCard(todo));
  });
});

const flaggedTodos = (function(todosArr, domElement) {
  if (todosArr === undefined) return;
  domElement.innerHTML = '';
  todosArr.forEach(todo => {
    if (todo.flag === true) domElement.appendChild(_createTodoCard(todo));
  });
});

const projectTodos = (function(project, todosArr, domElement) {
  if (todosArr === undefined) return;
  domElement.innerHTML = '';
  todosArr.forEach(todo => {
    if (todo.project === project) domElement.appendChild(_createTodoCard(todo));
  });
});

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todos = {
  arr: [],
  completed: [],
  projects: ['Inbox'],
  isNewProject: (function(projectName) {
    for (let i = 0; i < todos.projects.length; i++) {
      if (todos.projects[i] === projectName) return false;
    };
    return true;
  }),
  create: (function(id) {
    const _Todo = (function (project, title, description, dueDate, flag, id) {
      this.project = project;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.flag = flag;
      this.id = id;
    
      return {
        project,
        title,
        description,
        dueDate,
        flag,
        id,
      }
    });

    function _getNewTodoData() {
      function project() {
        let projectName = document.getElementById('project-input').value;
        if (projectName === '') projectName = 'Inbox';

        return projectName;
      };
      return {
        project: project(),
        title: document.getElementById('title-input').value,
        desc: document.getElementById('desc-input').value,
        date: document.getElementById('date-input').value,
        flag: document.getElementById('flag-btn').checked,
      };
    };
    
    let newTodo = new _Todo(
      _getNewTodoData().project,
      _getNewTodoData().title,
      _getNewTodoData().desc,
      _getNewTodoData().date,
      _getNewTodoData().flag,
      id
    )

    return (newTodo);
  }),
  add: (function(todo) {
    todos.arr.push(todo);
  }),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todos);

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),
/* harmony export */   customRandom: () => (/* binding */ customRandom),
/* harmony export */   nanoid: () => (/* binding */ nanoid),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



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
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");






(() => {
  const pageContents = _page__WEBPACK_IMPORTED_MODULE_1__["default"].init().pageContents;

  const showFormBtn = document.getElementById('show-form-btn');

  const homeBtn = document.getElementById('home');
  const flaggedTodosBtn = document.getElementById('flaggedTodos');
  const projectsContainer = document.getElementById('projects');

  const form = document.querySelector('form');
  const datalist = document.getElementById('projects-list');
  const addTodoBtn = document.getElementById('add-todo-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  _todos__WEBPACK_IMPORTED_MODULE_2__["default"].projects.forEach(project => {
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().projectBtn(project, projectsContainer);
  })
  let projectShowBtns = document.querySelectorAll('.project-btn');

  (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().allTodos(_todos__WEBPACK_IMPORTED_MODULE_2__["default"].arr, pageContents.main);

  const bindEvents = (function() {
    showFormBtn.onclick = showFormBtnAction;
    addTodoBtn.onclick = addTodoBtnAction;
    cancelBtn.onclick = cancelBtnAction;
    homeBtn.onclick = showAllTodos;
    flaggedTodosBtn.onclick = showFlaggedTodos;
    projectShowBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        showProjectTodos(btn.id);
      })
    });
  })();

  function showFormBtnAction() {
    if (form.classList.contains('hidden')) {
      form.classList.remove('hidden');
      showFormBtn.classList.add('hidden');
    };
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().projectsDropdown(_todos__WEBPACK_IMPORTED_MODULE_2__["default"].projects, datalist);
  };

  function addTodoBtnAction() {
    if (!_page__WEBPACK_IMPORTED_MODULE_1__["default"].checkFormValidity(form)) {
      return;
    } else {
      let newTodo = _todos__WEBPACK_IMPORTED_MODULE_2__["default"].create((0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)());
      _todos__WEBPACK_IMPORTED_MODULE_2__["default"].add(newTodo);

      if (_todos__WEBPACK_IMPORTED_MODULE_2__["default"].isNewProject(newTodo.project)) {
        _todos__WEBPACK_IMPORTED_MODULE_2__["default"].projects.push(newTodo.project);
        (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().projectBtn(newTodo.project, projectsContainer);
        
        let newBtn = document.getElementById(newTodo.project);
        newBtn.addEventListener('click', () => {
          showProjectTodos(newBtn.id);
        });
      };

      (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().allTodos(_todos__WEBPACK_IMPORTED_MODULE_2__["default"].arr, pageContents.main);
      showFormBtn.classList.remove('hidden');
      form.classList.add('hidden');
    };
  };

  function cancelBtnAction() {
    form.classList.add('hidden');
    showFormBtn.classList.remove('hidden');
  };

  function showAllTodos() {
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().allTodos(_todos__WEBPACK_IMPORTED_MODULE_2__["default"].arr, pageContents.main);
  };

  function showFlaggedTodos() {
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().flaggedTodos(_todos__WEBPACK_IMPORTED_MODULE_2__["default"].arr, pageContents.main);
  };

  function showProjectTodos(project) {
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().projectTodos(project, _todos__WEBPACK_IMPORTED_MODULE_2__["default"].arr, pageContents.main);
  };

  return;
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsWUFBWSxRQUFRLE9BQU8sT0FBTyxNQUFNLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxjQUFjLGNBQWMsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxXQUFXLFVBQVUsWUFBWSxjQUFjLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FB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QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7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QUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQU0sb0JBQW9CLDhDQUFLO0FBQ25DOztBQUVBO0FBQ0EsU0FBUyw2Q0FBSTtBQUNiO0FBQ0EsTUFBTTtBQUNOLG9CQUFvQiw4Q0FBSyxRQUFRLDhDQUFNO0FBQ3ZDLE1BQU0sOENBQUs7O0FBRVgsVUFBVSw4Q0FBSztBQUNmLFFBQVEsOENBQUs7QUFDYixRQUFRLG1EQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsTUFBTSxtREFBTSxZQUFZLDhDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBTSxZQUFZLDhDQUFLO0FBQzNCOztBQUVBO0FBQ0EsSUFBSSxtREFBTSxnQkFBZ0IsOENBQUs7QUFDL0I7O0FBRUE7QUFDQSxJQUFJLG1EQUFNLHlCQUF5Qiw4Q0FBSztBQUN4Qzs7QUFFQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC8qIENPTE9SUyAqL1xuICAtLW1haW4tZm9udC1jb2xvcjogd2hpdGU7XG4gIC0tbWFpbi1iZy1jb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xuICAtLW1haW4tc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC0tYmFubmVyLWJnLWNvbG9yOiByZ2IoMjYsIDI2LCAyNik7XG4gIC0tdG9kby1iZy1jb2xvcjogcmdiYSgzMCwgMTQ0LCAyNTUsIDAuMik7XG4gIC0tYWNjZW50LWNvbG9yOiBkb2RnZXJibHVlO1xuICAtLWJnLWNsaWNrLWNvbG9yOiBicmlnaHRuZXNzKDAuNyk7XG4gIC0tcG9wLXVwLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIC0tYmFja2dyb3VuZC1ibHVyOiBibHVyKDdweCk7XG5cbiAgLyogRElNRU5TSU9OUyAqL1xuICAtLW1haW4tbWFyZ2luOiAyMHB4O1xuICAtLXRvZG8tbWFyZ2luOiAxMHB4O1xuICAtLW1haW4tcGFkZGluZzogMTBweDtcbiAgLS1tYWluLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0taW5wdXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLWJ0bi1wYWRkaW5nOiA1cHggMTBweDtcbiAgLS1mb3JtLWJ0bi1tYXJnaW46IDAgMTBweDtcbiAgLS1mb3JtLWNvbnRhaW5lci13aWR0aDogNDAwcHg7XG4gIC0tZm9ybS1jb250YWluZXItaGVpZ2h0OiAzMDBweDtcbiAgLS1mb3JtLWJ0bi1oZWlnaHQ6IDI0cHg7XG4gIC0tZm9ybS1idG4td2lkdGg6IDcwcHg7XG5cbiAgLyogUFJPUEVSVElFUyAqL1xuICAtLW1haW4tc2hhZG93OiAwIDAgMTZweCB2YXIoLS1tYWluLXNoYWRvdy1jb2xvcik7XG5cbiAgLyogRFVSQVRJT05TICovXG4gIC0tbWFpbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcbn1cblxuI3BhZ2UtY29udGFpbmVyID4gKiB7XG4gIG1heC13aWR0aDogMTAwZHZ3O1xufVxuXG4jcGFnZS1jb250YWluZXIge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZlxuICA7XG5cbiAgaGVpZ2h0OiAxMDBkdmg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDEwZnIgMWZyIC8gMjAwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdoZWFkZXIgaGVhZGVyJ1xuICAgICdhc2lkZSBtYWluJ1xuICAgICdmb290ZXIgZm9vdGVyJztcbn1cblxuaGVhZGVyLFxuZm9vdGVyIHtcbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xufVxuXG5oZWFkZXIgKixcbmZvb3RlciAqIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFubmVyLWJnLWNvbG9yKTtcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmhlYWRlciA+IGZvcm0ge1xuICBmb250LXNpemU6IHNtYWxsO1xuXG4gIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XG5cbiAgaGVpZ2h0OiB2YXIoLS1mb3JtLWNvbnRhaW5lci1oZWlnaHQpO1xuICB3aWR0aDogdmFyKC0tZm9ybS1jb250YWluZXItd2lkdGgpO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKCgxMDBkdmggLyAyKSAtICh2YXIoLS1mb3JtLWNvbnRhaW5lci1oZWlnaHQpIC8gMikpO1xuICBsZWZ0OiBjYWxjKCgxMDBkdncgLyAyKSAtICh2YXIoLS1mb3JtLWNvbnRhaW5lci13aWR0aCkgLyAyKSk7XG5cbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1zaGFkb3cpO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC11cC1jb2xvcik7XG4gIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmFja2dyb3VuZC1ibHVyKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJhY2tncm91bmQtYmx1cik7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxubGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcblxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbnB1dC1ib3JkZXItcmFkaXVzKTtcblxuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jZGVzYy1pbnB1dCB7XG4gIGhlaWdodDogMTByZW07XG59XG5cbiNidG4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmhlYWRlciA+IGJ1dHRvbixcbmZvcm0gYnV0dG9uIHtcbiAgYWxsOiB1bnNldDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xuICBmb250LXNpemU6IG5vcm1hbDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuXG4gIHBhZGRpbmc6IHZhcigtLWJ0bi1wYWRkaW5nKTtcbiAgYm9yZGVyOiBvdXRzZXQgdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcblxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1tYWluLXRyYW5zaXRpb24tZHVyYXRpb24pO1xufVxuXG5idXR0b246aG92ZXIge1xuICBzY2FsZTogMS4wNTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xuICBmaWx0ZXI6IHZhcigtLWJnLWNsaWNrLWNvbG9yKTtcbn1cblxuaGVhZGVyID4gYnV0dG9uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuI2J0bi1jb250YWluZXIgPiBidXR0b24ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcblxuICBtYXJnaW46IHZhcigtLWZvcm0tYnRuLW1hcmdpbik7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaGVpZ2h0OiB2YXIoLS1mb3JtLWJ0bi1oZWlnaHQpO1xuICB3aWR0aDogdmFyKC0tZm9ybS1idG4td2lkdGgpO1xufVxuXG5hc2lkZSB7XG4gIGdyaWQtYXJlYTogYXNpZGU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5hc2lkZSA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jcHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5tYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuXG4gIG1heC13aWR0aDogODAwcHg7XG5cbiAgZmxleDogMTtcblxuICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xuXG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICBnYXA6IDEwcHg7XG59XG5cbi50b2RvICoge1xuICBtYXJnaW46IHZhcigtLXRvZG8tbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50b2RvIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2RvLWJnLWNvbG9yKTtcblxuICBib3gtc2hhZG93OiB2YXIoLS1tYWluLXNoYWRvdyk7XG5cbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcbn1cblxuLnRvZG8gPiAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRvZG8gPiAuZGVzY3JpcHRpb24ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmZvb3RlciB7XG4gIGdyaWQtYXJlYTogZm9vdGVyO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGdDQUFnQztFQUNoQyx1Q0FBdUM7RUFDdkMsa0NBQWtDO0VBQ2xDLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLHdDQUF3QztFQUN4Qyw0QkFBNEI7O0VBRTVCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsc0JBQXNCOztFQUV0QixlQUFlO0VBQ2YsZ0RBQWdEOztFQUVoRCxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTOztFQUVULDZCQUE2QjtFQUM3QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTs7RUFFQTs7RUFFQSxjQUFjOztFQUVkLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkM7OzttQkFHaUI7QUFDbkI7O0FBRUE7O0VBRUUsNEJBQTRCOztFQUU1Qix3Q0FBd0M7QUFDMUM7O0FBRUE7O0VBRUUsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjs7RUFFaEIsNEJBQTRCOztFQUU1QixvQ0FBb0M7RUFDcEMsa0NBQWtDOztFQUVsQyxrQkFBa0I7RUFDbEIsNERBQTREO0VBQzVELDREQUE0RDs7RUFFNUQsd0NBQXdDO0VBQ3hDLDhCQUE4Qjs7RUFFOUIscUNBQXFDO0VBQ3JDLHVDQUF1QztFQUN2QywrQ0FBK0M7O0VBRS9DLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLHdDQUF3Qzs7RUFFeEMseUNBQXlDOztFQUV6QyxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2Qjs7RUFFN0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsVUFBVTs7RUFFVixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGlCQUFpQjs7RUFFakIscUNBQXFDOztFQUVyQywyQkFBMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLHdDQUF3Qzs7RUFFeEMsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsUUFBUTtFQUNSLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2Qjs7RUFFN0IsOEJBQThCOztFQUU5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjs7RUFFaEIscUNBQXFDOztFQUVyQyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7O0VBRWYsZ0JBQWdCOztFQUVoQixPQUFPOztFQUVQLDRCQUE0Qjs7RUFFNUIsY0FBYzs7RUFFZCxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7RUFFaEIsc0NBQXNDOztFQUV0Qyw4QkFBOEI7O0VBRTlCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLyogQ09MT1JTICovXFxuICAtLW1haW4tZm9udC1jb2xvcjogd2hpdGU7XFxuICAtLW1haW4tYmctY29sb3I6IHJnYig2OSwgNjksIDY5KTtcXG4gIC0tbWFpbi1zaGFkb3ctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIC0tYmFubmVyLWJnLWNvbG9yOiByZ2IoMjYsIDI2LCAyNik7XFxuICAtLXRvZG8tYmctY29sb3I6IHJnYmEoMzAsIDE0NCwgMjU1LCAwLjIpO1xcbiAgLS1hY2NlbnQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICAtLWJnLWNsaWNrLWNvbG9yOiBicmlnaHRuZXNzKDAuNyk7XFxuICAtLXBvcC11cC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgLS1iYWNrZ3JvdW5kLWJsdXI6IGJsdXIoN3B4KTtcXG5cXG4gIC8qIERJTUVOU0lPTlMgKi9cXG4gIC0tbWFpbi1tYXJnaW46IDIwcHg7XFxuICAtLXRvZG8tbWFyZ2luOiAxMHB4O1xcbiAgLS1tYWluLXBhZGRpbmc6IDEwcHg7XFxuICAtLW1haW4tYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC0taW5wdXQtYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLS1idG4tcGFkZGluZzogNXB4IDEwcHg7XFxuICAtLWZvcm0tYnRuLW1hcmdpbjogMCAxMHB4O1xcbiAgLS1mb3JtLWNvbnRhaW5lci13aWR0aDogNDAwcHg7XFxuICAtLWZvcm0tY29udGFpbmVyLWhlaWdodDogMzAwcHg7XFxuICAtLWZvcm0tYnRuLWhlaWdodDogMjRweDtcXG4gIC0tZm9ybS1idG4td2lkdGg6IDcwcHg7XFxuXFxuICAvKiBQUk9QRVJUSUVTICovXFxuICAtLW1haW4tc2hhZG93OiAwIDAgMTZweCB2YXIoLS1tYWluLXNoYWRvdy1jb2xvcik7XFxuXFxuICAvKiBEVVJBVElPTlMgKi9cXG4gIC0tbWFpbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG59XFxuXFxuI3BhZ2UtY29udGFpbmVyID4gKiB7XFxuICBtYXgtd2lkdGg6IDEwMGR2dztcXG59XFxuXFxuI3BhZ2UtY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZlxcbiAgO1xcblxcbiAgaGVpZ2h0OiAxMDBkdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDEwZnIgMWZyIC8gMjAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXInXFxuICAgICdhc2lkZSBtYWluJ1xcbiAgICAnZm9vdGVyIGZvb3Rlcic7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhbm5lci1iZy1jb2xvcik7XFxufVxcblxcbmhlYWRlciAqLFxcbmZvb3RlciAqIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhbm5lci1iZy1jb2xvcik7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbmhlYWRlciA+IGZvcm0ge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG5cXG4gIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XFxuXFxuICBoZWlnaHQ6IHZhcigtLWZvcm0tY29udGFpbmVyLWhlaWdodCk7XFxuICB3aWR0aDogdmFyKC0tZm9ybS1jb250YWluZXItd2lkdGgpO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBjYWxjKCgxMDBkdmggLyAyKSAtICh2YXIoLS1mb3JtLWNvbnRhaW5lci1oZWlnaHQpIC8gMikpO1xcbiAgbGVmdDogY2FsYygoMTAwZHZ3IC8gMikgLSAodmFyKC0tZm9ybS1jb250YWluZXItd2lkdGgpIC8gMikpO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tc2hhZG93KTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC11cC1jb2xvcik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJhY2tncm91bmQtYmx1cik7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmFja2dyb3VuZC1ibHVyKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWlucHV0LWJvcmRlci1yYWRpdXMpO1xcblxcbiAgcmVzaXplOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNkZXNjLWlucHV0IHtcXG4gIGhlaWdodDogMTByZW07XFxufVxcblxcbiNidG4tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyID4gYnV0dG9uLFxcbmZvcm0gYnV0dG9uIHtcXG4gIGFsbDogdW5zZXQ7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tYmFubmVyLWJnLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbm9ybWFsO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG5cXG4gIHBhZGRpbmc6IHZhcigtLWJ0bi1wYWRkaW5nKTtcXG4gIGJvcmRlcjogb3V0c2V0IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tbWFpbi10cmFuc2l0aW9uLWR1cmF0aW9uKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjA1O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbiAgZmlsdGVyOiB2YXIoLS1iZy1jbGljay1jb2xvcik7XFxufVxcblxcbmhlYWRlciA+IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4jYnRuLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG5cXG4gIG1hcmdpbjogdmFyKC0tZm9ybS1idG4tbWFyZ2luKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoZWlnaHQ6IHZhcigtLWZvcm0tYnRuLWhlaWdodCk7XFxuICB3aWR0aDogdmFyKC0tZm9ybS1idG4td2lkdGgpO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBncmlkLWFyZWE6IGFzaWRlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5hc2lkZSA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG5cXG4gIG1heC13aWR0aDogODAwcHg7XFxuXFxuICBmbGV4OiAxO1xcblxcbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG5cXG4gIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRvZG8gKiB7XFxuICBtYXJnaW46IHZhcigtLXRvZG8tbWFyZ2luKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udG9kbyB7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZG8tYmctY29sb3IpO1xcblxcbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1zaGFkb3cpO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLnRvZG8gPiAudGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50b2RvID4gLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcGFnZSA9IHtcbiAgaW5pdDogKCgpID0+IHtcbiAgICBsZXQgX3BhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfcGFnZUNvbnRhaW5lci5pZCA9ICdwYWdlLWNvbnRhaW5lcic7XG4gIFxuICAgIGNvbnN0IF9pbml0SGVhZGVyID0gKCgpID0+IHtcbiAgICAgIGxldCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgXG4gICAgICBsZXQgX2hlYWRlckNvbnRlbnQgPSB7XG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgICAgIGZvcm06IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSxcbiAgICAgICAgc2hvd0Zvcm06IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxuICAgICAgfVxuICAgIFxuICAgICAgX2hlYWRlckNvbnRlbnQudGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdDogVG9kbyBMaXN0JztcbiAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBfaGVhZGVyQ29udGVudC5zaG93Rm9ybS50ZXh0Q29udGVudCA9ICdOZXcgdG9kbyc7XG4gICAgICBfaGVhZGVyQ29udGVudC5zaG93Rm9ybS5pZCA9ICdzaG93LWZvcm0tYnRuJztcbiAgICBcbiAgICAgIGxldCBfZm9ybUNvbnRlbnQgPSB7XG4gICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJwcm9qZWN0LWlucHV0XCI+UHJvamVjdDo8L2xhYmVsPmAsXG4gICAgICAgICAgaW5wdXQ6IGBcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbGlzdD1cInByb2plY3RzLWxpc3RcIlxuICAgICAgICAgIG5hbWU9XCJ0b2Rvcy1wcm9qZWN0XCJcbiAgICAgICAgICBpZD1cInByb2plY3QtaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPVwiSW5ib3hcIj5cbiAgICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJwcm9qZWN0cy1saXN0XCI+PC9kYXRhbGlzdD5gLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cInRpdGxlLWlucHV0XCI+VGl0bGU6PC9sYWJlbD5gLFxuICAgICAgICAgIGlucHV0OiBgXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0b2RvLXRpdGxlXCJcbiAgICAgICAgICAgIGlkPVwidGl0bGUtaW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUb2RvIHRpdGxlXCJcbiAgICAgICAgICAgIHJlcXVpcmVkPmAsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwiZGVzYy1pbnB1dFwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+YCxcbiAgICAgICAgICBpbnB1dDogYFxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJ0b2RvLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBpZD1cImRlc2MtaW5wdXRcIlxuICAgICAgICAgIHdyYXA9XCJzb2Z0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvZG8gZGVzY3JpcHRpb25cIj48L3RleHRhcmVhPmAsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGU6IHtcbiAgICAgICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJkYXRlLWlucHV0XCI+RHVlIGRhdGU6PC9sYWJlbD5gLFxuICAgICAgICAgIGlucHV0OiBgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZS1kYXRlXCIgaWQ9XCJkYXRlLWlucHV0XCI+YCxcbiAgICAgICAgfSxcbiAgICAgICAgZmxhZzoge1xuICAgICAgICAgIGJ1dHRvbjogYDxsYWJlbCBmb3I9XCJmbGFnLWJ1dHRvblwiPkZsYWdnZWQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiZmxhZy1idG5cIj5gLFxuICAgICAgICB9LFxuICAgICAgICBidXR0b25zOiB7XG4gICAgICAgICAgYnV0dG9uOiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImFkZC10b2RvLWJ0blwiPkFkZCB0b2RvITwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbC1idG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgXG4gICAgICBPYmplY3Qua2V5cyhfZm9ybUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChrZXkgPT09ICdmbGFnJykgfHxcbiAgICAgICAgICAoa2V5ID09PSAnYnV0dG9ucycpKSB7XG4gICAgICAgICAgX2hlYWRlckNvbnRlbnQuZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0uYnV0dG9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uaW5uZXJIVE1MICs9IF9mb3JtQ29udGVudFtrZXldLmxhYmVsO1xuICAgICAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uaW5uZXJIVE1MICs9IF9mb3JtQ29udGVudFtrZXldLmlucHV0O1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgXG4gICAgICBPYmplY3Qua2V5cyhfaGVhZGVyQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKF9oZWFkZXJDb250ZW50W2tleV0pO1xuICAgICAgfSk7XG4gICAgXG4gICAgICByZXR1cm4gaGVhZGVyV3JhcHBlcjtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBfaW5pdEFzaWRlID0gKCgpID0+IHtcbiAgICAgIGxldCBhc2lkZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuICAgIFxuICAgICAgbGV0IF9hc2lkZUNvbnRlbnQgPSB7XG4gICAgICAgIGhvbWU6IHtcbiAgICAgICAgICBlbGVtVHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgbGFiZWw6ICdIb21lJyxcbiAgICAgICAgfSxcbiAgICAgICAgZmxhZ2dlZFRvZG9zOiB7XG4gICAgICAgICAgZWxlbVR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIGxhYmVsOiAnRmxhZ2dlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlZFRvZG9zOiB7XG4gICAgICAgICAgZWxlbVR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIGxhYmVsOiAnQ29tcGxldGVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvamVjdHM6IHtcbiAgICAgICAgICBlbGVtVHlwZTogJ2RpdicsXG4gICAgICAgICAgbGFiZWw6ICdQcm9qZWN0czonLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIFxuICAgICAgT2JqZWN0LmtleXMoX2FzaWRlQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgX25ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KF9hc2lkZUNvbnRlbnRba2V5XS5lbGVtVHlwZSk7XG4gICAgICAgIF9uZXdFbGVtLmlkID0ga2V5O1xuICAgICAgICBfbmV3RWxlbS50ZXh0Q29udGVudCA9IF9hc2lkZUNvbnRlbnRba2V5XS5sYWJlbDtcbiAgICAgICAgYXNpZGVXcmFwcGVyLmFwcGVuZENoaWxkKF9uZXdFbGVtKTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgcmV0dXJuIGFzaWRlV3JhcHBlcjtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBfaW5pdE1haW4gPSAoKCkgPT4ge1xuICAgICAgbGV0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIFxuICAgICAgcmV0dXJuIG1haW5XcmFwcGVyO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IF9pbml0Rm9vdGVyID0gKCgpID0+IHtcbiAgICAgIGxldCBmb290ZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgXG4gICAgICBsZXQgX2Zvb3RlckNvbnRlbnQgPSB7XG4gICAgICAgIGxpbms6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICAgIH1cbiAgICBcbiAgICAgIF9mb290ZXJDb250ZW50LmxpbmsuaW5uZXJIVE1MID1cbiAgICAgIGDCqSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Jyem9zdG92c2tpXCIgdGFyZ2V0PVwiX2JsYW5rXCI+YnJ6b3N0b3Zza2k8L2E+IDIwMjNgO1xuICAgIFxuICAgICAgT2JqZWN0LmtleXMoX2Zvb3RlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgZm9vdGVyV3JhcHBlci5hcHBlbmRDaGlsZChfZm9vdGVyQ29udGVudFtrZXldKTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgcmV0dXJuIGZvb3RlcldyYXBwZXI7XG4gICAgfSk7XG4gIFxuICAgIGxldCBfcGFnZUhlYWRlciA9IF9pbml0SGVhZGVyKCk7XG4gICAgbGV0IF9wYWdlQXNpZGUgPSBfaW5pdEFzaWRlKCk7XG4gICAgbGV0IF9wYWdlTWFpbiA9IF9pbml0TWFpbigpO1xuICAgIGxldCBfcGFnZUZvb3RlciA9IF9pbml0Rm9vdGVyKCk7XG4gIFxuICAgIGxldCBwYWdlQ29udGVudHMgPSB7XG4gICAgICBoZWFkZXI6IF9wYWdlSGVhZGVyLFxuICAgICAgYXNpZGU6IF9wYWdlQXNpZGUsXG4gICAgICBtYWluOiBfcGFnZU1haW4sXG4gICAgICBmb290ZXI6IF9wYWdlRm9vdGVyLFxuICAgIH07XG4gIFxuICAgIE9iamVjdC5rZXlzKHBhZ2VDb250ZW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgX3BhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnRzW2tleV0pO1xuICAgIH0pO1xuICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF9wYWdlQ29udGFpbmVyKTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2VDb250ZW50cyxcbiAgICB9O1xuICB9KSxcbiAgY2hlY2tGb3JtVmFsaWRpdHk6IChmdW5jdGlvbihmb3JtKSB7XG4gICAgbGV0IGlzRm9ybVZhbGlkID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgaWYgKCFpc0Zvcm1WYWxpZCkge1xuICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTsiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHByb2plY3RCdG4sXG4gICAgcHJvamVjdHNEcm9wZG93bixcbiAgICBhbGxUb2RvcyxcbiAgICBmbGFnZ2VkVG9kb3MsXG4gICAgcHJvamVjdFRvZG9zLFxuICB9XG59KTtcblxuY29uc3QgX2NyZWF0ZVRvZG9DYXJkID0gKGZ1bmN0aW9uKHRvZG8pIHtcbiAgbGV0IF90b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF90b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgX3RvZG8uZGF0YXNldC50b2RvSWQgPSB0b2RvLmlkOyAvL3VzZSBkYXRhc2V0IHRvIGxpbmsgY2FyZHMsIGJ1dHRvbnMgdG8gdG9kb3MgYW5kIHByb2plY3RzXG5cbiAgbGV0IF9jb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgX2NvbXBsZXRlZEJ0bi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtYnRuJyk7XG4gIF9jb21wbGV0ZWRCdG4uZGF0YXNldC50b2RvSWQgPSB0b2RvLmlkO1xuICBfY29tcGxldGVkQnRuLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XG5cbiAgbGV0IF9ub3RlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfbm90ZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbm90ZS1jb250ZW50Jyk7XG5cbiAgT2JqZWN0LmtleXModG9kbykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChrZXkgPT09ICdpZCcpIHJldHVybjtcblxuICAgIGxldCBfc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF9zZWN0aW9uLmNsYXNzTGlzdC5hZGQoa2V5KTtcblxuICAgIGlmIChrZXkgPT09ICdmbGFnJykge1xuICAgICAgKHRvZG9ba2V5XSA9PT0gdHJ1ZSlcbiAgICAgID8gKF9zZWN0aW9uLnRleHRDb250ZW50ID0gJ+KakScpXG4gICAgICA6IChfc2VjdGlvbi50ZXh0Q29udGVudCA9ICfimpAnKVxuICAgIH0gZWxzZSB7XG4gICAgICBfc2VjdGlvbi50ZXh0Q29udGVudCA9IHRvZG9ba2V5XTtcbiAgICB9XG4gICAgX25vdGVDb250ZW50LmFwcGVuZENoaWxkKF9zZWN0aW9uKTtcbiAgfSk7XG5cbiAgbGV0IF9kZWxldGVOb3RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIF9kZWxldGVOb3RlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1ub3RlLWJ0bicpO1xuICBfZGVsZXRlTm90ZUJ0bi5kYXRhc2V0LnRvZG9JZCA9IHRvZG8uaWQ7XG4gIF9kZWxldGVOb3RlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBub3RlJztcblxuICBfdG9kby5hcHBlbmRDaGlsZChfY29tcGxldGVkQnRuKTtcbiAgX3RvZG8uYXBwZW5kQ2hpbGQoX25vdGVDb250ZW50KTtcbiAgX3RvZG8uYXBwZW5kQ2hpbGQoX2RlbGV0ZU5vdGVCdG4pO1xuXG4gIHJldHVybiBfdG9kbztcbn0pO1xuXG5jb25zdCBwcm9qZWN0QnRuID0gKGZ1bmN0aW9uKHByb2plY3QsIGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgX2NyZWF0ZVByb2plY3RCdG4gPSAoZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIGxldCBfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgX2J0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpO1xuICAgIF9idG4uaWQgPSBwcm9qZWN0O1xuICAgIF9idG4udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICBcbiAgICByZXR1cm4gX2J0bjtcbiAgfSk7XG5cbiAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlUHJvamVjdEJ0bihwcm9qZWN0KSk7XG59KTtcblxuY29uc3QgcHJvamVjdHNEcm9wZG93biA9IChmdW5jdGlvbihwcm9qZWN0c0FyciwgZGF0YWxpc3QpIHtcbiAgZGF0YWxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIHByb2plY3RzQXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgZGF0YWxpc3QuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qZWN0fVwiPiR7cHJvamVjdH08L29wdGlvbj5gO1xuICB9KVxufSk7XG5cbmNvbnN0IGFsbFRvZG9zID0gKGZ1bmN0aW9uKHRvZG9zQXJyLCBkb21FbGVtZW50KSB7XG4gIGlmICh0b2Rvc0FyciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIGRvbUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIHRvZG9zQXJyLmZvckVhY2godG9kbyA9PiB7XG4gICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlVG9kb0NhcmQodG9kbykpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBmbGFnZ2VkVG9kb3MgPSAoZnVuY3Rpb24odG9kb3NBcnIsIGRvbUVsZW1lbnQpIHtcbiAgaWYgKHRvZG9zQXJyID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgZG9tRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgdG9kb3NBcnIuZm9yRWFjaCh0b2RvID0+IHtcbiAgICBpZiAodG9kby5mbGFnID09PSB0cnVlKSBkb21FbGVtZW50LmFwcGVuZENoaWxkKF9jcmVhdGVUb2RvQ2FyZCh0b2RvKSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHByb2plY3RUb2RvcyA9IChmdW5jdGlvbihwcm9qZWN0LCB0b2Rvc0FyciwgZG9tRWxlbWVudCkge1xuICBpZiAodG9kb3NBcnIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBkb21FbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB0b2Rvc0Fyci5mb3JFYWNoKHRvZG8gPT4ge1xuICAgIGlmICh0b2RvLnByb2plY3QgPT09IHByb2plY3QpIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRvZG9DYXJkKHRvZG8pKTtcbiAgfSk7XG59KTsiLCJjb25zdCB0b2RvcyA9IHtcbiAgYXJyOiBbXSxcbiAgY29tcGxldGVkOiBbXSxcbiAgcHJvamVjdHM6IFsnSW5ib3gnXSxcbiAgaXNOZXdQcm9qZWN0OiAoZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodG9kb3MucHJvamVjdHNbaV0gPT09IHByb2plY3ROYW1lKSByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSksXG4gIGNyZWF0ZTogKGZ1bmN0aW9uKGlkKSB7XG4gICAgY29uc3QgX1RvZG8gPSAoZnVuY3Rpb24gKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZmxhZywgaWQpIHtcbiAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgdGhpcy5mbGFnID0gZmxhZztcbiAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgZmxhZyxcbiAgICAgICAgaWQsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBfZ2V0TmV3VG9kb0RhdGEoKSB7XG4gICAgICBmdW5jdGlvbiBwcm9qZWN0KCkge1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbnB1dCcpLnZhbHVlO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT09ICcnKSBwcm9qZWN0TmFtZSA9ICdJbmJveCc7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3ROYW1lO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3Q6IHByb2plY3QoKSxcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBkZXNjOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYy1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBmbGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZy1idG4nKS5jaGVja2VkLFxuICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIGxldCBuZXdUb2RvID0gbmV3IF9Ub2RvKFxuICAgICAgX2dldE5ld1RvZG9EYXRhKCkucHJvamVjdCxcbiAgICAgIF9nZXROZXdUb2RvRGF0YSgpLnRpdGxlLFxuICAgICAgX2dldE5ld1RvZG9EYXRhKCkuZGVzYyxcbiAgICAgIF9nZXROZXdUb2RvRGF0YSgpLmRhdGUsXG4gICAgICBfZ2V0TmV3VG9kb0RhdGEoKS5mbGFnLFxuICAgICAgaWRcbiAgICApXG5cbiAgICByZXR1cm4gKG5ld1RvZG8pO1xuICB9KSxcbiAgYWRkOiAoZnVuY3Rpb24odG9kbykge1xuICAgIHRvZG9zLmFyci5wdXNoKHRvZG8pO1xuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9zOyIsImltcG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5sZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5sZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxubGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxubGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+XG4gIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLnJlZHVjZSgoaWQsIGJ5dGUpID0+IHtcbiAgICBieXRlICY9IDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPiA2Mikge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfSwgJycpXG5leHBvcnQgeyBuYW5vaWQsIGN1c3RvbUFscGhhYmV0LCBjdXN0b21SYW5kb20sIHVybEFscGhhYmV0LCByYW5kb20gfVxuIiwibGV0IHVybEFscGhhYmV0ID1cbiAgJ3VzZWFuZG9tLTI2VDE5ODM0MFBYNzVweEpBQ0tWRVJZTUlOREJVU0hXT0xGX0dRWmJmZ2hqa2xxdnd5enJpY3QnXG5leHBvcnQgeyB1cmxBbHBoYWJldCB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCB0b2RvcyBmcm9tICcuL3RvZG9zJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcblxuKCgpID0+IHtcbiAgY29uc3QgcGFnZUNvbnRlbnRzID0gcGFnZS5pbml0KCkucGFnZUNvbnRlbnRzO1xuXG4gIGNvbnN0IHNob3dGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctZm9ybS1idG4nKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgY29uc3QgZmxhZ2dlZFRvZG9zQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWdnZWRUb2RvcycpO1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IGRhdGFsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKTtcbiAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kby1idG4nKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1idG4nKTtcblxuICB0b2Rvcy5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIHJlbmRlcigpLnByb2plY3RCdG4ocHJvamVjdCwgcHJvamVjdHNDb250YWluZXIpO1xuICB9KVxuICBsZXQgcHJvamVjdFNob3dCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnRuJyk7XG5cbiAgcmVuZGVyKCkuYWxsVG9kb3ModG9kb3MuYXJyLCBwYWdlQ29udGVudHMubWFpbik7XG5cbiAgY29uc3QgYmluZEV2ZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBzaG93Rm9ybUJ0bi5vbmNsaWNrID0gc2hvd0Zvcm1CdG5BY3Rpb247XG4gICAgYWRkVG9kb0J0bi5vbmNsaWNrID0gYWRkVG9kb0J0bkFjdGlvbjtcbiAgICBjYW5jZWxCdG4ub25jbGljayA9IGNhbmNlbEJ0bkFjdGlvbjtcbiAgICBob21lQnRuLm9uY2xpY2sgPSBzaG93QWxsVG9kb3M7XG4gICAgZmxhZ2dlZFRvZG9zQnRuLm9uY2xpY2sgPSBzaG93RmxhZ2dlZFRvZG9zO1xuICAgIHByb2plY3RTaG93QnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNob3dQcm9qZWN0VG9kb3MoYnRuLmlkKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gc2hvd0Zvcm1CdG5BY3Rpb24oKSB7XG4gICAgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHNob3dGb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH07XG4gICAgcmVuZGVyKCkucHJvamVjdHNEcm9wZG93bih0b2Rvcy5wcm9qZWN0cywgZGF0YWxpc3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFkZFRvZG9CdG5BY3Rpb24oKSB7XG4gICAgaWYgKCFwYWdlLmNoZWNrRm9ybVZhbGlkaXR5KGZvcm0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUb2RvID0gdG9kb3MuY3JlYXRlKG5hbm9pZCgpKTtcbiAgICAgIHRvZG9zLmFkZChuZXdUb2RvKTtcblxuICAgICAgaWYgKHRvZG9zLmlzTmV3UHJvamVjdChuZXdUb2RvLnByb2plY3QpKSB7XG4gICAgICAgIHRvZG9zLnByb2plY3RzLnB1c2gobmV3VG9kby5wcm9qZWN0KTtcbiAgICAgICAgcmVuZGVyKCkucHJvamVjdEJ0bihuZXdUb2RvLnByb2plY3QsIHByb2plY3RzQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdUb2RvLnByb2plY3QpO1xuICAgICAgICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgc2hvd1Byb2plY3RUb2RvcyhuZXdCdG4uaWQpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJlbmRlcigpLmFsbFRvZG9zKHRvZG9zLmFyciwgcGFnZUNvbnRlbnRzLm1haW4pO1xuICAgICAgc2hvd0Zvcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gY2FuY2VsQnRuQWN0aW9uKCkge1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgc2hvd0Zvcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2hvd0FsbFRvZG9zKCkge1xuICAgIHJlbmRlcigpLmFsbFRvZG9zKHRvZG9zLmFyciwgcGFnZUNvbnRlbnRzLm1haW4pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNob3dGbGFnZ2VkVG9kb3MoKSB7XG4gICAgcmVuZGVyKCkuZmxhZ2dlZFRvZG9zKHRvZG9zLmFyciwgcGFnZUNvbnRlbnRzLm1haW4pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNob3dQcm9qZWN0VG9kb3MocHJvamVjdCkge1xuICAgIHJlbmRlcigpLnByb2plY3RUb2Rvcyhwcm9qZWN0LCB0b2Rvcy5hcnIsIHBhZ2VDb250ZW50cy5tYWluKTtcbiAgfTtcblxuICByZXR1cm47XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==