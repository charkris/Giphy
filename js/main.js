import { Config } from "./common/config.js";
import { Gifs } from "./modules/home.js";
// temp
import { Base } from "./common/base.js";

let btnTrending = document.getElementById("trendingId");
let btnSubmit = document.getElementById("submit");
let searchField = document.getElementById("user-search");

let trendingVal = "trending?";
let configTrends = new Config(trendingVal);
let config = new Config();

let gfs = new Gifs();

// <-- temp
let test = new Base();
test.setContent("buttons", gfs.getTopicBtns(config.topics));
clickTopicButtons(config.topics);

// set topic buttons content >
// temp -- >
function clickTopicButtons(arr) {
  arr.map((item) => {
    document.getElementById(`${item}`).addEventListener("click", () => {
       let submitApi = new Config(`search?q=${item}&`);
      fetch(submitApi.getBaseUrl())
        .then((resp) => resp.json())
        .then((res) => {
          let gifs = new Gifs(res.data);
          gifs.render();
        });
    });
  });
}
// button click logic

// --> temp

// trending button logic
btnTrending.addEventListener("click", () => {

  fetch(configTrends.getBaseUrl())
    .then((resp) => resp.json())
    .then((res) => {
      let gifs = new Gifs(res.data);
      // console.log(gifs);
      gifs.render();
    });
});

// submit button logic
btnSubmit.addEventListener("click", () => {

  let submitApi = new Config(`search?q=${searchField.value}&`);
  // temp
  if (searchField.value !== "") {
    if (config.topics.length > 5) {
      config.topics.shift();
      config.topics.push(searchField.value);
      let newTopics = config.topics;
      test.setContent("buttons", gfs.getTopicBtns(newTopics))
      clickTopicButtons(config.topics)
    } else {
      config.topics.push(searchField.value);
      let newTopics = config.topics;
      test.setContent("buttons", gfs.getTopicBtns(newTopics))
      clickTopicButtons(config.topics)
    }
  }

  fetch(submitApi.getBaseUrl())
    .then((resp) => resp.json())
    .then((res) => {
      let gifs = new Gifs(res.data);
      // console.log(gifs);
      gifs.render();
    });
});
