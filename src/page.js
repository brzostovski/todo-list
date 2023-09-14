export default (function page() {
  return {
    init,
    checkFormValidity,
  };
});

const init = (() => {
  let _pageContainer = document.createElement('div');
  _pageContainer.id = 'page-container';

  let _pageHeader = _initHeader();
  let _pageAside = _initAside();
  let _pageMain = _initMain(); // form will live on top of main
  let _pageFooter = _initFooter();

  let pageContents = {
    header: _pageHeader,
    aside: _pageAside,
    main: _pageMain,
    footer: _pageFooter,
  };

  Object.keys(pageContents).forEach(key => {
    _pageContainer.appendChild(pageContents[key]);
  });

  document.body.appendChild(_pageContainer);

  return {
    pageContents,
  };
});

const _initHeader = (() => {
  let headerWrapper = document.createElement('header');

  let _headerContent = {
    title: document.createElement('span'),
    form: document.createElement('form'),
    toggleForm: document.createElement('button'),
  }

  _headerContent.title.textContent = 'Project: Todo List';
  _headerContent.form.classList.add('hidden');
  _headerContent.toggleForm.textContent = 'New note';
  _headerContent.toggleForm.id = 'toggle-form-btn';

  let _formContent = {
    title: {
      label: `<label for="title">Title:</label>`,
      input: `
        <input
        type="text"
        name="note-title"
        id="title"
        placeholder="Note title"
        required>`,
    },
    description: {
      label: `<label for="desc">Description:</label>`,
      input: `
      <textarea
      name="note-description"
      id="desc"
      wrap="soft"
      placeholder="Note description"
      required></textarea>`,
    },
    date: {
      label: `<label for="date">Due date:</label>`,
      input: `<input type="text" name="due-date" id="date">`, // input will be date picker
    },
    flag: {
      button: `<label for="flag-button">Flagged</label>
        <input type="checkbox" id="flag-button">`, // should be stylized button that acts as toggle
    },
    buttons: {
      button: `
        <div id="btn-container">
          <button type="button" id="add-note-btn">Add note!</button>
          <button type="button" id="cancel-btn">Cancel</button>
        </div>
      `,
    },
  }

  Object.keys(_formContent).forEach(key => {
    if (
      (key === 'flag') ||
      (key === 'buttons')) {
      _headerContent.form.innerHTML += _formContent[key].button;
    } else {
      _headerContent.form.innerHTML += _formContent[key].label;
      _headerContent.form.innerHTML += _formContent[key].input;
    };
  });

  Object.keys(_headerContent).forEach(key => {
    headerWrapper.appendChild(_headerContent[key]);
  });

  return headerWrapper;
});

const _initAside = (() => {
  let asideWrapper = document.createElement('aside');

  let _asideContent = {
    home: document.createElement('div'), // this will contain link to 'homepage' showing all notes
    flagged: document.createElement('div'), // this will display notes with flag:true
    projects: document.createElement('div'), // this will show subfolders ('projects') and allow to create new one
  }

  Object.keys(_asideContent).forEach(key => {
    _asideContent[key].id = key;
    _asideContent[key].textContent = key; // this will change to display section title
    asideWrapper.appendChild(_asideContent[key]);
  });

  return asideWrapper;
});

const _initMain = (() => {
  let mainWrapper = document.createElement('main');

  return mainWrapper;
});

const _initFooter = (() => {
  let footerWrapper = document.createElement('footer');

  let _footerContent = {
    link: document.createElement('span'),
  }

  _footerContent.link.innerHTML =
  `© <a href="https://github.com/brzostovski" target="_blank">brzostovski</a> 2023`;

  Object.keys(_footerContent).forEach(key => {
    footerWrapper.appendChild(_footerContent[key]);
  });

  return footerWrapper;
});

function checkFormValidity(form) {
  let isFormValid = form.checkValidity();
  if (!isFormValid) {
    form.reportValidity();
    return false;
  } else {
    return true;
  }
};