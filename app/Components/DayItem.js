var React = require('react');
var helpers = require('../Utils/helpers');

class DayItem extends React.Component {
  render () {
    return (
      <div 
        className='dayContainer'
        onClick={this.props.onClick}>
        <img
          className='weather' 
          alt='Weather Icon'
          src={this.props.day.iconSrc} />
        <h2 className='subheader'>{helpers.getDate(this.props.day.datetime)}</h2>
      </div>
    );
  }
}

module.exports = DayItem;