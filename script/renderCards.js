import { createCard } from "./createCard.js";

const renderCards = async (err, data, counter = 4) => {
  if (err) {
    console.warn(err);
    return;
  }

  const ul = document.createElement('ul');
  ul.className = 'list';

  // for (let i = 0; i <= counter; i++) {
  //   console.log(i);
  //   cards.push(createCard(await data.articles[i]));
  //   console.log(data.articles[i]);
  // }
  const postMassive = await data.articles.slice(0,counter);
  const cards = postMassive.map((item) => {
      const card = createCard(item);
      return card;
  });

  ul.append(...cards);
    return ul;
};

export default renderCards;