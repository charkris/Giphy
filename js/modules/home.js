import { Base } from "../common/base.js";

export class Gifs extends Base {
  constructor(apiJSON) {
    super();
    this.apiJSON = apiJSON;
  }

  _getGifs() {
    return this.apiJSON.map((gif) => {
      return `${gif}`;
    });
  }

  render() {
    this.setContent("results", this._getGifs());
  }
}
