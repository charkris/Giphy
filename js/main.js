import { Config } from "./common/config.js";
import { Gifs } from "./modules/home.js";

let btnTrending = document.getElementById("trendingId");
let btnSubmit = document.getElementById("submit");
let searchField = document.getElementById("user-search");
let query = "trending?";
let configTrends = new Config(query);
let config = new Config();

// fetch api data
function fetchGifs(urlPar) {
  fetch(urlPar.getBaseUrl())
    .then((resp) => resp.json())
    .then((res) => {
      let gifs = new Gifs(res.data);
      gifs.render();
    });
}

// button click logic
function clickTopicButtons(arr) {
  arr.map((item, index) => {
    document.getElementById(`${item}${index}`).addEventListener("click", () => {
      let submitApi = new Config(`search?q=${item}&`);
      fetchGifs(submitApi);
    });
  });
}

function displayTopicBtns(arr) {
  let gif = new Gifs();
  gif.renderBtns(arr);
  clickTopicButtons(arr);
}
// set topic buttons content
displayTopicBtns(config.topics);

// trending button click action
btnTrending.addEventListener("click", () => {
  fetchGifs(configTrends);
});

// submit button click action
btnSubmit.addEventListener("click", () => {
  let submitApi = new Config(`search?q=${searchField.value}&`);
  // temp
  if (searchField.value !== "") {
    if (config.topics.length > 5) {
      config.topics.shift();
      config.topics.push(searchField.value.trim());
      displayTopicBtns(config.topics);
    } else {
      config.topics.push(searchField.value.trim());
      displayTopicBtns(config.topics);
    }
  }
  fetchGifs(submitApi);
});
