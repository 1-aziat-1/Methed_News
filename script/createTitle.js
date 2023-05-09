const createTitle = (titleName, count) => {
  const elemHeader = document.createElement('div');
  elemHeader.className = 'elem__header';

  const container = document.createElement('div');
  container.className = 'container';

  const elemTitle = document.createElement('h2');

  elemTitle.textContent = titleName ?
    `По вашему запросу “${titleName}” найдено ${count} результатов` :
    'Свежие новости';

  container.append(elemTitle);
  elemHeader.append(container);

  return elemHeader;
};

export default createTitle;