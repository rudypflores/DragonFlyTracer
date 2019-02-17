var Twitter = require('twitter');
var util = require("util");

var client = new Twitter({
 consumer_key: 'KtwuS28YRw1ulNFICMdjx0JSW',
 consumer_secret: '0ef0oA14mZo6nGJlQcoa2NMyA26GbkiN8E84Y37ntL6OqB5x5R',
 access_token_key: '834586495864406016-D4pNprBid3bljvxUIvjdRz0EaKzGesf',
 access_token_secret: 'Ru5GuNX42uo5vRUyKroo0oeex00RYIrup26U442Wii4ry'
});

// Change count to get more tweets
client.get('search/tweets', { q:'twitter', result_type: 'recent', count: 5}, function(error, tweets, response) {
 if (!error) {
   
    console.log(tweets[0].statuses.user.location);

   
 }
});




