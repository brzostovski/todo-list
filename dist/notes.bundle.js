/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function notes() {
  let projects = [];

  let Project = (function (name, ...notes) {
    this.name = name;
    this.notes = notes;
  
    return {
      name,
      notes,
    }
  });

  let inbox = new Project('Inbox');
  
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
  
  let defaultNote = new Note(
    'Example Note',
    'This is an example note! And this is just more and more text to see how the notes are being displayed after styling them a bit.',
    '12.12.2024',
    false
  );

  let shortNote = new Note('Short Note', 'This note is shorter!', '', true);

  for(let i = 0; i < 20; i++){inbox.notes.push(defaultNote);};
  inbox.notes[2] = shortNote;
  projects.push(inbox);

  return {projects};
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsaUVBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLFFBQVEsS0FBSztBQUM5QjtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbm90ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gbm90ZXMoKSB7XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gIGxldCBQcm9qZWN0ID0gKGZ1bmN0aW9uIChuYW1lLCAuLi5ub3Rlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICBcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIG5vdGVzLFxuICAgIH1cbiAgfSk7XG5cbiAgbGV0IGluYm94ID0gbmV3IFByb2plY3QoJ0luYm94Jyk7XG4gIFxuICBsZXQgTm90ZSA9IChmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBmbGFnKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuZmxhZyA9IGZsYWc7XG4gIFxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIGZsYWcsXG4gICAgfVxuICB9KTtcbiAgXG4gIGxldCBkZWZhdWx0Tm90ZSA9IG5ldyBOb3RlKFxuICAgICdFeGFtcGxlIE5vdGUnLFxuICAgICdUaGlzIGlzIGFuIGV4YW1wbGUgbm90ZSEgQW5kIHRoaXMgaXMganVzdCBtb3JlIGFuZCBtb3JlIHRleHQgdG8gc2VlIGhvdyB0aGUgbm90ZXMgYXJlIGJlaW5nIGRpc3BsYXllZCBhZnRlciBzdHlsaW5nIHRoZW0gYSBiaXQuJyxcbiAgICAnMTIuMTIuMjAyNCcsXG4gICAgZmFsc2VcbiAgKTtcblxuICBsZXQgc2hvcnROb3RlID0gbmV3IE5vdGUoJ1Nob3J0IE5vdGUnLCAnVGhpcyBub3RlIGlzIHNob3J0ZXIhJywgJycsIHRydWUpO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKXtpbmJveC5ub3Rlcy5wdXNoKGRlZmF1bHROb3RlKTt9O1xuICBpbmJveC5ub3Rlc1syXSA9IHNob3J0Tm90ZTtcbiAgcHJvamVjdHMucHVzaChpbmJveCk7XG5cbiAgcmV0dXJuIHtwcm9qZWN0c307XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=