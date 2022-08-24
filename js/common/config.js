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
    return `https://api.giphy.com/v1/gifs/${this.val}limit=${this.getApiParam('limit')}&api_key=${this.getApiParam('api_key')}&fmt=${this.getApiParam('fmt')}`;
  }

}

/*
 var queryURL = "https://api.giphy.com/v1/gifs/search?";
  var query;
  var params = {
    q: query,
    limit: 10,
    api_key: "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB",
    fmt: "json"

    var topics = ["Internet Cats", "Meme's", "Typing", "Space", "Rick and Morty"];
     $button = $("<input type='button' class='btn btn-sm search-btn' />");

var queryURL = "https://api.giphy.com/v1/gifs/search?";
  var query;
  var params = {
    q: query,
    limit: 10,
    api_key: "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB",
    fmt: "json"

    
    queryURL = "https://api.giphy.com/v1/gifs/trending?";

    // https://api.giphy.com/v1/gifs/     search?q=Meme%27s&limit=10&       api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json
// https://api.giphy.com/v1/gifs/    search?q=Internet%20Cats&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json
// https://api.giphy.com/v1/gifs/   ${this.val}                       api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json


   
    */
