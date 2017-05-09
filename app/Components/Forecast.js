var React = require('react');
var queryString = require('query-string');
var WeatherApi = require("../Utils/WeatherApi");
var GoogleApi = require('../Utils/GoogleApi');
var DayItem = require('./DayItem');

class Forecast extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      forecast: null,
      loading: true
    }

    this.makeRequest = this.makeRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }
  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }
  makeRequest(cityName) {
    this.setState(function () {
      return {
        loading: true
      }
    });

    GoogleApi.getCoordinates(cityName)
      .then((coordinates) => {
        WeatherApi.getWeekForecast(coordinates)
          .then((forecast) => {
            this.setState(function () {
              return {
                forecast: forecast,
                loading: false
              }
            });
          });
      });
  }
  handleClick (day) {
    day.city = this.city;
    this.props.history.push({
      pathname: '/details/' + this.city,
      state: day
    })
  }
  render () {
    if (this.state.loading === true) {
      return (<p>Loading</p>);
    } else {
      return (
        <div>
          <h1 className='forecast-header'>{this.city}</h1>
          <div className='forecast-container'>
          {this.state.forecast.map((day) => {
            return (
              <DayItem 
                day={day}
                key={day.datetime}
                onClick={
                  this.handleClick.bind(this, day)
                } />
            )
          })}
          </div>
        </div>
      );
    }    
  }
};

module.exports = Forecast;
