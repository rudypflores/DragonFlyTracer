// DragonFlyTracer Twitter location query 

// Twitter API Authentication
var Twitter = require('twitter');
var util = require("util");
var client = new Twitter({
 consumer_key: 'KtwuS28YRw1ulNFICMdjx0JSW',
 consumer_secret: '0ef0oA14mZo6nGJlQcoa2NMyA26GbkiN8E84Y37ntL6OqB5x5R',
 access_token_key: '834586495864406016-D4pNprBid3bljvxUIvjdRz0EaKzGesf',
 access_token_secret: 'Ru5GuNX42uo5vRUyKroo0oeex00RYIrup26U442Wii4ry'
});


/* Queries most recent tweets on Twitter containing specified keyword. Stores location of each
   user in output.txt. */

let result = [];

function getTweetLocation (keyword) {
    const parameters = {q: keyword, result_type: "recent", lang: "en", count: 100} 
    client.get('search/tweets', parameters, (error, tweets, response) => {
        if (!error) {
            for (var i = 0; i < tweets.statuses.length; i++) {
                let location = tweets.statuses[i].user.location;
                if (location != '' && location != null && location != undefined) {
                    //console.log(location);
                    result.push(location);
                }
            }
            var fs = require('fs');
            var stream = fs.createWriteStream("output.txt");
            stream.once('open', function(fd) {
            for (var i = 0; i < result.length; i++) {
                if (i == result.length-1) stream.write(result[i]);
                else stream.write(result[i] + "\n");
            }
            stream.end();});
        }
    });
}

getTweetLocation("twitter");
// getTweetLocation("caturday");
// getTweetLocation("coffee");