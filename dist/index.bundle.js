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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,wBAAwB;EACxB,gCAAgC;EAChC,uCAAuC;EACvC,kCAAkC;EAClC,wCAAwC;EACxC,0BAA0B;EAC1B,iCAAiC;EACjC,wCAAwC;EACxC,4BAA4B;;EAE5B,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,0BAA0B;EAC1B,0BAA0B;EAC1B,uBAAuB;EACvB,yBAAyB;EACzB,6BAA6B;EAC7B,8BAA8B;EAC9B,uBAAuB;EACvB,sBAAsB;;EAEtB,eAAe;EACf,gDAAgD;;EAEhD,cAAc;EACd,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;;EAET,6BAA6B;EAC7B,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE;;EAEA;;EAEA,cAAc;;EAEd,aAAa;EACb,uCAAuC;EACvC;;;mBAGiB;AACnB;;AAEA;;EAEE,4BAA4B;;EAE5B,wCAAwC;AAC1C;;AAEA;;EAEE,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;;EAEnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;;EAEhB,4BAA4B;;EAE5B,oCAAoC;EACpC,kCAAkC;;EAElC,kBAAkB;EAClB,4DAA4D;EAC5D,4DAA4D;;EAE5D,wCAAwC;EACxC,8BAA8B;;EAE9B,qCAAqC;EACrC,uCAAuC;EACvC,+CAA+C;;EAE/C,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;EAEE,2BAA2B;EAC3B,wCAAwC;;EAExC,yCAAyC;;EAEzC,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;;EAE7B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,UAAU;;EAEV,eAAe;EACf,6BAA6B;EAC7B,iBAAiB;;EAEjB,qCAAqC;;EAErC,2BAA2B;EAC3B,kCAAkC;EAClC,wCAAwC;;EAExC,oDAAoD;AACtD;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,QAAQ;EACR,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;;EAE7B,8BAA8B;;EAE9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,gBAAgB;;EAEhB,qCAAqC;;EAErC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;;EAEf,gBAAgB;;EAEhB,OAAO;;EAEP,4BAA4B;;EAE5B,cAAc;;EAEd,aAAa;EACb,sBAAsB;;EAEtB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;;EAEhB,sCAAsC;;EAEtC,8BAA8B;;EAE9B,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  /* COLORS */\n  --main-font-color: white;\n  --main-bg-color: rgb(69, 69, 69);\n  --main-shadow-color: rgba(0, 0, 0, 0.5);\n  --banner-bg-color: rgb(26, 26, 26);\n  --note-bg-color: rgba(30, 144, 255, 0.2);\n  --accent-color: dodgerblue;\n  --bg-click-color: brightness(0.7);\n  --pop-up-color: rgba(255, 255, 255, 0.2);\n  --background-blur: blur(7px);\n\n  /* DIMENSIONS */\n  --main-margin: 20px;\n  --note-margin: 10px;\n  --main-padding: 10px;\n  --main-border-radius: 10px;\n  --input-border-radius: 4px;\n  --btn-padding: 5px 10px;\n  --form-btn-margin: 0 10px;\n  --form-container-width: 400px;\n  --form-container-height: 300px;\n  --form-btn-height: 24px;\n  --form-btn-width: 70px;\n\n  /* PROPERTIES */\n  --main-shadow: 0 0 16px var(--main-shadow-color);\n\n  /* DURATIONS */\n  --main-transition-duration: 0.2s;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  color: var(--main-font-color);\n  background-color: var(--main-bg-color);\n}\n\n#page-container > * {\n  max-width: 100dvw;\n}\n\n#page-container {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif\n  ;\n\n  height: 100dvh;\n\n  display: grid;\n  grid-template: 1fr 10fr 1fr / 200px 1fr;\n  grid-template-areas:\n    'header header'\n    'aside main'\n    'footer footer';\n}\n\nheader,\nfooter {\n  padding: var(--main-padding);\n\n  background-color: var(--banner-bg-color);\n}\n\nheader *,\nfooter * {\n  background-color: var(--banner-bg-color);\n}\n\nheader {\n  grid-area: header;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\nheader > form {\n  font-size: small;\n\n  padding: var(--main-padding);\n\n  height: var(--form-container-height);\n  width: var(--form-container-width);\n\n  position: absolute;\n  top: calc((100dvh / 2) - (var(--form-container-height) / 2));\n  left: calc((100dvw / 2) - (var(--form-container-width) / 2));\n\n  border-radius: var(--main-border-radius);\n  box-shadow: var(--main-shadow);\n\n  background-color: var(--pop-up-color);\n  backdrop-filter: var(--background-blur);\n  -webkit-backdrop-filter: var(--background-blur);\n\n  display: flex;\n  flex-direction: column;\n}\n\nlabel {\n  background-color: transparent;\n}\n\ninput,\ntextarea {\n  color: var(--main-bg-color);\n  background-color: var(--main-font-color);\n\n  border-radius: var(--input-border-radius);\n\n  resize: none;\n  overflow: auto;\n}\n\n#desc-input {\n  height: 10rem;\n}\n\n#btn-container {\n  background-color: transparent;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nheader > button,\nform button {\n  all: unset;\n\n  cursor: pointer;\n  color: var(--banner-bg-color);\n  font-size: normal;\n\n  background-color: var(--accent-color);\n\n  padding: var(--btn-padding);\n  border: outset var(--accent-color);\n  border-radius: var(--main-border-radius);\n\n  transition-duration: var(--main-transition-duration);\n}\n\nbutton:hover {\n  scale: 1.05;\n}\n\nbutton:active {\n  scale: 1;\n  filter: var(--bg-click-color);\n}\n\nheader > button {\n  font-size: large;\n}\n\n#btn-container > button {\n  color: var(--main-font-color);\n\n  margin: var(--form-btn-margin);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: var(--form-btn-height);\n  width: var(--form-btn-width);\n}\n\naside {\n  grid-area: aside;\n\n  background-color: var(--accent-color);\n\n  display: flex;\n  flex-direction: column;\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  grid-area: main;\n\n  max-width: 800px;\n\n  flex: 1;\n\n  padding: var(--main-padding);\n\n  overflow: auto;\n\n  display: flex;\n  flex-direction: column;\n  \n  gap: 10px;\n}\n\n.note > * {\n  margin: var(--note-margin);\n  background-color: transparent;\n}\n\n.note {\n  min-width: 200px;\n  max-width: 800px;\n\n  background-color: var(--note-bg-color);\n\n  box-shadow: var(--main-shadow);\n\n  border-radius: var(--main-border-radius);\n}\n\n.note > .title {\n  font-weight: bold;\n}\n\n.note > .description {\n  font-style: italic;\n}\n\nfooter {\n  grid-area: footer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}"],"sourceRoot":""}]);
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
const notes = {
  arr: [],
  projects: ['Inbox', 'test'],
  add: (function() {
    const _Note = (function (project, title, description, dueDate, flag) {
      this.project = project;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.flag = flag;
    
      return {
        project,
        title,
        description,
        dueDate,
        flag,
      }
    });

    function _getNewNoteData() {
      return {
        project: document.getElementById('project-input').value,
        title: document.getElementById('title-input').value,
        desc: document.getElementById('desc-input').value,
        date: document.getElementById('date-input').value,
        flag: document.getElementById('flag-btn').checked,
      };
    };
  
    function _createNote() {
      let _project = _getNewNoteData().project;
      let _title = _getNewNoteData().title;
      let _desc = _getNewNoteData().desc;
      let _date = _getNewNoteData().date;
      let _flag = _getNewNoteData().flag;
    
      return (new _Note(_project, _title, _desc, _date, _flag));
    };

    let _note = _createNote();
    notes.arr.push(_note);
  }),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notes);

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
      _headerContent.showForm.textContent = 'New note';
      _headerContent.showForm.id = 'show-form-btn';
    
      let _formContent = {
        project: {
          label: `<label for="project-input">Project:</label>`,
          input: `
          <input
          type="text"
          name="notes-project"
          id="project-input"
          value="Inbox">`,
        },
        title: {
          label: `<label for="title-input">Title:</label>`,
          input: `
            <input
            type="text"
            name="note-title"
            id="title-input"
            placeholder="Note title"
            required>`,
        },
        description: {
          label: `<label for="desc-input">Description:</label>`,
          input: `
          <textarea
          name="note-description"
          id="desc-input"
          wrap="soft"
          placeholder="Note description"
          required></textarea>`,
        },
        date: {
          label: `<label for="date-input">Due date:</label>`,
          input: `<input type="text" name="due-date" id="date-input">`, // input will be date picker
        },
        flag: {
          button: `<label for="flag-button">Flagged</label>
            <input type="checkbox" id="flag-btn">`, // should be stylized button that acts as toggle
        },
        buttons: {
          button: `
            <div id="btn-container">
              <button type="button" id="add-note-btn">Add note!</button>
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
        flaggedNotes: {
          elemType: 'button',
          label: 'Flagged Notes',
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
    projectBtns,
    allNotes,
    flaggedNotes,
    projectNotes,
  }
});

const _createProjectBtn = (function(project) {
  let _btn = document.createElement('button');
  _btn.classList.add('project-btn');
  _btn.id = project;
  _btn.textContent = project;

  return _btn;
});

const _createNoteCard = (function(note) {
  let _card = document.createElement('div');
  _card.classList.add('note');

  Object.keys(note).forEach(key => {
    let _section = document.createElement('div');
    _section.classList.add(key);
    if (key === 'flag') {
      (note[key] === true)
      ? (_section.textContent = '⚑')
      : (_section.textContent = '⚐')
    } else {
      _section.textContent = note[key];
    }
    _card.appendChild(_section);
  });

  return _card;
});

const projectBtns = (function(projectsArr, domElement) {
  projectsArr.forEach(project => {
    domElement.appendChild(_createProjectBtn(project));
  });
});

const allNotes = (function(notesArr, domElement) {
  if (notesArr === undefined) return;
  notesArr.forEach(note => {
    domElement.appendChild(_createNoteCard(note));
  });
});

const flaggedNotes = (function(notesArr, domElement) {
  if (notesArr === undefined) return;
  notesArr.forEach(note => {
    if (note.flag === true) domElement.appendChild(_createNoteCard(note));
  });
});

const projectNotes = (function(project, notesArr, domElement) {
  if (notesArr === undefined) return;
  notesArr.forEach(note => {
    if (note.project === project) domElement.appendChild(_createNoteCard(note));
  });
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
  const pageContents = _page__WEBPACK_IMPORTED_MODULE_1__["default"].init().pageContents;

  const showFormBtn = document.getElementById('show-form-btn');

  const homeBtn = document.getElementById('home');
  const flaggedNotesBtn = document.getElementById('flaggedNotes');
  const projectsContainer = document.getElementById('projects');

  const form = document.querySelector('form');
  const addNoteBtn = document.getElementById('add-note-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().projectBtns(_notes__WEBPACK_IMPORTED_MODULE_2__["default"].projects, projectsContainer);
  let projectShowBtns = document.querySelectorAll('.project-btn');

  (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().allNotes(_notes__WEBPACK_IMPORTED_MODULE_2__["default"].arr, pageContents.main);

  const bindEvents = (function() {
    addNoteBtn.onclick = addNoteBtnAction;
    showFormBtn.onclick = showFormBtnAction;
    cancelBtn.onclick = cancelBtnAction;
    homeBtn.onclick = showAllNotes;
    flaggedNotesBtn.onclick = showFlaggedNotes;
    projectShowBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        showProjectNotes(btn.id);
      })
    });
  })();

  function showFormBtnAction() {
    if (form.classList.contains('hidden')) {
      form.classList.remove('hidden');
      showFormBtn.classList.add('hidden');
    };
  };

  function addNoteBtnAction() {
    if (!_page__WEBPACK_IMPORTED_MODULE_1__["default"].checkFormValidity(form)) {
      return;
    } else {
      _notes__WEBPACK_IMPORTED_MODULE_2__["default"].add();
      pageContents.main.innerHTML = '';
      (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().allNotes(_notes__WEBPACK_IMPORTED_MODULE_2__["default"].arr, pageContents.main);
      showFormBtn.classList.remove('hidden');
      form.classList.add('hidden');
    };
  };

  function cancelBtnAction() {
    form.classList.add('hidden');
    showFormBtn.classList.remove('hidden');
  };

  function showAllNotes() {
    pageContents.main.innerHTML = '';
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().allNotes(_notes__WEBPACK_IMPORTED_MODULE_2__["default"].arr, pageContents.main);
  };

  function showFlaggedNotes() {
    pageContents.main.innerHTML = '';
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().flaggedNotes(_notes__WEBPACK_IMPORTED_MODULE_2__["default"].arr, pageContents.main);
  };

  function showProjectNotes(project) {
    pageContents.main.innerHTML = '';
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().projectNotes(project, _notes__WEBPACK_IMPORTED_MODULE_2__["default"].arr, pageContents.main);
  };

  return;
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLFFBQVEsT0FBTyxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGNBQWMsY0FBYyxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFdBQVcsVUFBVSxZQUFZLGNBQWMsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsY0FBYyxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxhQUFh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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7O0FDN0NwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ3pLbkIsaUVBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7OztVQy9ERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0s7QUFDRTtBQUNFOztBQUU5QjtBQUNBLHVCQUF1Qiw2Q0FBSTs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLG1EQUFNLGVBQWUsOENBQUs7QUFDNUI7O0FBRUEsRUFBRSxtREFBTSxZQUFZLDhDQUFLOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyw2Q0FBSTtBQUNiO0FBQ0EsTUFBTTtBQUNOLE1BQU0sOENBQUs7QUFDWDtBQUNBLE1BQU0sbURBQU0sWUFBWSw4Q0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtREFBTSxZQUFZLDhDQUFLO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1EQUFNLGdCQUFnQiw4Q0FBSztBQUMvQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtREFBTSx5QkFBeUIsOENBQUs7QUFDeEM7O0FBRUE7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25vdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC8qIENPTE9SUyAqL1xuICAtLW1haW4tZm9udC1jb2xvcjogd2hpdGU7XG4gIC0tbWFpbi1iZy1jb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xuICAtLW1haW4tc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC0tYmFubmVyLWJnLWNvbG9yOiByZ2IoMjYsIDI2LCAyNik7XG4gIC0tbm90ZS1iZy1jb2xvcjogcmdiYSgzMCwgMTQ0LCAyNTUsIDAuMik7XG4gIC0tYWNjZW50LWNvbG9yOiBkb2RnZXJibHVlO1xuICAtLWJnLWNsaWNrLWNvbG9yOiBicmlnaHRuZXNzKDAuNyk7XG4gIC0tcG9wLXVwLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIC0tYmFja2dyb3VuZC1ibHVyOiBibHVyKDdweCk7XG5cbiAgLyogRElNRU5TSU9OUyAqL1xuICAtLW1haW4tbWFyZ2luOiAyMHB4O1xuICAtLW5vdGUtbWFyZ2luOiAxMHB4O1xuICAtLW1haW4tcGFkZGluZzogMTBweDtcbiAgLS1tYWluLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0taW5wdXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLWJ0bi1wYWRkaW5nOiA1cHggMTBweDtcbiAgLS1mb3JtLWJ0bi1tYXJnaW46IDAgMTBweDtcbiAgLS1mb3JtLWNvbnRhaW5lci13aWR0aDogNDAwcHg7XG4gIC0tZm9ybS1jb250YWluZXItaGVpZ2h0OiAzMDBweDtcbiAgLS1mb3JtLWJ0bi1oZWlnaHQ6IDI0cHg7XG4gIC0tZm9ybS1idG4td2lkdGg6IDcwcHg7XG5cbiAgLyogUFJPUEVSVElFUyAqL1xuICAtLW1haW4tc2hhZG93OiAwIDAgMTZweCB2YXIoLS1tYWluLXNoYWRvdy1jb2xvcik7XG5cbiAgLyogRFVSQVRJT05TICovXG4gIC0tbWFpbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcbn1cblxuI3BhZ2UtY29udGFpbmVyID4gKiB7XG4gIG1heC13aWR0aDogMTAwZHZ3O1xufVxuXG4jcGFnZS1jb250YWluZXIge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZlxuICA7XG5cbiAgaGVpZ2h0OiAxMDBkdmg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDEwZnIgMWZyIC8gMjAwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdoZWFkZXIgaGVhZGVyJ1xuICAgICdhc2lkZSBtYWluJ1xuICAgICdmb290ZXIgZm9vdGVyJztcbn1cblxuaGVhZGVyLFxuZm9vdGVyIHtcbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xufVxuXG5oZWFkZXIgKixcbmZvb3RlciAqIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFubmVyLWJnLWNvbG9yKTtcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmhlYWRlciA+IGZvcm0ge1xuICBmb250LXNpemU6IHNtYWxsO1xuXG4gIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XG5cbiAgaGVpZ2h0OiB2YXIoLS1mb3JtLWNvbnRhaW5lci1oZWlnaHQpO1xuICB3aWR0aDogdmFyKC0tZm9ybS1jb250YWluZXItd2lkdGgpO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKCgxMDBkdmggLyAyKSAtICh2YXIoLS1mb3JtLWNvbnRhaW5lci1oZWlnaHQpIC8gMikpO1xuICBsZWZ0OiBjYWxjKCgxMDBkdncgLyAyKSAtICh2YXIoLS1mb3JtLWNvbnRhaW5lci13aWR0aCkgLyAyKSk7XG5cbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1zaGFkb3cpO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC11cC1jb2xvcik7XG4gIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmFja2dyb3VuZC1ibHVyKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJhY2tncm91bmQtYmx1cik7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxubGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcblxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbnB1dC1ib3JkZXItcmFkaXVzKTtcblxuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jZGVzYy1pbnB1dCB7XG4gIGhlaWdodDogMTByZW07XG59XG5cbiNidG4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmhlYWRlciA+IGJ1dHRvbixcbmZvcm0gYnV0dG9uIHtcbiAgYWxsOiB1bnNldDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xuICBmb250LXNpemU6IG5vcm1hbDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuXG4gIHBhZGRpbmc6IHZhcigtLWJ0bi1wYWRkaW5nKTtcbiAgYm9yZGVyOiBvdXRzZXQgdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcblxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1tYWluLXRyYW5zaXRpb24tZHVyYXRpb24pO1xufVxuXG5idXR0b246aG92ZXIge1xuICBzY2FsZTogMS4wNTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xuICBmaWx0ZXI6IHZhcigtLWJnLWNsaWNrLWNvbG9yKTtcbn1cblxuaGVhZGVyID4gYnV0dG9uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuI2J0bi1jb250YWluZXIgPiBidXR0b24ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcblxuICBtYXJnaW46IHZhcigtLWZvcm0tYnRuLW1hcmdpbik7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaGVpZ2h0OiB2YXIoLS1mb3JtLWJ0bi1oZWlnaHQpO1xuICB3aWR0aDogdmFyKC0tZm9ybS1idG4td2lkdGgpO1xufVxuXG5hc2lkZSB7XG4gIGdyaWQtYXJlYTogYXNpZGU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jcHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5tYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuXG4gIG1heC13aWR0aDogODAwcHg7XG5cbiAgZmxleDogMTtcblxuICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xuXG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICBnYXA6IDEwcHg7XG59XG5cbi5ub3RlID4gKiB7XG4gIG1hcmdpbjogdmFyKC0tbm90ZS1tYXJnaW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5vdGUge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGUtYmctY29sb3IpO1xuXG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tc2hhZG93KTtcblxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xufVxuXG4ubm90ZSA+IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubm90ZSA+IC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLHVDQUF1QztFQUN2QyxrQ0FBa0M7RUFDbEMsd0NBQXdDO0VBQ3hDLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsd0NBQXdDO0VBQ3hDLDRCQUE0Qjs7RUFFNUIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixzQkFBc0I7O0VBRXRCLGVBQWU7RUFDZixnREFBZ0Q7O0VBRWhELGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7O0VBRVQsNkJBQTZCO0VBQzdCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFOztFQUVBOztFQUVBLGNBQWM7O0VBRWQsYUFBYTtFQUNiLHVDQUF1QztFQUN2Qzs7O21CQUdpQjtBQUNuQjs7QUFFQTs7RUFFRSw0QkFBNEI7O0VBRTVCLHdDQUF3QztBQUMxQzs7QUFFQTs7RUFFRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1COztFQUVuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQiw0QkFBNEI7O0VBRTVCLG9DQUFvQztFQUNwQyxrQ0FBa0M7O0VBRWxDLGtCQUFrQjtFQUNsQiw0REFBNEQ7RUFDNUQsNERBQTREOztFQUU1RCx3Q0FBd0M7RUFDeEMsOEJBQThCOztFQUU5QixxQ0FBcUM7RUFDckMsdUNBQXVDO0VBQ3ZDLCtDQUErQzs7RUFFL0MsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0Isd0NBQXdDOztFQUV4Qyx5Q0FBeUM7O0VBRXpDLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCOztFQUU3QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxVQUFVOztFQUVWLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsaUJBQWlCOztFQUVqQixxQ0FBcUM7O0VBRXJDLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMsd0NBQXdDOztFQUV4QyxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCOztFQUU3Qiw4QkFBOEI7O0VBRTlCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixxQ0FBcUM7O0VBRXJDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTs7RUFFZixnQkFBZ0I7O0VBRWhCLE9BQU87O0VBRVAsNEJBQTRCOztFQUU1QixjQUFjOztFQUVkLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCOztFQUVoQixzQ0FBc0M7O0VBRXRDLDhCQUE4Qjs7RUFFOUIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBDT0xPUlMgKi9cXG4gIC0tbWFpbi1mb250LWNvbG9yOiB3aGl0ZTtcXG4gIC0tbWFpbi1iZy1jb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xcbiAgLS1tYWluLXNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgLS1iYW5uZXItYmctY29sb3I6IHJnYigyNiwgMjYsIDI2KTtcXG4gIC0tbm90ZS1iZy1jb2xvcjogcmdiYSgzMCwgMTQ0LCAyNTUsIDAuMik7XFxuICAtLWFjY2VudC1jb2xvcjogZG9kZ2VyYmx1ZTtcXG4gIC0tYmctY2xpY2stY29sb3I6IGJyaWdodG5lc3MoMC43KTtcXG4gIC0tcG9wLXVwLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAtLWJhY2tncm91bmQtYmx1cjogYmx1cig3cHgpO1xcblxcbiAgLyogRElNRU5TSU9OUyAqL1xcbiAgLS1tYWluLW1hcmdpbjogMjBweDtcXG4gIC0tbm90ZS1tYXJnaW46IDEwcHg7XFxuICAtLW1haW4tcGFkZGluZzogMTBweDtcXG4gIC0tbWFpbi1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLS1pbnB1dC1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtLWJ0bi1wYWRkaW5nOiA1cHggMTBweDtcXG4gIC0tZm9ybS1idG4tbWFyZ2luOiAwIDEwcHg7XFxuICAtLWZvcm0tY29udGFpbmVyLXdpZHRoOiA0MDBweDtcXG4gIC0tZm9ybS1jb250YWluZXItaGVpZ2h0OiAzMDBweDtcXG4gIC0tZm9ybS1idG4taGVpZ2h0OiAyNHB4O1xcbiAgLS1mb3JtLWJ0bi13aWR0aDogNzBweDtcXG5cXG4gIC8qIFBST1BFUlRJRVMgKi9cXG4gIC0tbWFpbi1zaGFkb3c6IDAgMCAxNnB4IHZhcigtLW1haW4tc2hhZG93LWNvbG9yKTtcXG5cXG4gIC8qIERVUkFUSU9OUyAqL1xcbiAgLS1tYWluLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuXFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4jcGFnZS1jb250YWluZXIgPiAqIHtcXG4gIG1heC13aWR0aDogMTAwZHZ3O1xcbn1cXG5cXG4jcGFnZS1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmXFxuICA7XFxuXFxuICBoZWlnaHQ6IDEwMGR2aDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMTBmciAxZnIgLyAyMDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyIGhlYWRlcidcXG4gICAgJ2FzaWRlIG1haW4nXFxuICAgICdmb290ZXIgZm9vdGVyJztcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFubmVyLWJnLWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyICosXFxuZm9vdGVyICoge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFubmVyLWJnLWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuaGVhZGVyID4gZm9ybSB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcblxcbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG5cXG4gIGhlaWdodDogdmFyKC0tZm9ybS1jb250YWluZXItaGVpZ2h0KTtcXG4gIHdpZHRoOiB2YXIoLS1mb3JtLWNvbnRhaW5lci13aWR0aCk7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoKDEwMGR2aCAvIDIpIC0gKHZhcigtLWZvcm0tY29udGFpbmVyLWhlaWdodCkgLyAyKSk7XFxuICBsZWZ0OiBjYWxjKCgxMDBkdncgLyAyKSAtICh2YXIoLS1mb3JtLWNvbnRhaW5lci13aWR0aCkgLyAyKSk7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1zaGFkb3cpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXVwLWNvbG9yKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmFja2dyb3VuZC1ibHVyKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1iYWNrZ3JvdW5kLWJsdXIpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taW5wdXQtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2Rlc2MtaW5wdXQge1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG59XFxuXFxuI2J0bi1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgPiBidXR0b24sXFxuZm9ybSBidXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xcbiAgZm9udC1zaXplOiBub3JtYWw7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcblxcbiAgcGFkZGluZzogdmFyKC0tYnRuLXBhZGRpbmcpO1xcbiAgYm9yZGVyOiBvdXRzZXQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1tYWluLXRyYW5zaXRpb24tZHVyYXRpb24pO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgc2NhbGU6IDEuMDU7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxuICBmaWx0ZXI6IHZhcigtLWJnLWNsaWNrLWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyID4gYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbiNidG4tY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcblxcbiAgbWFyZ2luOiB2YXIoLS1mb3JtLWJ0bi1tYXJnaW4pO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogdmFyKC0tZm9ybS1idG4taGVpZ2h0KTtcXG4gIHdpZHRoOiB2YXIoLS1mb3JtLWJ0bi13aWR0aCk7XFxufVxcblxcbmFzaWRlIHtcXG4gIGdyaWQtYXJlYTogYXNpZGU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcblxcbiAgZmxleDogMTtcXG5cXG4gIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XFxuXFxuICBvdmVyZmxvdzogYXV0bztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgXFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ub3RlID4gKiB7XFxuICBtYXJnaW46IHZhcigtLW5vdGUtbWFyZ2luKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubm90ZSB7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGUtYmctY29sb3IpO1xcblxcbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1zaGFkb3cpO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLm5vdGUgPiAudGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ub3RlID4gLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qgbm90ZXMgPSB7XG4gIGFycjogW10sXG4gIHByb2plY3RzOiBbJ0luYm94JywgJ3Rlc3QnXSxcbiAgYWRkOiAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgX05vdGUgPSAoZnVuY3Rpb24gKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZmxhZykge1xuICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICB0aGlzLmZsYWcgPSBmbGFnO1xuICAgIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBmbGFnLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gX2dldE5ld05vdGVEYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaW5wdXQnKS52YWx1ZSxcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBkZXNjOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYy1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBmbGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZy1idG4nKS5jaGVja2VkLFxuICAgICAgfTtcbiAgICB9O1xuICBcbiAgICBmdW5jdGlvbiBfY3JlYXRlTm90ZSgpIHtcbiAgICAgIGxldCBfcHJvamVjdCA9IF9nZXROZXdOb3RlRGF0YSgpLnByb2plY3Q7XG4gICAgICBsZXQgX3RpdGxlID0gX2dldE5ld05vdGVEYXRhKCkudGl0bGU7XG4gICAgICBsZXQgX2Rlc2MgPSBfZ2V0TmV3Tm90ZURhdGEoKS5kZXNjO1xuICAgICAgbGV0IF9kYXRlID0gX2dldE5ld05vdGVEYXRhKCkuZGF0ZTtcbiAgICAgIGxldCBfZmxhZyA9IF9nZXROZXdOb3RlRGF0YSgpLmZsYWc7XG4gICAgXG4gICAgICByZXR1cm4gKG5ldyBfTm90ZShfcHJvamVjdCwgX3RpdGxlLCBfZGVzYywgX2RhdGUsIF9mbGFnKSk7XG4gICAgfTtcblxuICAgIGxldCBfbm90ZSA9IF9jcmVhdGVOb3RlKCk7XG4gICAgbm90ZXMuYXJyLnB1c2goX25vdGUpO1xuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdGVzOyIsImNvbnN0IHBhZ2UgPSB7XG4gIGluaXQ6ICgoKSA9PiB7XG4gICAgbGV0IF9wYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3BhZ2VDb250YWluZXIuaWQgPSAncGFnZS1jb250YWluZXInO1xuICBcbiAgICBjb25zdCBfaW5pdEhlYWRlciA9ICgoKSA9PiB7XG4gICAgICBsZXQgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIFxuICAgICAgbGV0IF9oZWFkZXJDb250ZW50ID0ge1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgICBmb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyksXG4gICAgICAgIHNob3dGb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcbiAgICAgIH1cbiAgICBcbiAgICAgIF9oZWFkZXJDb250ZW50LnRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6IFRvZG8gTGlzdCc7XG4gICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgX2hlYWRlckNvbnRlbnQuc2hvd0Zvcm0udGV4dENvbnRlbnQgPSAnTmV3IG5vdGUnO1xuICAgICAgX2hlYWRlckNvbnRlbnQuc2hvd0Zvcm0uaWQgPSAnc2hvdy1mb3JtLWJ0bic7XG4gICAgXG4gICAgICBsZXQgX2Zvcm1Db250ZW50ID0ge1xuICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwicHJvamVjdC1pbnB1dFwiPlByb2plY3Q6PC9sYWJlbD5gLFxuICAgICAgICAgIGlucHV0OiBgXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJub3Rlcy1wcm9qZWN0XCJcbiAgICAgICAgICBpZD1cInByb2plY3QtaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPVwiSW5ib3hcIj5gLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cInRpdGxlLWlucHV0XCI+VGl0bGU6PC9sYWJlbD5gLFxuICAgICAgICAgIGlucHV0OiBgXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJub3RlLXRpdGxlXCJcbiAgICAgICAgICAgIGlkPVwidGl0bGUtaW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlIHRpdGxlXCJcbiAgICAgICAgICAgIHJlcXVpcmVkPmAsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwiZGVzYy1pbnB1dFwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+YCxcbiAgICAgICAgICBpbnB1dDogYFxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJub3RlLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBpZD1cImRlc2MtaW5wdXRcIlxuICAgICAgICAgIHdyYXA9XCJzb2Z0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdGUgZGVzY3JpcHRpb25cIlxuICAgICAgICAgIHJlcXVpcmVkPjwvdGV4dGFyZWE+YCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0ZToge1xuICAgICAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cImRhdGUtaW5wdXRcIj5EdWUgZGF0ZTo8L2xhYmVsPmAsXG4gICAgICAgICAgaW5wdXQ6IGA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZHVlLWRhdGVcIiBpZD1cImRhdGUtaW5wdXRcIj5gLCAvLyBpbnB1dCB3aWxsIGJlIGRhdGUgcGlja2VyXG4gICAgICAgIH0sXG4gICAgICAgIGZsYWc6IHtcbiAgICAgICAgICBidXR0b246IGA8bGFiZWwgZm9yPVwiZmxhZy1idXR0b25cIj5GbGFnZ2VkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsYWctYnRuXCI+YCwgLy8gc2hvdWxkIGJlIHN0eWxpemVkIGJ1dHRvbiB0aGF0IGFjdHMgYXMgdG9nZ2xlXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICBidXR0b246IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJidG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYWRkLW5vdGUtYnRuXCI+QWRkIG5vdGUhPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsLWJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICBcbiAgICAgIE9iamVjdC5rZXlzKF9mb3JtQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGtleSA9PT0gJ2ZsYWcnKSB8fFxuICAgICAgICAgIChrZXkgPT09ICdidXR0b25zJykpIHtcbiAgICAgICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmlubmVySFRNTCArPSBfZm9ybUNvbnRlbnRba2V5XS5idXR0b247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2hlYWRlckNvbnRlbnQuZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0ubGFiZWw7XG4gICAgICAgICAgX2hlYWRlckNvbnRlbnQuZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0uaW5wdXQ7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICBcbiAgICAgIE9iamVjdC5rZXlzKF9oZWFkZXJDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoX2hlYWRlckNvbnRlbnRba2V5XSk7XG4gICAgICB9KTtcbiAgICBcbiAgICAgIHJldHVybiBoZWFkZXJXcmFwcGVyO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IF9pbml0QXNpZGUgPSAoKCkgPT4ge1xuICAgICAgbGV0IGFzaWRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgXG4gICAgICBsZXQgX2FzaWRlQ29udGVudCA9IHtcbiAgICAgICAgaG9tZToge1xuICAgICAgICAgIGVsZW1UeXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICBsYWJlbDogJ0hvbWUnLFxuICAgICAgICB9LFxuICAgICAgICBmbGFnZ2VkTm90ZXM6IHtcbiAgICAgICAgICBlbGVtVHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgbGFiZWw6ICdGbGFnZ2VkIE5vdGVzJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvamVjdHM6IHtcbiAgICAgICAgICBlbGVtVHlwZTogJ2RpdicsXG4gICAgICAgICAgbGFiZWw6ICdQcm9qZWN0czonLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIFxuICAgICAgT2JqZWN0LmtleXMoX2FzaWRlQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgX25ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KF9hc2lkZUNvbnRlbnRba2V5XS5lbGVtVHlwZSk7XG4gICAgICAgIF9uZXdFbGVtLmlkID0ga2V5O1xuICAgICAgICBfbmV3RWxlbS50ZXh0Q29udGVudCA9IF9hc2lkZUNvbnRlbnRba2V5XS5sYWJlbDtcbiAgICAgICAgYXNpZGVXcmFwcGVyLmFwcGVuZENoaWxkKF9uZXdFbGVtKTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgcmV0dXJuIGFzaWRlV3JhcHBlcjtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBfaW5pdE1haW4gPSAoKCkgPT4ge1xuICAgICAgbGV0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIFxuICAgICAgcmV0dXJuIG1haW5XcmFwcGVyO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IF9pbml0Rm9vdGVyID0gKCgpID0+IHtcbiAgICAgIGxldCBmb290ZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgXG4gICAgICBsZXQgX2Zvb3RlckNvbnRlbnQgPSB7XG4gICAgICAgIGxpbms6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICAgIH1cbiAgICBcbiAgICAgIF9mb290ZXJDb250ZW50LmxpbmsuaW5uZXJIVE1MID1cbiAgICAgIGDCqSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Jyem9zdG92c2tpXCIgdGFyZ2V0PVwiX2JsYW5rXCI+YnJ6b3N0b3Zza2k8L2E+IDIwMjNgO1xuICAgIFxuICAgICAgT2JqZWN0LmtleXMoX2Zvb3RlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgZm9vdGVyV3JhcHBlci5hcHBlbmRDaGlsZChfZm9vdGVyQ29udGVudFtrZXldKTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgcmV0dXJuIGZvb3RlcldyYXBwZXI7XG4gICAgfSk7XG4gIFxuICAgIGxldCBfcGFnZUhlYWRlciA9IF9pbml0SGVhZGVyKCk7XG4gICAgbGV0IF9wYWdlQXNpZGUgPSBfaW5pdEFzaWRlKCk7XG4gICAgbGV0IF9wYWdlTWFpbiA9IF9pbml0TWFpbigpO1xuICAgIGxldCBfcGFnZUZvb3RlciA9IF9pbml0Rm9vdGVyKCk7XG4gIFxuICAgIGxldCBwYWdlQ29udGVudHMgPSB7XG4gICAgICBoZWFkZXI6IF9wYWdlSGVhZGVyLFxuICAgICAgYXNpZGU6IF9wYWdlQXNpZGUsXG4gICAgICBtYWluOiBfcGFnZU1haW4sXG4gICAgICBmb290ZXI6IF9wYWdlRm9vdGVyLFxuICAgIH07XG4gIFxuICAgIE9iamVjdC5rZXlzKHBhZ2VDb250ZW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgX3BhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnRzW2tleV0pO1xuICAgIH0pO1xuICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF9wYWdlQ29udGFpbmVyKTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2VDb250ZW50cyxcbiAgICB9O1xuICB9KSxcbiAgY2hlY2tGb3JtVmFsaWRpdHk6IChmdW5jdGlvbihmb3JtKSB7XG4gICAgbGV0IGlzRm9ybVZhbGlkID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgaWYgKCFpc0Zvcm1WYWxpZCkge1xuICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTsiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHByb2plY3RCdG5zLFxuICAgIGFsbE5vdGVzLFxuICAgIGZsYWdnZWROb3RlcyxcbiAgICBwcm9qZWN0Tm90ZXMsXG4gIH1cbn0pO1xuXG5jb25zdCBfY3JlYXRlUHJvamVjdEJ0biA9IChmdW5jdGlvbihwcm9qZWN0KSB7XG4gIGxldCBfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIF9idG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcbiAgX2J0bi5pZCA9IHByb2plY3Q7XG4gIF9idG4udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuXG4gIHJldHVybiBfYnRuO1xufSk7XG5cbmNvbnN0IF9jcmVhdGVOb3RlQ2FyZCA9IChmdW5jdGlvbihub3RlKSB7XG4gIGxldCBfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfY2FyZC5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XG5cbiAgT2JqZWN0LmtleXMobm90ZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGxldCBfc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF9zZWN0aW9uLmNsYXNzTGlzdC5hZGQoa2V5KTtcbiAgICBpZiAoa2V5ID09PSAnZmxhZycpIHtcbiAgICAgIChub3RlW2tleV0gPT09IHRydWUpXG4gICAgICA/IChfc2VjdGlvbi50ZXh0Q29udGVudCA9ICfimpEnKVxuICAgICAgOiAoX3NlY3Rpb24udGV4dENvbnRlbnQgPSAn4pqQJylcbiAgICB9IGVsc2Uge1xuICAgICAgX3NlY3Rpb24udGV4dENvbnRlbnQgPSBub3RlW2tleV07XG4gICAgfVxuICAgIF9jYXJkLmFwcGVuZENoaWxkKF9zZWN0aW9uKTtcbiAgfSk7XG5cbiAgcmV0dXJuIF9jYXJkO1xufSk7XG5cbmNvbnN0IHByb2plY3RCdG5zID0gKGZ1bmN0aW9uKHByb2plY3RzQXJyLCBkb21FbGVtZW50KSB7XG4gIHByb2plY3RzQXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlUHJvamVjdEJ0bihwcm9qZWN0KSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGFsbE5vdGVzID0gKGZ1bmN0aW9uKG5vdGVzQXJyLCBkb21FbGVtZW50KSB7XG4gIGlmIChub3Rlc0FyciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIG5vdGVzQXJyLmZvckVhY2gobm90ZSA9PiB7XG4gICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlTm90ZUNhcmQobm90ZSkpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBmbGFnZ2VkTm90ZXMgPSAoZnVuY3Rpb24obm90ZXNBcnIsIGRvbUVsZW1lbnQpIHtcbiAgaWYgKG5vdGVzQXJyID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgbm90ZXNBcnIuZm9yRWFjaChub3RlID0+IHtcbiAgICBpZiAobm90ZS5mbGFnID09PSB0cnVlKSBkb21FbGVtZW50LmFwcGVuZENoaWxkKF9jcmVhdGVOb3RlQ2FyZChub3RlKSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHByb2plY3ROb3RlcyA9IChmdW5jdGlvbihwcm9qZWN0LCBub3Rlc0FyciwgZG9tRWxlbWVudCkge1xuICBpZiAobm90ZXNBcnIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBub3Rlc0Fyci5mb3JFYWNoKG5vdGUgPT4ge1xuICAgIGlmIChub3RlLnByb2plY3QgPT09IHByb2plY3QpIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZU5vdGVDYXJkKG5vdGUpKTtcbiAgfSk7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCBub3RlcyBmcm9tICcuL25vdGVzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuXG4oKCkgPT4ge1xuICBjb25zdCBwYWdlQ29udGVudHMgPSBwYWdlLmluaXQoKS5wYWdlQ29udGVudHM7XG5cbiAgY29uc3Qgc2hvd0Zvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1mb3JtLWJ0bicpO1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBjb25zdCBmbGFnZ2VkTm90ZXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZ2dlZE5vdGVzJyk7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgYWRkTm90ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbm90ZS1idG4nKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1idG4nKTtcblxuICByZW5kZXIoKS5wcm9qZWN0QnRucyhub3Rlcy5wcm9qZWN0cywgcHJvamVjdHNDb250YWluZXIpO1xuICBsZXQgcHJvamVjdFNob3dCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnRuJyk7XG5cbiAgcmVuZGVyKCkuYWxsTm90ZXMobm90ZXMuYXJyLCBwYWdlQ29udGVudHMubWFpbik7XG5cbiAgY29uc3QgYmluZEV2ZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBhZGROb3RlQnRuLm9uY2xpY2sgPSBhZGROb3RlQnRuQWN0aW9uO1xuICAgIHNob3dGb3JtQnRuLm9uY2xpY2sgPSBzaG93Rm9ybUJ0bkFjdGlvbjtcbiAgICBjYW5jZWxCdG4ub25jbGljayA9IGNhbmNlbEJ0bkFjdGlvbjtcbiAgICBob21lQnRuLm9uY2xpY2sgPSBzaG93QWxsTm90ZXM7XG4gICAgZmxhZ2dlZE5vdGVzQnRuLm9uY2xpY2sgPSBzaG93RmxhZ2dlZE5vdGVzO1xuICAgIHByb2plY3RTaG93QnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNob3dQcm9qZWN0Tm90ZXMoYnRuLmlkKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gc2hvd0Zvcm1CdG5BY3Rpb24oKSB7XG4gICAgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHNob3dGb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gYWRkTm90ZUJ0bkFjdGlvbigpIHtcbiAgICBpZiAoIXBhZ2UuY2hlY2tGb3JtVmFsaWRpdHkoZm9ybSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgbm90ZXMuYWRkKCk7XG4gICAgICBwYWdlQ29udGVudHMubWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgIHJlbmRlcigpLmFsbE5vdGVzKG5vdGVzLmFyciwgcGFnZUNvbnRlbnRzLm1haW4pO1xuICAgICAgc2hvd0Zvcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gY2FuY2VsQnRuQWN0aW9uKCkge1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgc2hvd0Zvcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2hvd0FsbE5vdGVzKCkge1xuICAgIHBhZ2VDb250ZW50cy5tYWluLmlubmVySFRNTCA9ICcnO1xuICAgIHJlbmRlcigpLmFsbE5vdGVzKG5vdGVzLmFyciwgcGFnZUNvbnRlbnRzLm1haW4pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNob3dGbGFnZ2VkTm90ZXMoKSB7XG4gICAgcGFnZUNvbnRlbnRzLm1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgcmVuZGVyKCkuZmxhZ2dlZE5vdGVzKG5vdGVzLmFyciwgcGFnZUNvbnRlbnRzLm1haW4pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNob3dQcm9qZWN0Tm90ZXMocHJvamVjdCkge1xuICAgIHBhZ2VDb250ZW50cy5tYWluLmlubmVySFRNTCA9ICcnO1xuICAgIHJlbmRlcigpLnByb2plY3ROb3Rlcyhwcm9qZWN0LCBub3Rlcy5hcnIsIHBhZ2VDb250ZW50cy5tYWluKTtcbiAgfTtcblxuICByZXR1cm47XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==