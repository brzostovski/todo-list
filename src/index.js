import printMe from "./print";

const page = (() => {
  let div = document.createElement('div');
  div.textContent = 'this is some text';
  document.body.appendChild(div);

  printMe();

  return 0;
})()