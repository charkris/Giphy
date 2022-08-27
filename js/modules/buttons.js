import { Gifs } from "./home.js";
import { Config } from "../common/config.js";

let query = "trending?";
let config = new Config(query);

export class Button {
  constructor() {}

  // fetching fulfilled promise
  _getFulfilled(param) {
    return fetch(param.getBaseUrl())
      .then((resp) => resp.json())
      .then((res) => {
        return res.data;
      });
  }
  // render gifs after resolved promise
  showRenderedBtns(query) {
    this._getFulfilled(query).then((res) => {
      let gifs = new Gifs(res);
      gifs.render();
    });
  }

  showTrendings() {
    this.showRenderedBtns(config);
  }
}
