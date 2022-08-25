export class Config {
  constructor(val) {
    this.val = val;
  }

  params = {
    limit: 10,
    api_key: "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB",
    fmt: "json",
  };

  topics = ["Internet Cats", "Meme's", "Typing", "Space", "Rick and Morty"];

  getBaseUrl() {
    return `https://api.giphy.com/v1/gifs/${this.val}limit=${this.params.limit}&api_key=${this.params.api_key}&fmt=${this.params.fmt}`;
  }
}
