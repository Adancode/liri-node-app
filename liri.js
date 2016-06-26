var keys = require('./keys.js');
var request = require('request');
var Twitter = require('twitter');
var fs = require('fs');
var client = new Twitter({
 consumer_key: 'keys.twitterKeys.consumer_key',
 consumer_secret: 'keys.twitterKeys.consumer_secret',
 access_token_key: 'keys.twitterKeys.access_token_key',
 access_token_secret: 'keys.twitterKeys.access_token_secret'
});
var params = {count: 20};
var argOne = process.argv[2];
var argTwo = process.argv[3] ;
var spotify = require('spotify');

/*console.log(keys.twitterKeys.consumer_key);
console.log(keys.twitterKeys.consumer_secret);
console.log(keys.twitterKeys.access_token_key);
console.log(keys.twitterKeys.access_token_secret);*/

/*if (argOne === "my-tweets") {
     client.get('statuses/user_timeline', params, function(error, tweets, response){
          console.log(JSON.stringify(tweets, null, 2));
          if (!error) {
            console.log(tweets);
          }
     });
}*/

if (process.argv[2] === "spotify-this-song") {
     
	}

/*if (process.argv[2] === "movie-this") {

}

if (process.argv[2] === "do-what-it-says") {

}*/

/*

this is loaded
{ twitterKeys:
   { consumer_key: 'b0QvTFIni6eN1EMtZnCW2l1Ox',
     consumer_secret: 'oa3tHBMjHWkV3h2wPQG6Q94ovnaZd6fPxGr7cMjaWPhYah71ou',
     access_token_key: '2583792360-syzszosIqpyFPu8McI0GW1bFn5V4TrVuM505Gj2',
     access_token_secret: 'to5iI8Jd7UWhzV8U4qMPxZ5MlX4Iv4HjJKMJGGJQe7XKn' } }

*/
