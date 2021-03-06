const request = require('request');
const config = require('../config.js');

let getReposByUsername = ( username => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info.stargazers_count + " Stars");
      console.log(info.forks_count + " Forks");
    }
  }

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/${username}/repo`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, callback);

});


module.exports.getReposByUsername = getReposByUsername;