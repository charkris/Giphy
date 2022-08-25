import { Base } from "../common/base.js";
import { Config } from "../common/config.js";

export class Gifs extends Base {
  constructor(apiJSON) {
    super();
    this.apiJSON = apiJSON;
  }

  _getGifs() {
    return this.apiJSON
      .map((gif) => {
        return `<div class="gif-box">
                  <img src="${gif.images.fixed_height.url}">
                  <h6>Rating: ${gif.rating}</h6>
                </div> `;
      })
      .join(" ");
  }

  render() {
    this.setContent("results", this._getGifs());
  }

  getTopicBtns(arr) {
    return arr
      .map((btn) => {
        return `<input type="button" class="topic-btn btn" value="${btn}" id="${btn}">`;
      })
      .join(" ");
  }
}
