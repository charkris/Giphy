import { Config } from "./common/config.js";
import { Button } from "./modules/buttons.js";
import { Gifs } from "./modules/home.js";

let btnTrending = document.getElementById("trendingId");
let btnSubmit = document.getElementById("submit");
let searchField = document.getElementById("user-search");

let config = new Config();
let button = new Button();
let gif = new Gifs();

// topic buttons click logic
function clickTopicButtons(arr) {
  arr.map((item, index) => {
    document.getElementById(`${item}${index}`).addEventListener("click", () => {
      let submitApi = new Config(`search?q=${item}&`);
      button.showRenderedBtns(submitApi);
    });
  });
}

function displayTopicBtns(arr) {
  //button.topicButtonsDisplay(arr);
  gif.renderBtns(arr);
  clickTopicButtons(arr);
}

// set topic buttons content
displayTopicBtns(config.topics);

// trending button click action
btnTrending.addEventListener("click", () => {
  button.showTrendings();
});

// submit button click action
btnSubmit.addEventListener("click", () => {
  let submitApi = new Config(`search?q=${searchField.value}&`);
  if (searchField.value !== "") {
    if (config.topics.length > 5) {
      config.topics.shift();
    }
    config.topics.push(searchField.value);
  }
  button.showRenderedBtns(submitApi);
  displayTopicBtns(config.topics);
});
