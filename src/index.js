import './style.css';
import page from "./page";
import notes from './notes';
import render from './render';

(() => {
  const pageContents = page.init().pageContents;
  //render().allNotes(notes.projectsArr, pageContents.main);
  let inbox = new notes.Project('Inbox'); // this creates default project called "Inbox"
  notes.projectsArr[0] = inbox;

  render().projectsNotes(notes.projectsArr[0], pageContents.main);

  const form = document.querySelector('form');
  const addNoteBtn = document.getElementById('add-note-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const showFormBtn = document.getElementById('show-form-btn');

  const bindEvents = (function() {
    addNoteBtn.onclick = addNoteBtnAction;
    showFormBtn.onclick = showFormBtnAction;
    cancelBtn.onclick = cancelBtnAction;
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
      pageContents.main.innerHTML = '';
      notes.projectsArr[0].addNote();
      render().projectsNotes(notes.projectsArr[0], pageContents.main);
      showFormBtn.classList.remove('hidden');
      form.classList.add('hidden');
    };
  };

  function cancelBtnAction() {
    form.classList.add('hidden');
    showFormBtn.classList.remove('hidden');
  };

  return {};
})();