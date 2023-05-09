import fetchRequest from "./fetchRequest.js";
import preload from "./preload.js";
import renderCards from "./renderCards.js";

const requestTrend = async (main, country = 'ru', counter) => {
  preload.show(main);
  return await fetchRequest(`https://newsapi.org/v2/top-headlines?country=${country}`, {
    headers: {
      'X-Api-Key': '32e1843e3697484aaeff75f2d414c470',
    },
    callback: renderCards,
    counter: counter,
  });
};

export default requestTrend;