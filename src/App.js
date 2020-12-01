import './App.css';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import DailyWeather from './container/DailyWeather/DailyWeather';
import HourlyWeather from './container/HourlyWeather/HourlyWeather';

function App({counter,onToggle}) {
  return (
    <div className="app">
      <Header />
      <CurrentWeather />
      <DailyWeather />
      <HourlyWeather />
        {/* 
          Day Details
            Sunrise
              icon temperature
            Sunset
              icon temperature

            Precipitaion , Humidity, UV Index, Max Wind with direction
        */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter:state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch({type:actionTypes.INCREMENT_COUNTER})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
