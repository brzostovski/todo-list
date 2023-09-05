import './style.css';
import page from "./page";
import notes from './notes';
import render from './render';

(() => {
  const pageContents = page().init().pageContents;
  render(notes().projectsArr[0], pageContents.main);

  const form = document.querySelector('form');
  const addNoteBtn = document.getElementById('add-note-btn');
  const showFormBtn = document.getElementById('show-form-btn');

  const bindEvents = (function() {
    addNoteBtn.onclick = addNoteBtnAction;
    showFormBtn.onclick = showFormBtnAction;
  })();

  function showFormBtnAction() {
    form.style = 'display: border-box;'
  };

  function addNoteBtnAction() {
    if (!page().checkFormValidity(form)) {
      return;
    } else {
      pageContents.main.innerHTML = '';
      notes().addNote();
      render(notes().projectsArr[0], pageContents.main);
    }
  }

  return {};
})();