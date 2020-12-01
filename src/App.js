import './App.css';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import DailyWeather from './container/DailyWeather/DailyWeather';
import HourlyWeather from './container/HourlyWeather/HourlyWeather';
import DayDetails from './components/DayDetails/DayDetails';
import { useEffect } from 'react';
import axios from './axios';

function App({city,setCurrentData,setDailyData,setHourlyData,setCoordinates,setTimezoneOffset}) {

  useEffect(()=>{
    axios.get(`getWeatherData/${city}`)
      .then((res) => {
        console.log(res.data);
        setCurrentData(res.data.current);
        setDailyData(res.data.daily);
        setHourlyData(res.data.hourly);
        setCoordinates({lat:res.data.lat,lon:res.data.lon});
        setTimezoneOffset(res.data.timezone_offset);
      })
      .catch((err) => {
        console.log(err);
      })
  },[city,setCurrentData,setDailyData,setHourlyData,setCoordinates,setTimezoneOffset]);


  return (
    <div className="app">
      <Header />
      <CurrentWeather />
      <DailyWeather />
      <HourlyWeather />
      <DayDetails />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    city:state.city
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentData: (data) => dispatch({type:actionTypes.SET_CURRENT_DATA,payload:data}),
    setDailyData: (data) => dispatch({type:actionTypes.SET_DAILY_DATA,payload:data}),
    setHourlyData: (data) => dispatch({type:actionTypes.SET_HOURLY_DATA,payload:data}),
    setCoordinates: (data) => dispatch({type:actionTypes.SET_COORDINATES,payload:data}),
    setTimezoneOffset: (data) => dispatch({type:actionTypes.SET_TIMEZONE_OFFSET,timezone_offset:data}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
