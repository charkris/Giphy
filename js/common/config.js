export class Config {
  constructor(val) {
    this.val = val;
  }

  getApiParam(value) {
    let query;
    let params = {
      q: query,
      limit: 10,
      api_key: "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB",
      fmt: "json",
    };
    return params[value];
  }

  getBaseUrl() {
    return `https://api.giphy.com/v1/gifs/${this.val}limit=${this.getApiParam(
      "limit"
    )}&api_key=${this.getApiParam("api_key")}&fmt=${this.getApiParam("fmt")}`;
  }

  topics = ["Internet Cats", "Meme's", "Typing", "Space", "Rick and Morty"];
  btnClassArr = ["btn-trend-active", "btn-topic-active", "btn-subm-active"];
}
