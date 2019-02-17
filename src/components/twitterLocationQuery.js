var Twitter = require('twitter');
var util = require("util");

var client = new Twitter({
 consumer_key: 'KtwuS28YRw1ulNFICMdjx0JSW',
 consumer_secret: '0ef0oA14mZo6nGJlQcoa2NMyA26GbkiN8E84Y37ntL6OqB5x5R',
 access_token_key: '834586495864406016-D4pNprBid3bljvxUIvjdRz0EaKzGesf',
 access_token_secret: 'Ru5GuNX42uo5vRUyKroo0oeex00RYIrup26U442Wii4ry'
});

/* 
    Parses most recent tweets containing query ( q: "twitter" ) and returns user location
*/

const parameters = {q: "twitter", result_type: "recent", lang: "en", count: 100} 
let results = [];

// Doesn't work
function storeValues(value){
    results.push(value);
}

function myFunc() {
    
    client.get('search/tweets', parameters, (error, tweets, response) => {
        if (!error) {
            for (var i = 0; i < tweets.statuses.length; i++) {
                let location = tweets.statuses[i].user.location;
                if (location != ''  && location != null && location != undefined) {
                    storeValues(location);
                    console.log(location);
                }
            }
        }
    });
}

myFunc();
//console.log(results);

