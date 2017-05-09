var React = require('react');
var DayItem = require('./DayItem');

class Details extends React.Component {
  render () {
    var props = this.props.location.state;
    return (
      <div>
        <DayItem day={props} />
        <div className='description-container'>
            <p>{props.city}</p>
            <p>{props.description}</p>
            <p>min temp: {props.minTemp}°C</p>
            <p>max temp: {props.maxTemp}°C</p>
            <p>humidity: {props.humidity}%</p>
          </div>
      </div>
    );
  }
};

module.exports = Details;