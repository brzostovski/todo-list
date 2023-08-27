export default function initPage() {
  let pageContainer = document.createElement('div');
  pageContainer.id = 'page-container';

  let pageContents = {
    header: initHeader,
    homePage: initMain,
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

const initMain = (() => {
  let mainWrapper = document.createElement('main');
  
  mainWrapper.textContent = 'dummy text';

  return mainWrapper;
})();

const initFooter = (() => {
  let footerWrapper = document.createElement('footer');

  let footerContent = {
    title: document.createElement('span'),
  }

  footerContent.title.innerHTML = `<span>
    ©
    <a href="https://github.com/brzostovski" target="_blank">brzostovski</a>
    2023
  </span>`;

  Object.keys(footerContent).forEach(key => {
    footerWrapper.appendChild(footerContent[key]);
  });

  return footerWrapper;
})();