import createTitle from "./createTitle.js";

export const createElem = (ul = '', title, count = '0') => {
  const main = document.querySelector('main');

  const elem = document.createElement('div');
  elem.className = 'elem';

  const elemTitle = createTitle(title, count);

  const container = document.createElement('div');
  container.className = 'container';
  container.append(ul);

  elem.append(elemTitle, container);
  
  main.append(elem);
};