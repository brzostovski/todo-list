export default (function initPage() {
  let _pageContainer = document.createElement('div');
  _pageContainer.id = 'page-container';

  let _pageHeader = _initHeader();
  let _pageAside = _initAside();
  let _pageMain = _initMain();
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

  return {pageContents};
});

const _initHeader = (() => {
  let headerWrapper = document.createElement('header');

  let _headerContent = {
    title: document.createElement('span'),
    addNote: document.createElement('button'),
  }

  _headerContent.title.textContent = 'Project: Todo List';
  _headerContent.addNote.textContent = '﹢';
  _headerContent.addNote.id = 'new-note-btn';

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