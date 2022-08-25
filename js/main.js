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
// < set topic buttons content
function getTopicBtns(arr) {
  return arr
    .map((btn) => {
      return `<input type="button"  class="temp-btn btn" value="${btn}" id="${btn}">
           `;
    })
    .join(" ");
}

let test = new Base();
test.setContent("buttons", getTopicBtns(config.topics));
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
          gfs.removeButtonClass(".btn", config.btnClassArr);
          document.getElementById(`${item}`).classList.add("btn-topic-active");
        });
    });
  });
}
// button click logic
clickTopicButtons(config.topics);

searchField.addEventListener("click", () => {
  gfs.removeButtonClass(".btn", config.btnClassArr);
});
// --> temp

// trending button logic
btnTrending.addEventListener("click", () => {
  gfs.removeButtonClass(".btn", config.btnClassArr);
  btnTrending.classList.add("btn-trend-active");

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
  gfs.removeButtonClass(".btn", config.btnClassArr);
  btnSubmit.classList.add("btn-subm-active");
  let submitApi = new Config(`search?q=${searchField.value}&`);

  // temp
  if (searchField.value !== "") {
    if (config.topics.length > 5) {
      // console.log("before shift", config.topics);
      config.topics.shift();
      config.topics.push(searchField.value);
      // console.log("after shift & push", config.topics);
      let newTopics = config.topics;
      test.setContent("buttons", getTopicBtns(newTopics))
    } else {
      config.topics.push(searchField.value);
      let newTopics = config.topics;
      test.setContent("buttons", getTopicBtns(newTopics))
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
