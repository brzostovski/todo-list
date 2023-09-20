import './style.css';
import page from "./page";
import notes from './notes';
import render from './render';

(() => {
  const pageContents = page.init().pageContents;

  const showFormBtn = document.getElementById('show-form-btn');

  const flaggedNotesBtn = document.getElementById('flaggedNotes');
  const projectsContainer = document.getElementById('projects');

  const form = document.querySelector('form');
  const addNoteBtn = document.getElementById('add-note-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const homeBtn = document.getElementById('home');

  render().projectTabs(notes.projects, projectsContainer);
  render().allNotes(notes.arr, pageContents.main);

  const bindEvents = (function() {
    addNoteBtn.onclick = addNoteBtnAction;
    showFormBtn.onclick = showFormBtnAction;
    cancelBtn.onclick = cancelBtnAction;
    homeBtn.onclick = showAllNotes;
    flaggedNotesBtn.onclick = showFlaggedNotes;
  })();

  function showFormBtnAction() {
    if (form.classList.contains('hidden')) {
      form.classList.remove('hidden');
      showFormBtn.classList.add('hidden');
    };
  };

  function addNoteBtnAction() {
    if (!page.checkFormValidity(form)) {
      return;
    } else {
      notes.add();
      pageContents.main.innerHTML = '';
      render().allNotes(notes.arr, pageContents.main);
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
    render().allNotes(notes.arr, pageContents.main);
  };

  function showFlaggedNotes() {
    pageContents.main.innerHTML = '';
    render().flaggedNotes(notes.arr, pageContents.main);
  };

  return;
})();