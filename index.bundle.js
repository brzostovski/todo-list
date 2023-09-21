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
  projects: ['Inbox', 'test', 'TEST_77', '<em>BOLD</em>'],
  add: (function(id) {
    const _Note = (function (project, title, description, dueDate, flag, id) {
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

    function _getNewNoteData() {
      return {
        project: document.getElementById('project-input').value,
        title: document.getElementById('title-input').value,
        desc: document.getElementById('desc-input').value,
        date: document.getElementById('date-input').value,
        flag: document.getElementById('flag-btn').checked,
      };
    };
  
    function _createNote(id) {
      let _project = _getNewNoteData().project;
      let _title = _getNewNoteData().title;
      let _desc = _getNewNoteData().desc;
      let _date = _getNewNoteData().date;
      let _flag = _getNewNoteData().flag;
    
      return (new _Note(_project, _title, _desc, _date, _flag, id));
    };

    let _note = _createNote(id);
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
          input: `<select name="notes-project" id="project-input"></select>`,
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
          input: `<input type="date" name="due-date" id="date-input">`, // input will be date picker
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
    projectsDropdown,
    allNotes,
    flaggedNotes,
    projectNotes,
  }
});

const _createNoteCard = (function(note) {
  let _card = document.createElement('div');
  _card.classList.add('note');
  _card.id = note.id;

  Object.keys(note).forEach(key => {
    if (key === 'id') return;

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
  const _createProjectBtn = (function(project) {
    let _btn = document.createElement('button');
    _btn.classList.add('project-btn');
    _btn.id = project;
    _btn.textContent = project;
  
    return _btn;
  });

  projectsArr.forEach(project => {
    domElement.appendChild(_createProjectBtn(project));
  });
});

const projectsDropdown = (function(projectsArr, input) {
  let _begin = '<select name="notes-project" id="project-input">';
  let _options = '';
  let _end = '</select>';

  projectsArr.forEach(project => {
    _options += (`<option value="${project}">${project}</option>`);
  });

  input.innerHTML = _begin + _options + _end;
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
/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes */ "./src/notes.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");






(() => {
  const pageContents = _page__WEBPACK_IMPORTED_MODULE_1__["default"].init().pageContents;

  const showFormBtn = document.getElementById('show-form-btn');

  const homeBtn = document.getElementById('home');
  const flaggedNotesBtn = document.getElementById('flaggedNotes');
  const projectsContainer = document.getElementById('projects');

  const form = document.querySelector('form');
  const dropdown = document.getElementById('project-input');
  const addNoteBtn = document.getElementById('add-note-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().projectsDropdown(_notes__WEBPACK_IMPORTED_MODULE_2__["default"].projects, dropdown);
  (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().projectBtns(_notes__WEBPACK_IMPORTED_MODULE_2__["default"].projects, projectsContainer);
  let projectShowBtns = document.querySelectorAll('.project-btn');

  (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])().allNotes(_notes__WEBPACK_IMPORTED_MODULE_2__["default"].arr, pageContents.main);

  const bindEvents = (function() {
    showFormBtn.onclick = showFormBtnAction;
    addNoteBtn.onclick = addNoteBtnAction;
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
      _notes__WEBPACK_IMPORTED_MODULE_2__["default"].add((0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLFFBQVEsT0FBTyxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGNBQWMsY0FBYyxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFdBQVcsVUFBVSxZQUFZLGNBQWMsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsY0FBYyxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxhQUFhLFlBQVksYUFBYSxZQUFZLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxjQUFjLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxnQ0FBZ0MsNkNBQTZDLHFDQUFxQyw0Q0FBNEMsdUNBQXVDLDZDQUE2QywrQkFBK0Isc0NBQXNDLDZDQUE2QyxpQ0FBaUMsOENBQThDLHdCQUF3Qix5QkFBeUIsK0JBQStCLCtCQUErQiw0QkFBNEIsOEJBQThCLGtDQUFrQyxtQ0FBbUMsNEJBQTRCLDJCQUEyQiwyRUFBMkUsMERBQTBELEdBQUcsT0FBTywyQkFBMkIsZUFBZSxjQUFjLG9DQUFvQywyQ0FBMkMsR0FBRyx5QkFBeUIsc0JBQXNCLEdBQUcscUJBQXFCLHVLQUF1SyxxQkFBcUIsb0JBQW9CLDRDQUE0QyxxRkFBcUYsR0FBRyxxQkFBcUIsaUNBQWlDLCtDQUErQyxHQUFHLHlCQUF5Qiw2Q0FBNkMsR0FBRyxZQUFZLHNCQUFzQixvQkFBb0IsbUNBQW1DLHdCQUF3QiwwQkFBMEIsd0JBQXdCLEdBQUcsbUJBQW1CLHFCQUFxQixtQ0FBbUMsMkNBQTJDLHVDQUF1Qyx5QkFBeUIsaUVBQWlFLGlFQUFpRSwrQ0FBK0MsbUNBQW1DLDRDQUE0Qyw0Q0FBNEMsb0RBQW9ELG9CQUFvQiwyQkFBMkIsR0FBRyxXQUFXLGtDQUFrQyxHQUFHLHNCQUFzQixnQ0FBZ0MsNkNBQTZDLGdEQUFnRCxtQkFBbUIsbUJBQW1CLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLG9CQUFvQixrQ0FBa0Msb0JBQW9CLDRCQUE0Qix3QkFBd0IsR0FBRyxtQ0FBbUMsZUFBZSxzQkFBc0Isa0NBQWtDLHNCQUFzQiw0Q0FBNEMsa0NBQWtDLHVDQUF1Qyw2Q0FBNkMsMkRBQTJELEdBQUcsa0JBQWtCLGdCQUFnQixHQUFHLG1CQUFtQixhQUFhLGtDQUFrQyxHQUFHLHFCQUFxQixxQkFBcUIsR0FBRyw2QkFBNkIsa0NBQWtDLHFDQUFxQyxvQkFBb0IsNEJBQTRCLHdCQUF3QixxQ0FBcUMsaUNBQWlDLEdBQUcsV0FBVyxxQkFBcUIsNENBQTRDLG9CQUFvQiwyQkFBMkIsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsR0FBRyxVQUFVLG9CQUFvQix1QkFBdUIsY0FBYyxtQ0FBbUMscUJBQXFCLG9CQUFvQiwyQkFBMkIsa0JBQWtCLEdBQUcsZUFBZSwrQkFBK0Isa0NBQWtDLEdBQUcsV0FBVyxxQkFBcUIscUJBQXFCLDZDQUE2QyxxQ0FBcUMsK0NBQStDLEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLDBCQUEwQix1QkFBdUIsR0FBRyxZQUFZLHNCQUFzQixvQkFBb0IsNEJBQTRCLHdCQUF3QixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsbUJBQW1CO0FBQ2pvTTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3hQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7OztBQy9DcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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SUFBSSxtREFBTSxnQkFBZ0IsOENBQUs7QUFDL0I7O0FBRUE7QUFDQTtBQUNBLElBQUksbURBQU0seUJBQXlCLDhDQUFLO0FBQ3hDOztBQUVBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLyogQ09MT1JTICovXG4gIC0tbWFpbi1mb250LWNvbG9yOiB3aGl0ZTtcbiAgLS1tYWluLWJnLWNvbG9yOiByZ2IoNjksIDY5LCA2OSk7XG4gIC0tbWFpbi1zaGFkb3ctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLS1iYW5uZXItYmctY29sb3I6IHJnYigyNiwgMjYsIDI2KTtcbiAgLS1ub3RlLWJnLWNvbG9yOiByZ2JhKDMwLCAxNDQsIDI1NSwgMC4yKTtcbiAgLS1hY2NlbnQtY29sb3I6IGRvZGdlcmJsdWU7XG4gIC0tYmctY2xpY2stY29sb3I6IGJyaWdodG5lc3MoMC43KTtcbiAgLS1wb3AtdXAtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgLS1iYWNrZ3JvdW5kLWJsdXI6IGJsdXIoN3B4KTtcblxuICAvKiBESU1FTlNJT05TICovXG4gIC0tbWFpbi1tYXJnaW46IDIwcHg7XG4gIC0tbm90ZS1tYXJnaW46IDEwcHg7XG4gIC0tbWFpbi1wYWRkaW5nOiAxMHB4O1xuICAtLW1haW4tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1pbnB1dC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC0tYnRuLXBhZGRpbmc6IDVweCAxMHB4O1xuICAtLWZvcm0tYnRuLW1hcmdpbjogMCAxMHB4O1xuICAtLWZvcm0tY29udGFpbmVyLXdpZHRoOiA0MDBweDtcbiAgLS1mb3JtLWNvbnRhaW5lci1oZWlnaHQ6IDMwMHB4O1xuICAtLWZvcm0tYnRuLWhlaWdodDogMjRweDtcbiAgLS1mb3JtLWJ0bi13aWR0aDogNzBweDtcblxuICAvKiBQUk9QRVJUSUVTICovXG4gIC0tbWFpbi1zaGFkb3c6IDAgMCAxNnB4IHZhcigtLW1haW4tc2hhZG93LWNvbG9yKTtcblxuICAvKiBEVVJBVElPTlMgKi9cbiAgLS1tYWluLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5cbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xufVxuXG4jcGFnZS1jb250YWluZXIgPiAqIHtcbiAgbWF4LXdpZHRoOiAxMDBkdnc7XG59XG5cbiNwYWdlLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmXG4gIDtcblxuICBoZWlnaHQ6IDEwMGR2aDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgMTBmciAxZnIgLyAyMDBweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ2hlYWRlciBoZWFkZXInXG4gICAgJ2FzaWRlIG1haW4nXG4gICAgJ2Zvb3RlciBmb290ZXInO1xufVxuXG5oZWFkZXIsXG5mb290ZXIge1xuICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhbm5lci1iZy1jb2xvcik7XG59XG5cbmhlYWRlciAqLFxuZm9vdGVyICoge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xufVxuXG5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuaGVhZGVyID4gZm9ybSB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG5cbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcblxuICBoZWlnaHQ6IHZhcigtLWZvcm0tY29udGFpbmVyLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1mb3JtLWNvbnRhaW5lci13aWR0aCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoKDEwMGR2aCAvIDIpIC0gKHZhcigtLWZvcm0tY29udGFpbmVyLWhlaWdodCkgLyAyKSk7XG4gIGxlZnQ6IGNhbGMoKDEwMGR2dyAvIDIpIC0gKHZhcigtLWZvcm0tY29udGFpbmVyLXdpZHRoKSAvIDIpKTtcblxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1tYWluLXNoYWRvdyk7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXVwLWNvbG9yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1iYWNrZ3JvdW5kLWJsdXIpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmFja2dyb3VuZC1ibHVyKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWlucHV0LWJvcmRlci1yYWRpdXMpO1xuXG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiNkZXNjLWlucHV0IHtcbiAgaGVpZ2h0OiAxMHJlbTtcbn1cblxuI2J0bi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyID4gYnV0dG9uLFxuZm9ybSBidXR0b24ge1xuICBhbGw6IHVuc2V0O1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWJhbm5lci1iZy1jb2xvcik7XG4gIGZvbnQtc2l6ZTogbm9ybWFsO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG5cbiAgcGFkZGluZzogdmFyKC0tYnRuLXBhZGRpbmcpO1xuICBib3JkZXI6IG91dHNldCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xuXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLW1haW4tdHJhbnNpdGlvbi1kdXJhdGlvbik7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIHNjYWxlOiAxLjA1O1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgc2NhbGU6IDE7XG4gIGZpbHRlcjogdmFyKC0tYmctY2xpY2stY29sb3IpO1xufVxuXG5oZWFkZXIgPiBidXR0b24ge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4jYnRuLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xuXG4gIG1hcmdpbjogdmFyKC0tZm9ybS1idG4tbWFyZ2luKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBoZWlnaHQ6IHZhcigtLWZvcm0tYnRuLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1mb3JtLWJ0bi13aWR0aCk7XG59XG5cbmFzaWRlIHtcbiAgZ3JpZC1hcmVhOiBhc2lkZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNwcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG5cbiAgbWF4LXdpZHRoOiA4MDBweDtcblxuICBmbGV4OiAxO1xuXG4gIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XG5cbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gIGdhcDogMTBweDtcbn1cblxuLm5vdGUgPiAqIHtcbiAgbWFyZ2luOiB2YXIoLS1ub3RlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubm90ZSB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90ZS1iZy1jb2xvcik7XG5cbiAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1zaGFkb3cpO1xuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5ub3RlID4gLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ub3RlID4gLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5mb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJB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Q29udGVudFwiOltcIjpyb290IHtcXG4gIC8qIENPTE9SUyAqL1xcbiAgLS1tYWluLWZvbnQtY29sb3I6IHdoaXRlO1xcbiAgLS1tYWluLWJnLWNvbG9yOiByZ2IoNjksIDY5LCA2OSk7XFxuICAtLW1haW4tc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAtLWJhbm5lci1iZy1jb2xvcjogcmdiKDI2LCAyNiwgMjYpO1xcbiAgLS1ub3RlLWJnLWNvbG9yOiByZ2JhKDMwLCAxNDQsIDI1NSwgMC4yKTtcXG4gIC0tYWNjZW50LWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgLS1iZy1jbGljay1jb2xvcjogYnJpZ2h0bmVzcygwLjcpO1xcbiAgLS1wb3AtdXAtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIC0tYmFja2dyb3VuZC1ibHVyOiBibHVyKDdweCk7XFxuXFxuICAvKiBESU1FTlNJT05TICovXFxuICAtLW1haW4tbWFyZ2luOiAyMHB4O1xcbiAgLS1ub3RlLW1hcmdpbjogMTBweDtcXG4gIC0tbWFpbi1wYWRkaW5nOiAxMHB4O1xcbiAgLS1tYWluLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtLWlucHV0LWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC0tYnRuLXBhZGRpbmc6IDVweCAxMHB4O1xcbiAgLS1mb3JtLWJ0bi1tYXJnaW46IDAgMTBweDtcXG4gIC0tZm9ybS1jb250YWluZXItd2lkdGg6IDQwMHB4O1xcbiAgLS1mb3JtLWNvbnRhaW5lci1oZWlnaHQ6IDMwMHB4O1xcbiAgLS1mb3JtLWJ0bi1oZWlnaHQ6IDI0cHg7XFxuICAtLWZvcm0tYnRuLXdpZHRoOiA3MHB4O1xcblxcbiAgLyogUFJPUEVSVElFUyAqL1xcbiAgLS1tYWluLXNoYWRvdzogMCAwIDE2cHggdmFyKC0tbWFpbi1zaGFkb3ctY29sb3IpO1xcblxcbiAgLyogRFVSQVRJT05TICovXFxuICAtLW1haW4tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbiNwYWdlLWNvbnRhaW5lciA+ICoge1xcbiAgbWF4LXdpZHRoOiAxMDBkdnc7XFxufVxcblxcbiNwYWdlLWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWZcXG4gIDtcXG5cXG4gIGhlaWdodDogMTAwZHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxMGZyIDFmciAvIDIwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyJ1xcbiAgICAnYXNpZGUgbWFpbidcXG4gICAgJ2Zvb3RlciBmb290ZXInO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgKixcXG5mb290ZXIgKiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5oZWFkZXIgPiBmb3JtIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuXFxuICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZGRpbmcpO1xcblxcbiAgaGVpZ2h0OiB2YXIoLS1mb3JtLWNvbnRhaW5lci1oZWlnaHQpO1xcbiAgd2lkdGg6IHZhcigtLWZvcm0tY29udGFpbmVyLXdpZHRoKTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYygoMTAwZHZoIC8gMikgLSAodmFyKC0tZm9ybS1jb250YWluZXItaGVpZ2h0KSAvIDIpKTtcXG4gIGxlZnQ6IGNhbGMoKDEwMGR2dyAvIDIpIC0gKHZhcigtLWZvcm0tY29udGFpbmVyLXdpZHRoKSAvIDIpKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1tYWluLXNoYWRvdyk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtdXAtY29sb3IpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1iYWNrZ3JvdW5kLWJsdXIpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJhY2tncm91bmQtYmx1cik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbnB1dC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jZGVzYy1pbnB1dCB7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbn1cXG5cXG4jYnRuLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciA+IGJ1dHRvbixcXG5mb3JtIGJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLWJhbm5lci1iZy1jb2xvcik7XFxuICBmb250LXNpemU6IG5vcm1hbDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuXFxuICBwYWRkaW5nOiB2YXIoLS1idG4tcGFkZGluZyk7XFxuICBib3JkZXI6IG91dHNldCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLW1haW4tdHJhbnNpdGlvbi1kdXJhdGlvbik7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBzY2FsZTogMS4wNTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG4gIGZpbHRlcjogdmFyKC0tYmctY2xpY2stY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgPiBidXR0b24ge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuI2J0bi1jb250YWluZXIgPiBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuXFxuICBtYXJnaW46IHZhcigtLWZvcm0tYnRuLW1hcmdpbik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiB2YXIoLS1mb3JtLWJ0bi1oZWlnaHQpO1xcbiAgd2lkdGg6IHZhcigtLWZvcm0tYnRuLXdpZHRoKTtcXG59XFxuXFxuYXNpZGUge1xcbiAgZ3JpZC1hcmVhOiBhc2lkZTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG5cXG4gIG1heC13aWR0aDogODAwcHg7XFxuXFxuICBmbGV4OiAxO1xcblxcbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG5cXG4gIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm5vdGUgPiAqIHtcXG4gIG1hcmdpbjogdmFyKC0tbm90ZS1tYXJnaW4pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5ub3RlIHtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90ZS1iZy1jb2xvcik7XFxuXFxuICBib3gtc2hhZG93OiB2YXIoLS1tYWluLXNoYWRvdyk7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubm90ZSA+IC50aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5vdGUgPiAuZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBub3RlcyA9IHtcbiAgYXJyOiBbXSxcbiAgcHJvamVjdHM6IFsnSW5ib3gnLCAndGVzdCcsICdURVNUXzc3JywgJzxlbT5CT0xEPC9lbT4nXSxcbiAgYWRkOiAoZnVuY3Rpb24oaWQpIHtcbiAgICBjb25zdCBfTm90ZSA9IChmdW5jdGlvbiAocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBmbGFnLCBpZCkge1xuICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICB0aGlzLmZsYWcgPSBmbGFnO1xuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBmbGFnLFxuICAgICAgICBpZCxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIF9nZXROZXdOb3RlRGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0JykudmFsdWUsXG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5wdXQnKS52YWx1ZSxcbiAgICAgICAgZGVzYzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MtaW5wdXQnKS52YWx1ZSxcbiAgICAgICAgZGF0ZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtaW5wdXQnKS52YWx1ZSxcbiAgICAgICAgZmxhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWctYnRuJykuY2hlY2tlZCxcbiAgICAgIH07XG4gICAgfTtcbiAgXG4gICAgZnVuY3Rpb24gX2NyZWF0ZU5vdGUoaWQpIHtcbiAgICAgIGxldCBfcHJvamVjdCA9IF9nZXROZXdOb3RlRGF0YSgpLnByb2plY3Q7XG4gICAgICBsZXQgX3RpdGxlID0gX2dldE5ld05vdGVEYXRhKCkudGl0bGU7XG4gICAgICBsZXQgX2Rlc2MgPSBfZ2V0TmV3Tm90ZURhdGEoKS5kZXNjO1xuICAgICAgbGV0IF9kYXRlID0gX2dldE5ld05vdGVEYXRhKCkuZGF0ZTtcbiAgICAgIGxldCBfZmxhZyA9IF9nZXROZXdOb3RlRGF0YSgpLmZsYWc7XG4gICAgXG4gICAgICByZXR1cm4gKG5ldyBfTm90ZShfcHJvamVjdCwgX3RpdGxlLCBfZGVzYywgX2RhdGUsIF9mbGFnLCBpZCkpO1xuICAgIH07XG5cbiAgICBsZXQgX25vdGUgPSBfY3JlYXRlTm90ZShpZCk7XG4gICAgbm90ZXMuYXJyLnB1c2goX25vdGUpO1xuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdGVzOyIsImNvbnN0IHBhZ2UgPSB7XG4gIGluaXQ6ICgoKSA9PiB7XG4gICAgbGV0IF9wYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3BhZ2VDb250YWluZXIuaWQgPSAncGFnZS1jb250YWluZXInO1xuICBcbiAgICBjb25zdCBfaW5pdEhlYWRlciA9ICgoKSA9PiB7XG4gICAgICBsZXQgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIFxuICAgICAgbGV0IF9oZWFkZXJDb250ZW50ID0ge1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgICBmb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyksXG4gICAgICAgIHNob3dGb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcbiAgICAgIH1cbiAgICBcbiAgICAgIF9oZWFkZXJDb250ZW50LnRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6IFRvZG8gTGlzdCc7XG4gICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgX2hlYWRlckNvbnRlbnQuc2hvd0Zvcm0udGV4dENvbnRlbnQgPSAnTmV3IG5vdGUnO1xuICAgICAgX2hlYWRlckNvbnRlbnQuc2hvd0Zvcm0uaWQgPSAnc2hvdy1mb3JtLWJ0bic7XG4gICAgXG4gICAgICBsZXQgX2Zvcm1Db250ZW50ID0ge1xuICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwicHJvamVjdC1pbnB1dFwiPlByb2plY3Q6PC9sYWJlbD5gLFxuICAgICAgICAgIGlucHV0OiBgPHNlbGVjdCBuYW1lPVwibm90ZXMtcHJvamVjdFwiIGlkPVwicHJvamVjdC1pbnB1dFwiPjwvc2VsZWN0PmAsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwidGl0bGUtaW5wdXRcIj5UaXRsZTo8L2xhYmVsPmAsXG4gICAgICAgICAgaW5wdXQ6IGBcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cIm5vdGUtdGl0bGVcIlxuICAgICAgICAgICAgaWQ9XCJ0aXRsZS1pbnB1dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdGUgdGl0bGVcIlxuICAgICAgICAgICAgcmVxdWlyZWQ+YCxcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJkZXNjLWlucHV0XCI+RGVzY3JpcHRpb246PC9sYWJlbD5gLFxuICAgICAgICAgIGlucHV0OiBgXG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cIm5vdGUtZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGlkPVwiZGVzYy1pbnB1dFwiXG4gICAgICAgICAgd3JhcD1cInNvZnRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm90ZSBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgcmVxdWlyZWQ+PC90ZXh0YXJlYT5gLFxuICAgICAgICB9LFxuICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwiZGF0ZS1pbnB1dFwiPkR1ZSBkYXRlOjwvbGFiZWw+YCxcbiAgICAgICAgICBpbnB1dDogYDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiIGlkPVwiZGF0ZS1pbnB1dFwiPmAsIC8vIGlucHV0IHdpbGwgYmUgZGF0ZSBwaWNrZXJcbiAgICAgICAgfSxcbiAgICAgICAgZmxhZzoge1xuICAgICAgICAgIGJ1dHRvbjogYDxsYWJlbCBmb3I9XCJmbGFnLWJ1dHRvblwiPkZsYWdnZWQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiZmxhZy1idG5cIj5gLCAvLyBzaG91bGQgYmUgc3R5bGl6ZWQgYnV0dG9uIHRoYXQgYWN0cyBhcyB0b2dnbGVcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgIGJ1dHRvbjogYFxuICAgICAgICAgICAgPGRpdiBpZD1cImJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhZGQtbm90ZS1idG5cIj5BZGQgbm90ZSE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWwtYnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIFxuICAgICAgT2JqZWN0LmtleXMoX2Zvcm1Db250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoa2V5ID09PSAnZmxhZycpIHx8XG4gICAgICAgICAgKGtleSA9PT0gJ2J1dHRvbnMnKSkge1xuICAgICAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uaW5uZXJIVE1MICs9IF9mb3JtQ29udGVudFtrZXldLmJ1dHRvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmlubmVySFRNTCArPSBfZm9ybUNvbnRlbnRba2V5XS5sYWJlbDtcbiAgICAgICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmlubmVySFRNTCArPSBfZm9ybUNvbnRlbnRba2V5XS5pbnB1dDtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgT2JqZWN0LmtleXMoX2hlYWRlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaGVhZGVyV3JhcHBlci5hcHBlbmRDaGlsZChfaGVhZGVyQ29udGVudFtrZXldKTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgcmV0dXJuIGhlYWRlcldyYXBwZXI7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgX2luaXRBc2lkZSA9ICgoKSA9PiB7XG4gICAgICBsZXQgYXNpZGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgICBcbiAgICAgIGxldCBfYXNpZGVDb250ZW50ID0ge1xuICAgICAgICBob21lOiB7XG4gICAgICAgICAgZWxlbVR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIGxhYmVsOiAnSG9tZScsXG4gICAgICAgIH0sXG4gICAgICAgIGZsYWdnZWROb3Rlczoge1xuICAgICAgICAgIGVsZW1UeXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICBsYWJlbDogJ0ZsYWdnZWQgTm90ZXMnLFxuICAgICAgICB9LFxuICAgICAgICBwcm9qZWN0czoge1xuICAgICAgICAgIGVsZW1UeXBlOiAnZGl2JyxcbiAgICAgICAgICBsYWJlbDogJ1Byb2plY3RzOicsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgXG4gICAgICBPYmplY3Qua2V5cyhfYXNpZGVDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBfbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoX2FzaWRlQ29udGVudFtrZXldLmVsZW1UeXBlKTtcbiAgICAgICAgX25ld0VsZW0uaWQgPSBrZXk7XG4gICAgICAgIF9uZXdFbGVtLnRleHRDb250ZW50ID0gX2FzaWRlQ29udGVudFtrZXldLmxhYmVsO1xuICAgICAgICBhc2lkZVdyYXBwZXIuYXBwZW5kQ2hpbGQoX25ld0VsZW0pO1xuICAgICAgfSk7XG4gICAgXG4gICAgICByZXR1cm4gYXNpZGVXcmFwcGVyO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IF9pbml0TWFpbiA9ICgoKSA9PiB7XG4gICAgICBsZXQgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgXG4gICAgICByZXR1cm4gbWFpbldyYXBwZXI7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgX2luaXRGb290ZXIgPSAoKCkgPT4ge1xuICAgICAgbGV0IGZvb3RlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBcbiAgICAgIGxldCBfZm9vdGVyQ29udGVudCA9IHtcbiAgICAgICAgbGluazogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgfVxuICAgIFxuICAgICAgX2Zvb3RlckNvbnRlbnQubGluay5pbm5lckhUTUwgPVxuICAgICAgYMKpIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJ6b3N0b3Zza2lcIiB0YXJnZXQ9XCJfYmxhbmtcIj5icnpvc3RvdnNraTwvYT4gMjAyM2A7XG4gICAgXG4gICAgICBPYmplY3Qua2V5cyhfZm9vdGVyQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBmb290ZXJXcmFwcGVyLmFwcGVuZENoaWxkKF9mb290ZXJDb250ZW50W2tleV0pO1xuICAgICAgfSk7XG4gICAgXG4gICAgICByZXR1cm4gZm9vdGVyV3JhcHBlcjtcbiAgICB9KTtcbiAgXG4gICAgbGV0IF9wYWdlSGVhZGVyID0gX2luaXRIZWFkZXIoKTtcbiAgICBsZXQgX3BhZ2VBc2lkZSA9IF9pbml0QXNpZGUoKTtcbiAgICBsZXQgX3BhZ2VNYWluID0gX2luaXRNYWluKCk7XG4gICAgbGV0IF9wYWdlRm9vdGVyID0gX2luaXRGb290ZXIoKTtcbiAgXG4gICAgbGV0IHBhZ2VDb250ZW50cyA9IHtcbiAgICAgIGhlYWRlcjogX3BhZ2VIZWFkZXIsXG4gICAgICBhc2lkZTogX3BhZ2VBc2lkZSxcbiAgICAgIG1haW46IF9wYWdlTWFpbixcbiAgICAgIGZvb3RlcjogX3BhZ2VGb290ZXIsXG4gICAgfTtcbiAgXG4gICAgT2JqZWN0LmtleXMocGFnZUNvbnRlbnRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBfcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlQ29udGVudHNba2V5XSk7XG4gICAgfSk7XG4gIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoX3BhZ2VDb250YWluZXIpO1xuICBcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZUNvbnRlbnRzLFxuICAgIH07XG4gIH0pLFxuICBjaGVja0Zvcm1WYWxpZGl0eTogKGZ1bmN0aW9uKGZvcm0pIHtcbiAgICBsZXQgaXNGb3JtVmFsaWQgPSBmb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICBpZiAoIWlzRm9ybVZhbGlkKSB7XG4gICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlOyIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvamVjdEJ0bnMsXG4gICAgcHJvamVjdHNEcm9wZG93bixcbiAgICBhbGxOb3RlcyxcbiAgICBmbGFnZ2VkTm90ZXMsXG4gICAgcHJvamVjdE5vdGVzLFxuICB9XG59KTtcblxuY29uc3QgX2NyZWF0ZU5vdGVDYXJkID0gKGZ1bmN0aW9uKG5vdGUpIHtcbiAgbGV0IF9jYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9jYXJkLmNsYXNzTGlzdC5hZGQoJ25vdGUnKTtcbiAgX2NhcmQuaWQgPSBub3RlLmlkO1xuXG4gIE9iamVjdC5rZXlzKG5vdGUpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoa2V5ID09PSAnaWQnKSByZXR1cm47XG5cbiAgICBsZXQgX3NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGtleSk7XG5cbiAgICBpZiAoa2V5ID09PSAnZmxhZycpIHtcbiAgICAgIChub3RlW2tleV0gPT09IHRydWUpXG4gICAgICA/IChfc2VjdGlvbi50ZXh0Q29udGVudCA9ICfimpEnKVxuICAgICAgOiAoX3NlY3Rpb24udGV4dENvbnRlbnQgPSAn4pqQJylcbiAgICB9IGVsc2Uge1xuICAgICAgX3NlY3Rpb24udGV4dENvbnRlbnQgPSBub3RlW2tleV07XG4gICAgfVxuICAgIF9jYXJkLmFwcGVuZENoaWxkKF9zZWN0aW9uKTtcbiAgfSk7XG5cbiAgcmV0dXJuIF9jYXJkO1xufSk7XG5cbmNvbnN0IHByb2plY3RCdG5zID0gKGZ1bmN0aW9uKHByb2plY3RzQXJyLCBkb21FbGVtZW50KSB7XG4gIGNvbnN0IF9jcmVhdGVQcm9qZWN0QnRuID0gKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBsZXQgX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIF9idG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcbiAgICBfYnRuLmlkID0gcHJvamVjdDtcbiAgICBfYnRuLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgXG4gICAgcmV0dXJuIF9idG47XG4gIH0pO1xuXG4gIHByb2plY3RzQXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlUHJvamVjdEJ0bihwcm9qZWN0KSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHByb2plY3RzRHJvcGRvd24gPSAoZnVuY3Rpb24ocHJvamVjdHNBcnIsIGlucHV0KSB7XG4gIGxldCBfYmVnaW4gPSAnPHNlbGVjdCBuYW1lPVwibm90ZXMtcHJvamVjdFwiIGlkPVwicHJvamVjdC1pbnB1dFwiPic7XG4gIGxldCBfb3B0aW9ucyA9ICcnO1xuICBsZXQgX2VuZCA9ICc8L3NlbGVjdD4nO1xuXG4gIHByb2plY3RzQXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgX29wdGlvbnMgKz0gKGA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qZWN0fVwiPiR7cHJvamVjdH08L29wdGlvbj5gKTtcbiAgfSk7XG5cbiAgaW5wdXQuaW5uZXJIVE1MID0gX2JlZ2luICsgX29wdGlvbnMgKyBfZW5kO1xufSk7XG5cbmNvbnN0IGFsbE5vdGVzID0gKGZ1bmN0aW9uKG5vdGVzQXJyLCBkb21FbGVtZW50KSB7XG4gIGlmIChub3Rlc0FyciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIG5vdGVzQXJyLmZvckVhY2gobm90ZSA9PiB7XG4gICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlTm90ZUNhcmQobm90ZSkpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBmbGFnZ2VkTm90ZXMgPSAoZnVuY3Rpb24obm90ZXNBcnIsIGRvbUVsZW1lbnQpIHtcbiAgaWYgKG5vdGVzQXJyID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgbm90ZXNBcnIuZm9yRWFjaChub3RlID0+IHtcbiAgICBpZiAobm90ZS5mbGFnID09PSB0cnVlKSBkb21FbGVtZW50LmFwcGVuZENoaWxkKF9jcmVhdGVOb3RlQ2FyZChub3RlKSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHByb2plY3ROb3RlcyA9IChmdW5jdGlvbihwcm9qZWN0LCBub3Rlc0FyciwgZG9tRWxlbWVudCkge1xuICBpZiAobm90ZXNBcnIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBub3Rlc0Fyci5mb3JFYWNoKG5vdGUgPT4ge1xuICAgIGlmIChub3RlLnByb2plY3QgPT09IHByb2plY3QpIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZU5vdGVDYXJkKG5vdGUpKTtcbiAgfSk7XG59KTsiLCJpbXBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xubGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxubGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PlxuICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKS5yZWR1Y2UoKGlkLCBieXRlKSA9PiB7XG4gICAgYnl0ZSAmPSA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlID4gNjIpIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9XG4gICAgcmV0dXJuIGlkXG4gIH0sICcnKVxuZXhwb3J0IHsgbmFub2lkLCBjdXN0b21BbHBoYWJldCwgY3VzdG9tUmFuZG9tLCB1cmxBbHBoYWJldCwgcmFuZG9tIH1cbiIsImxldCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuZXhwb3J0IHsgdXJsQWxwaGFiZXQgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgbm90ZXMgZnJvbSAnLi9ub3Rlcyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XG5cbigoKSA9PiB7XG4gIGNvbnN0IHBhZ2VDb250ZW50cyA9IHBhZ2UuaW5pdCgpLnBhZ2VDb250ZW50cztcblxuICBjb25zdCBzaG93Rm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LWZvcm0tYnRuJyk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gIGNvbnN0IGZsYWdnZWROb3Rlc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFnZ2VkTm90ZXMnKTtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0Jyk7XG4gIGNvbnN0IGFkZE5vdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5vdGUtYnRuJyk7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtYnRuJyk7XG5cbiAgcmVuZGVyKCkucHJvamVjdHNEcm9wZG93bihub3Rlcy5wcm9qZWN0cywgZHJvcGRvd24pO1xuICByZW5kZXIoKS5wcm9qZWN0QnRucyhub3Rlcy5wcm9qZWN0cywgcHJvamVjdHNDb250YWluZXIpO1xuICBsZXQgcHJvamVjdFNob3dCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnRuJyk7XG5cbiAgcmVuZGVyKCkuYWxsTm90ZXMobm90ZXMuYXJyLCBwYWdlQ29udGVudHMubWFpbik7XG5cbiAgY29uc3QgYmluZEV2ZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBzaG93Rm9ybUJ0bi5vbmNsaWNrID0gc2hvd0Zvcm1CdG5BY3Rpb247XG4gICAgYWRkTm90ZUJ0bi5vbmNsaWNrID0gYWRkTm90ZUJ0bkFjdGlvbjtcbiAgICBjYW5jZWxCdG4ub25jbGljayA9IGNhbmNlbEJ0bkFjdGlvbjtcbiAgICBob21lQnRuLm9uY2xpY2sgPSBzaG93QWxsTm90ZXM7XG4gICAgZmxhZ2dlZE5vdGVzQnRuLm9uY2xpY2sgPSBzaG93RmxhZ2dlZE5vdGVzO1xuICAgIHByb2plY3RTaG93QnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNob3dQcm9qZWN0Tm90ZXMoYnRuLmlkKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gc2hvd0Zvcm1CdG5BY3Rpb24oKSB7XG4gICAgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHNob3dGb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gYWRkTm90ZUJ0bkFjdGlvbigpIHtcbiAgICBpZiAoIXBhZ2UuY2hlY2tGb3JtVmFsaWRpdHkoZm9ybSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgbm90ZXMuYWRkKG5hbm9pZCgpKTtcbiAgICAgIHBhZ2VDb250ZW50cy5tYWluLmlubmVySFRNTCA9ICcnO1xuICAgICAgcmVuZGVyKCkuYWxsTm90ZXMobm90ZXMuYXJyLCBwYWdlQ29udGVudHMubWFpbik7XG4gICAgICBzaG93Rm9ybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBjYW5jZWxCdG5BY3Rpb24oKSB7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBzaG93Rm9ybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfTtcblxuICBmdW5jdGlvbiBzaG93QWxsTm90ZXMoKSB7XG4gICAgcGFnZUNvbnRlbnRzLm1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgcmVuZGVyKCkuYWxsTm90ZXMobm90ZXMuYXJyLCBwYWdlQ29udGVudHMubWFpbik7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2hvd0ZsYWdnZWROb3RlcygpIHtcbiAgICBwYWdlQ29udGVudHMubWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICByZW5kZXIoKS5mbGFnZ2VkTm90ZXMobm90ZXMuYXJyLCBwYWdlQ29udGVudHMubWFpbik7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2hvd1Byb2plY3ROb3Rlcyhwcm9qZWN0KSB7XG4gICAgcGFnZUNvbnRlbnRzLm1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgcmVuZGVyKCkucHJvamVjdE5vdGVzKHByb2plY3QsIG5vdGVzLmFyciwgcGFnZUNvbnRlbnRzLm1haW4pO1xuICB9O1xuXG4gIHJldHVybjtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9