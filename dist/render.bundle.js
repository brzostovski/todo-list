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
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLGlFQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0QnRucyxcbiAgICBhbGxOb3RlcyxcbiAgICBmbGFnZ2VkTm90ZXMsXG4gICAgcHJvamVjdE5vdGVzLFxuICB9XG59KTtcblxuY29uc3QgX2NyZWF0ZVByb2plY3RCdG4gPSAoZnVuY3Rpb24ocHJvamVjdCkge1xuICBsZXQgX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBfYnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XG4gIF9idG4uaWQgPSBwcm9qZWN0O1xuICBfYnRuLnRleHRDb250ZW50ID0gcHJvamVjdDtcblxuICByZXR1cm4gX2J0bjtcbn0pO1xuXG5jb25zdCBfY3JlYXRlTm90ZUNhcmQgPSAoZnVuY3Rpb24obm90ZSkge1xuICBsZXQgX2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2NhcmQuY2xhc3NMaXN0LmFkZCgnbm90ZScpO1xuXG4gIE9iamVjdC5rZXlzKG5vdGUpLmZvckVhY2goa2V5ID0+IHtcbiAgICBsZXQgX3NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGtleSk7XG4gICAgaWYgKGtleSA9PT0gJ2ZsYWcnKSB7XG4gICAgICAobm90ZVtrZXldID09PSB0cnVlKVxuICAgICAgPyAoX3NlY3Rpb24udGV4dENvbnRlbnQgPSAn4pqRJylcbiAgICAgIDogKF9zZWN0aW9uLnRleHRDb250ZW50ID0gJ+KakCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIF9zZWN0aW9uLnRleHRDb250ZW50ID0gbm90ZVtrZXldO1xuICAgIH1cbiAgICBfY2FyZC5hcHBlbmRDaGlsZChfc2VjdGlvbik7XG4gIH0pO1xuXG4gIHJldHVybiBfY2FyZDtcbn0pO1xuXG5jb25zdCBwcm9qZWN0QnRucyA9IChmdW5jdGlvbihwcm9qZWN0c0FyciwgZG9tRWxlbWVudCkge1xuICBwcm9qZWN0c0Fyci5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVByb2plY3RCdG4ocHJvamVjdCkpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBhbGxOb3RlcyA9IChmdW5jdGlvbihub3Rlc0FyciwgZG9tRWxlbWVudCkge1xuICBpZiAobm90ZXNBcnIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBub3Rlc0Fyci5mb3JFYWNoKG5vdGUgPT4ge1xuICAgIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZU5vdGVDYXJkKG5vdGUpKTtcbiAgfSk7XG59KTtcblxuY29uc3QgZmxhZ2dlZE5vdGVzID0gKGZ1bmN0aW9uKG5vdGVzQXJyLCBkb21FbGVtZW50KSB7XG4gIGlmIChub3Rlc0FyciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIG5vdGVzQXJyLmZvckVhY2gobm90ZSA9PiB7XG4gICAgaWYgKG5vdGUuZmxhZyA9PT0gdHJ1ZSkgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlTm90ZUNhcmQobm90ZSkpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBwcm9qZWN0Tm90ZXMgPSAoZnVuY3Rpb24ocHJvamVjdCwgbm90ZXNBcnIsIGRvbUVsZW1lbnQpIHtcbiAgaWYgKG5vdGVzQXJyID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgbm90ZXNBcnIuZm9yRWFjaChub3RlID0+IHtcbiAgICBpZiAobm90ZS5wcm9qZWN0ID09PSBwcm9qZWN0KSBkb21FbGVtZW50LmFwcGVuZENoaWxkKF9jcmVhdGVOb3RlQ2FyZChub3RlKSk7XG4gIH0pO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9