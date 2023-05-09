import { controlSearch } from "./controlSearch.js";
import {
  createElem
} from "./createElem.js";
import fetchRequest from "./fetchRequest.js";
import preload from "./preload.js";
import renderCards from "./renderCards.js";
import requestTrend from "./requestTrend.js";


const form = document.querySelector('form');
const main = document.querySelector('main');

requestTrend(main, 'ru' , 8)
  .then(data => {
    preload.remove();
    main.innerHTML = '';
    createElem(data);
  });

controlSearch(form, main);

