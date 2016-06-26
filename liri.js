var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var fs = require('fs');
var client = new twitter({
 consumer_key: 'keys.twitterKeys.consumer_key',
 consumer_secret: 'keys.twitterKeys.consumer_secret',
 access_token_key: 'keys.twitterKeys.access_token_key',
 access_token_secret: 'keys.twitterKeys.access_token_secret'
});
var params = {count: 2};
var argOne = process.argv[2];

/*console.log(keys.twitterKeys.consumer_key);
console.log(keys.twitterKeys.consumer_secret);
console.log(keys.twitterKeys.access_token_key);
console.log(keys.twitterKeys.access_token_secret);*/

if (argOne === "my-tweets") {
     client.get('statuses/user_timeline', params, function(error, tweets, response){
     //if(error) throw error;
     //console.log(tweets);  // The favorites.
     /*tweets.forEach(function(tweet) {
			count++;
			console.log(count + ': ' + tweet.text + '\n');
			fs.appendFile("log.txt", count + ': ' + tweet.text + '\n', function(err) {
				if (err) throw err;
			});
		});*/
          console.log(error);
     //console.log(JSON.stringify(response, null, 5));  // Raw response object.
});
}

if (process.argv[2] === "spotify-this-song") {

}

if (process.argv[2] === "movie-this") {

}

if (process.argv[2] === "do-what-it-says") {

}

/*

this is loaded
{ twitterKeys:
   { consumer_key: 'b0QvTFIni6eN1EMtZnCW2l1Ox',
     consumer_secret: 'oa3tHBMjHWkV3h2wPQG6Q94ovnaZd6fPxGr7cMjaWPhYah71ou',
     access_token_key: '2583792360-syzszosIqpyFPu8McI0GW1bFn5V4TrVuM505Gj2',
     access_token_secret: 'to5iI8Jd7UWhzV8U4qMPxZ5MlX4Iv4HjJKMJGGJQe7XKn' } }

*/
