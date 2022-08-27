import { Base } from "../common/base.js";

export class Gifs extends Base {
  constructor(apiJSON) {
    super();
    this.apiJSON = apiJSON;
  }

  _getGifs() {
    return this.apiJSON
      .map((gif, index) => {
        return `<div class="gif-box">
                  <img onClick="changeAttribute(this.id)" id="img${index}" src="${gif.images.fixed_height_still.url}"
                  data-animate="${gif.images.fixed_height.url}" 
                  data-still="${gif.images.fixed_height_still.url}"
                  data-state="still"
                  class="gifs">
                  <h6>Rating: ${gif.rating}</h6>
                </div> `;
      })
      .join(" ");
  }

  _getTopicBtns(arr) {
    return arr
      .map((btn, index) => {
        return `<input type="button" class="topic-btn btn" value="${btn}" id="${btn}${index}">`;
      })
      .join(" ");
  }

  render() {
    this.setContent("results", this._getGifs());
  }

  renderBtns(arr) {
    this.setContent("buttons", this._getTopicBtns(arr));
  }
}
