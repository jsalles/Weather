var React = require('react');
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var ZipCode = require('./ZipCode');
var Forecast = require('./Forecast');
var Details = require('./Details');

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Route render={function (props) {
            return (
              <div className='navbar'>
                <h2 onClick={function () {
                  props.history.push({
                    pathname: '/'
                  })
                }}>
                  Pr3visão de Tempo
                </h2>
                <ZipCode 
                  flowDirection='row'
                  onSubmitZipcode={function (cityName) {
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + cityName
                    })
                  }} />
              </div>
            );
          }} />
        
          <Route exact path='/' render={function (props) {
            return (
              <div 
                className='home-container'
                style={{backgroundImage: "url('/images/pattern.svg')"}}>
                <h1 className='header'>Digite seu endereço ou cidade</h1>
                <ZipCode onSubmitZipcode={function (cityName) {
                  props.history.push({
                    pathname: 'forecast',
                    search: '?city=' + cityName
                  })
                }}/>
              </div>
            );
          }} />
          
          <Route path='/forecast' component={Forecast} />
          <Route path='/details/:city' component={Details} />
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;
