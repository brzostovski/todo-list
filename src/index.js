import './style.css';
import page from "./page";
import notes from './notes';
import render from './render';

(() => {
  const pageContents = page.init().pageContents;

  const showFormBtn = document.getElementById('show-form-btn');

  const homeBtn = document.getElementById('home');
  const flaggedNotesBtn = document.getElementById('flaggedNotes');
  const projectsContainer = document.getElementById('projects');

  const form = document.querySelector('form');
  const dropdown = document.getElementById('project-input');
  const addNoteBtn = document.getElementById('add-note-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  render().projectsDropdown(notes.projects, dropdown);
  render().projectBtns(notes.projects, projectsContainer);
  let projectShowBtns = document.querySelectorAll('.project-btn');

  render().allNotes(notes.arr, pageContents.main);

  const bindEvents = (function() {
    addNoteBtn.onclick = addNoteBtnAction;
    showFormBtn.onclick = showFormBtnAction;
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

  function showProjectNotes(project) {
    pageContents.main.innerHTML = '';
    render().projectNotes(project, notes.arr, pageContents.main);
  };

  return;
})();