import './style.css';
import page from "./page";
import notes from './notes';
import render from './render';

(() => {
  const pageContents = page().init().pageContents;
  render(notes().projectsArr[0], pageContents.main);

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