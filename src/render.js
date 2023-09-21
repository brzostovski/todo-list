export default (function render() {
  return {
    projectBtns,
    projectsDropdown,
    allNotes,
    flaggedNotes,
    projectNotes,
  }
});

const _createNoteCard = (function(note) {
  let _card = document.createElement('div');
  _card.classList.add('note');
  _card.id = note.id;

  Object.keys(note).forEach(key => {
    if (key === 'id') return;

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
  const _createProjectBtn = (function(project) {
    let _btn = document.createElement('button');
    _btn.classList.add('project-btn');
    _btn.id = project;
    _btn.textContent = project;
  
    return _btn;
  });

  projectsArr.forEach(project => {
    domElement.appendChild(_createProjectBtn(project));
  });
});

const projectsDropdown = (function(projectsArr, input) {
  let _begin = '<select name="notes-project" id="project-input">';
  let _options = '';
  let _end = '</select>';

  projectsArr.forEach(project => {
    _options += (`<option value="${project}">${project}</option>`);
  });

  input.innerHTML = _begin + _options + _end;
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