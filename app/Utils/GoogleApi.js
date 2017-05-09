var axios = require('axios');

var apiKey = 'AIzaSyBeD6qyJRg2CIHNkD-8dLrYVWeJMp1xO3w';
var baseUrl = 'https://maps.googleapis.com/maps/api/geocode/';

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&');
}

function prepUrl (queryStringData) {
  return baseUrl + 'json?' + prepRouteParams(queryStringData);
}

function getQueryStringData (cityName) {
  return {
    address: cityName,
    key: apiKey
  }
}

function getCoordinates (cityName) {
  var queryStringData = getQueryStringData(cityName);
  var url = prepUrl(queryStringData);

  return axios.get(url)
    .then(function (geolocationData) {
      return geolocationData.data.results[0].geometry.location;
    });
}

module.exports = {
  getCoordinates: getCoordinates
}