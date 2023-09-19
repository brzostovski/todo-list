export default (function render() {
  return {
    allNotes,
  }
});

let allNotes = (function(notesArr, domElement) {
  if (notesArr === undefined) return;
  notesArr.forEach(note => {
    domElement.appendChild(_createNoteCard(note));
  });
});

let _createNoteCard = (function(note) {
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