import './style.css';
import initPage from "./initPage";
import notes from './notes';
import render from './render';

(() => {
  let pageContents = initPage().pageContents;
  render(notes().projectsArr[0], pageContents.main);

  const form = document.querySelector('form');
  const addNoteBtn = document.getElementById('add-note-btn');

  const bindEvents = (function() {
    addNoteBtn.onclick = function() {
      let isFormValid = form.checkValidity();
      if (!isFormValid) {
        form.reportValidity();
      } else {
        console.log(notes().createNote());
      }
    };
  })();

  return {};
})();