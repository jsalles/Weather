var React = require('react');
var PropTypes = require('prop-types');

class ZipCode extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      zipcode: ''
    }

    this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this);
    this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this);
  }
  handleSubmitZipcode () {
    var zipcode = this.state.zipcode === '' ? 'São José dos Campos, SP' : this.state.zipcode;
    this.props.onSubmitZipcode(zipcode);

    this.setState(function () {
      return {
        zipcode: ''
      };
    });
  }
  handleUpdateZipcode (event) {
    var zip = event.target.value;

    this.setState(function () {
      return {
        zipcode: zip
      }
    });
  }
  render() {
    return ( 
      <div 
        className='zipcode-container'
        style={{flexDirection: this.props.flowDirection}}>
        <input 
          className='form-control'
          type='text' 
          placeholder='São José dos Campos, SP'
          onChange={this.handleUpdateZipcode}
          value={this.state.zipcode} />
        <button
          className='btn btn-success'
          onClick={this.handleSubmitZipcode}>
            Get Weather
        </button>
      </div>
    )
  }
};

ZipCode.defaultProps = {
  flowDirection: 'column'
}

ZipCode.propTypes = {
  flowDirection: PropTypes.string.isRequired
}

module.exports = ZipCode;