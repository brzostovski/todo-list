import './style.css';
import page from "./page";
import notes from './notes';
import render from './render';

(() => {
  const pageContents = page().init().pageContents;
  render().projectsNotes(notes().projectsArr[0], pageContents.main);

  const form = document.querySelector('form');
  const addNoteBtn = document.getElementById('add-note-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const toggleFormBtn = document.getElementById('toggle-form-btn');

  const bindEvents = (function() {
    addNoteBtn.onclick = addNoteBtnAction;
    toggleFormBtn.onclick = toggleFormBtnAction;
    cancelBtn.onclick = cancelBtnAction;
  })();

  function toggleFormBtnAction() {
    if (form.classList.contains('hidden')) {
      form.classList.remove('hidden');
      toggleFormBtn.classList.add('hidden');
    };
  };

  function addNoteBtnAction() {
    if (!page().checkFormValidity(form)) {
      return;
    } else {
      pageContents.main.innerHTML = '';
      notes().addNote();
      render().projectsNotes(notes().projectsArr[0], pageContents.main);
      toggleFormBtn.classList.remove('hidden');
      form.classList.add('hidden');
    };
  };

  function cancelBtnAction() {
    form.classList.add('hidden');
    toggleFormBtn.classList.remove('hidden');
  };

  return {};
})();