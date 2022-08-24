import { Config } from "./common/config.js";
import { Gifs } from "./modules/home.js"

let btnTrending = document.getElementById('trendingId');

let trendingVal = 'trending?limit=10&'
let config = new Config(trendingVal);

btnTrending.addEventListener('click', () =>  {
    console.log(config.getbaseUrl())
    fetch(config.getbaseUrl()).then(resp => resp.json()).then( (res) => {
        let gif = new Gifs(res.data);
        console.log(gif, res)
    })
}
)
 
//

//https://api.giphy.com/v1/gifs/trending?limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json
