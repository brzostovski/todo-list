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
  
  let inbox = new Project('Inbox');
  let defaultNote = new Note(
    'Example Note',
    'This is an example note! And this is just more and more text to see how the notes are being displayed after styling them a bit.',
    '12.12.2024',
    false
  );

  let shortNote = new Note('Short Note', 'This note is shorter!', '', true);

  for(let i = 0; i < 20; i++){inbox.notes.push(defaultNote);};
  inbox.notes[5] = shortNote;
  projects.push(inbox);

  return {projects};
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsaUVBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsUUFBUSxLQUFLO0FBQzlCO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ub3Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBub3RlcygpIHtcbiAgbGV0IHByb2plY3RzID0gW107XG5cbiAgbGV0IFByb2plY3QgPSAoZnVuY3Rpb24gKG5hbWUsIC4uLm5vdGVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIFxuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgbm90ZXMsXG4gICAgfVxuICB9KTtcbiAgXG4gIGxldCBOb3RlID0gKGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGZsYWcpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5mbGFnID0gZmxhZztcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgZmxhZyxcbiAgICB9XG4gIH0pO1xuICBcbiAgbGV0IGluYm94ID0gbmV3IFByb2plY3QoJ0luYm94Jyk7XG4gIGxldCBkZWZhdWx0Tm90ZSA9IG5ldyBOb3RlKFxuICAgICdFeGFtcGxlIE5vdGUnLFxuICAgICdUaGlzIGlzIGFuIGV4YW1wbGUgbm90ZSEgQW5kIHRoaXMgaXMganVzdCBtb3JlIGFuZCBtb3JlIHRleHQgdG8gc2VlIGhvdyB0aGUgbm90ZXMgYXJlIGJlaW5nIGRpc3BsYXllZCBhZnRlciBzdHlsaW5nIHRoZW0gYSBiaXQuJyxcbiAgICAnMTIuMTIuMjAyNCcsXG4gICAgZmFsc2VcbiAgKTtcblxuICBsZXQgc2hvcnROb3RlID0gbmV3IE5vdGUoJ1Nob3J0IE5vdGUnLCAnVGhpcyBub3RlIGlzIHNob3J0ZXIhJywgJycsIHRydWUpO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKXtpbmJveC5ub3Rlcy5wdXNoKGRlZmF1bHROb3RlKTt9O1xuICBpbmJveC5ub3Rlc1s1XSA9IHNob3J0Tm90ZTtcbiAgcHJvamVjdHMucHVzaChpbmJveCk7XG5cbiAgcmV0dXJuIHtwcm9qZWN0c307XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=