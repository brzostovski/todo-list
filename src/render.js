export default (function render() {
  return {
    projectsNotes,
  }
});

let projectsNotes = (function(project, domElement) {
  project.notes.forEach(note => {
    domElement.appendChild(_noteCard(project, note).card);
  });
});

let _noteCard = (function(project, note) {
  let card = document.createElement('div');
  card.classList.add('note');

  let _projectName = document.createElement('div');
  _projectName.classList.add('project-name');
  _projectName.textContent = project.name;
  card.appendChild(_projectName);

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
    card.appendChild(_section);
  });

  return {card};
});