import renderCards from "./renderCards.js";
import fetchRequest from "./fetchRequest.js";
import { createCard } from "./createCard.js";
import createTitle from "./createTitle.js";
import { createElem } from "./createElem.js";
import preload from "./preload.js";
import requestTrend from "./requestTrend.js";

export const controlSearch = (form, main) => {
  form.addEventListener('submit', (e) =>  {
      e.preventDefault();
      const formData = new FormData(e.target);
      const search = Object.fromEntries(formData).search;
      const country = Object.fromEntries(formData).country;
      main.innerHTML = '';
      // preload.show(main);
      Promise.all([
        fetchRequest(`https://newsapi.org/v2/everything?q={${search}}`, {
          headers: {
            'X-Api-Key': '32e1843e3697484aaeff75f2d414c470',
          },
          callback: renderCards,
          counter: 8,
        }),
        requestTrend(main, country, 4),
      ]).then(data => {
        preload.remove();
        main.innerHTML = '';
        createElem(data[0], search,  data[0]?.childNodes.length);
        createElem(data[1]);
      });
  });
};