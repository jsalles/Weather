var axios = require('axios');

var _baseURL = 'https://api.apixu.com/v1/';
var _APIKEY = 'f7f803749d2b40f9a3002159172604';

//key=f7f803749d2b40f9a3002159172604&q=s%C3%A3o%20paulo,%20sp

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&');
}

function prepUrl (type, queryStringData) {
  return _baseURL + type + '.json?' + prepRouteParams(queryStringData);
}

function getQueryStringData (coordinates) {
  return {
    q: coordinates.lat + ',' + coordinates.lng,
    key: _APIKEY,
    days: 5
  };
}

function getForecast (coordinates) {
  var url = prepUrl('forecast', getQueryStringData(coordinates));

  return axios.get(url)
    .then(function (weatherData) {
      return weatherData.data.forecast.forecastday.map(function (day) {
        return {
          datetime: day.date_epoch,
          iconSrc: day.day.condition.icon,
          minTemp: day.day.mintemp_c,
          maxTemp: day.day.maxtemp_c,
          description: day.day.condition.text,
          humidity: day.day.avghumidity
        }
      })
    });
}

module.exports = {
  getWeekForecast: getForecast
}