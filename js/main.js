import { Config } from "./common/config.js";
import { Gifs } from "./modules/home.js";

let btnTrending = document.getElementById("trendingId");

let trendingVal = "trending?limit=10&";
let myObj;
let config = new Config(trendingVal);

btnTrending.addEventListener("click", () => {
  fetch(config.getbaseUrl())
    .then((resp) => resp.json())
    .then((res) => {
      let gifs = new Gifs(res.data);
      console.log(gifs);
      gifs.render();
    });
});

//

//https://api.giphy.com/v1/gifs/trending?limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json
