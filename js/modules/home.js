import { Base } from "../common/base.js";

export class Gifs extends Base {
  constructor(apiJSON) {
    super();
    this.apiJSON = apiJSON;
  }

  _getGifs() {
    return this.apiJSON
      .map((gif) => {
        return `
            <div class="gif-box">
                <img src="${gif.images.fixed_height.url}">
                <h6>Rating: ${gif.rating}</h6>
            </div> `;
      })
      .join(" ");
  }

  render() {
    this.setContent("results", this._getGifs());
  }
}

// data-animate="https://media1.giphy.com/media/hxTY2z486xU5ETzTPL/200.gif" data-still="https://media1.giphy.com/media/hxTY2z486xU5ETzTPL/200_s.gif" data-state="still" class="gif"