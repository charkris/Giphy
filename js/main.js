import { Config } from "./common/config.js";
import { Gifs } from "./modules/home.js";

let btnTrending = document.getElementById("trendingId");
let btnSubmit = document.getElementById("submit");

let trendingVal = "trending?limit=10&";
let configTrends = new Config(trendingVal);

btnTrending.addEventListener("click", () => {
  btnTrending.classList.add("btn-trend-active");
  btnSubmit.classList.remove("btn-subm-active");

  fetch(configTrends.getBaseUrl())
    .then((resp) => resp.json())
    .then((res) => {
      let gifs = new Gifs(res.data);
      console.log(gifs);
      gifs.render();
    });
});

let searchField = document.getElementById("user-search");

btnSubmit.addEventListener("click", () => {
  btnTrending.classList.remove("btn-trend-active");
  btnSubmit.classList.add("btn-subm-active");
  let configSubmit = new Config(`search?q=${searchField.value}&`);

  fetch(configSubmit.getBaseUrl())
    .then((resp) => resp.json())
    .then((res) => {
      let gifs = new Gifs(res.data);
      console.log(gifs);
      gifs.render();
    });
});

// console.log(configSubmit.getApiParam("limit"));

// btnSubmit
//

//https://api.giphy.com/v1/gifs/trending?limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json

//https://api.giphy.com/v1/gifs/search?q=Space&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json
//https://api.giphy.com/v1/gifs/search?q=Space&limit=10api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json
