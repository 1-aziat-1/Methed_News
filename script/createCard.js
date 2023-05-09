import loadImg from "./loadImg.js";

export const createCard = ({author, description, title = 'Нет автора', url, urlToImage, publishedAt}) => {
  //author, description, title, url, urlToImage, publishedAt
  //src, title, link, content, author
  const li = document.createElement('li');
  li.className = 'item';

  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'item__img';

  loadImg(urlToImage,'/img/default.jpg')
    .then(img => {
      imgWrapper.append(img);
    })
    .catch(img => {
      imgWrapper.append(img);
    });

  const itemContent = document.createElement('div');
  itemContent.className = 'item__content';

  const titleElem = document.createElement('h2');
  titleElem.textContent = title;

  const linkElem = document.createElement('a');
  linkElem.className = 'item__content-link';
  linkElem.href = url;
  linkElem.innerHTML = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6H18V16M18 6L6 18L18 6Z" stroke="#F2994A" stroke-width="2" stroke-linecap="round"
    stroke-linejoin="round" />
  </svg>
  `;

  const textElem = document.createElement('p');
  textElem.textContent = description;

  const itemFooter = document.createElement('div');
  itemFooter.className = `item__content-footer content-footer`;

  const contentFooterData = document.createElement('div');
  contentFooterData.className = `content-footer__data`;

  // const dataNum = document.createElement('p');
  // dataNum.className = `content-footer__num`;
  // dataNum.textContent = num;

  // const dataTime = document.createElement('p');
  // dataTime.className = `content-footer__time`;
  // dataTime.textContent = time;

  // contentFooterData.append(dataNum, dataTime);

  const authorElem = document.createElement('p');
  authorElem.className = 'content-footer__author';
  authorElem.textContent = author;

  itemFooter.append(contentFooterData, authorElem);

  itemContent.append(titleElem, linkElem, textElem, itemFooter);
  li.append(imgWrapper,itemContent);

  return li;
};