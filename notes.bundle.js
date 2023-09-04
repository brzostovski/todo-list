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
  let projectsArr = [];

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

  function createNote() {
    const _title = document.getElementById('title').value;
    const _desc = document.getElementById('desc').value;
    const _date = document.getElementById('date').value;
    const _flag = document.getElementById('flag-button').value;

    return (new Note(_title, _desc, _date, _flag));
  };
  
  let defaultNote = new Note(
    'Example Note',
    'This is an example note! And this is just more and more text to see how the notes are being displayed after styling them a bit.',
    '12.12.2024',
    false
  );

  let shortNote = new Note('Short Note', 'This note is shorter!', '', true);

  for(let i = 0; i < 20; i++){inbox.notes.push(defaultNote);};
  inbox.notes[2] = shortNote;
  projectsArr.push(inbox);

  return {
    projectsArr,
    Project,
    Note,
    createNote,
  };
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsaUVBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixRQUFRLEtBQUs7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbm90ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gbm90ZXMoKSB7XG4gIGxldCBwcm9qZWN0c0FyciA9IFtdO1xuXG4gIGxldCBQcm9qZWN0ID0gKGZ1bmN0aW9uIChuYW1lLCAuLi5ub3Rlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICBcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIG5vdGVzLFxuICAgIH1cbiAgfSk7XG5cbiAgbGV0IGluYm94ID0gbmV3IFByb2plY3QoJ0luYm94Jyk7XG4gIFxuICBsZXQgTm90ZSA9IChmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBmbGFnKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuZmxhZyA9IGZsYWc7XG4gIFxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIGZsYWcsXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBjcmVhdGVOb3RlKCkge1xuICAgIGNvbnN0IF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IF9kZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MnKS52YWx1ZTtcbiAgICBjb25zdCBfZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgY29uc3QgX2ZsYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZy1idXR0b24nKS52YWx1ZTtcblxuICAgIHJldHVybiAobmV3IE5vdGUoX3RpdGxlLCBfZGVzYywgX2RhdGUsIF9mbGFnKSk7XG4gIH07XG4gIFxuICBsZXQgZGVmYXVsdE5vdGUgPSBuZXcgTm90ZShcbiAgICAnRXhhbXBsZSBOb3RlJyxcbiAgICAnVGhpcyBpcyBhbiBleGFtcGxlIG5vdGUhIEFuZCB0aGlzIGlzIGp1c3QgbW9yZSBhbmQgbW9yZSB0ZXh0IHRvIHNlZSBob3cgdGhlIG5vdGVzIGFyZSBiZWluZyBkaXNwbGF5ZWQgYWZ0ZXIgc3R5bGluZyB0aGVtIGEgYml0LicsXG4gICAgJzEyLjEyLjIwMjQnLFxuICAgIGZhbHNlXG4gICk7XG5cbiAgbGV0IHNob3J0Tm90ZSA9IG5ldyBOb3RlKCdTaG9ydCBOb3RlJywgJ1RoaXMgbm90ZSBpcyBzaG9ydGVyIScsICcnLCB0cnVlKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgMjA7IGkrKyl7aW5ib3gubm90ZXMucHVzaChkZWZhdWx0Tm90ZSk7fTtcbiAgaW5ib3gubm90ZXNbMl0gPSBzaG9ydE5vdGU7XG4gIHByb2plY3RzQXJyLnB1c2goaW5ib3gpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdHNBcnIsXG4gICAgUHJvamVjdCxcbiAgICBOb3RlLFxuICAgIGNyZWF0ZU5vdGUsXG4gIH07XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=