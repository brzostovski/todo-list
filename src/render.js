export default (function render() {
  return {
    projectTabs,
    allNotes,
    flaggedNotes,
  }
});

const _createProjectTab = (function(project) {
  let _tab = document.createElement('button');
  _tab.classList.add('project-tab');
  _tab.id = 'project-' + project;
  _tab.textContent = project;

  return _tab;
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

const projectTabs = (function(projectsArr, domElement) {
  projectsArr.forEach(project => {
    domElement.appendChild(_createProjectTab(project));
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