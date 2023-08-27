export default function initPage() {
  let pageContainer = document.createElement('div');
  pageContainer.id = 'page-container';

  let pageContents = {
    header: initHeader,
    aside: initAside,
    main: initMain,
    footer: initFooter,
  };

  Object.keys(pageContents).forEach(key => {
    pageContainer.appendChild(pageContents[key]);
  });

  return document.body.appendChild(pageContainer);
}

const initHeader = (() => {
  let headerWrapper = document.createElement('header');

  let headerContent = {
    title: document.createElement('span'),
  }

  headerContent.title.textContent = 'Project: Todo List';

  Object.keys(headerContent).forEach(key => {
    headerWrapper.appendChild(headerContent[key]);
  });

  return headerWrapper;
})();

const initAside = (() => {
  let asideWrapper = document.createElement('aside');

  let asideContent = {
    home: document.createElement('div'), // this will contain link to 'homepage' showing all notes
    flagged: document.createElement('div'), // this will display notes with flag:true
    projects: document.createElement('div'), // this will show subfolders ('projects') and allow to create new one
  }

  Object.keys(asideContent).forEach(key => {
    asideContent[key].id = key;
    asideContent[key].textContent = key; // this will change to display section title
    asideWrapper.appendChild(asideContent[key]);
  });

  return asideWrapper;
})();

const initMain = (() => {
  let mainWrapper = document.createElement('main');
  
  mainWrapper.textContent = 'dummy text';

  return mainWrapper;
})();

const initFooter = (() => {
  let footerWrapper = document.createElement('footer');

  let footerContent = {
    link: document.createElement('span'),
  }

  footerContent.link.innerHTML =
  `© <a href="https://github.com/brzostovski" target="_blank">brzostovski</a> 2023`;

  Object.keys(footerContent).forEach(key => {
    footerWrapper.appendChild(footerContent[key]);
  });

  return footerWrapper;
})();