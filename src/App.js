import './App.css';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import { useEffect } from 'react';
import axios from './axios';
import Layout from './container/Layout/Layout';
import Loading from './container/Loading/Loading';


function App({city,isLoading,setCurrentData,setDailyData,setHourlyData,setCoordinates,setTimezoneOffset,toggleLoading}) {

  useEffect(()=>{
    axios.get(`getWeatherData/${city}`)
      .then((res) => {
        if(isLoading) toggleLoading(false);
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
    <div>
      {isLoading ? <Loading /> : <Layout />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    city:state.city,
    isLoading:state.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentData: (data) => dispatch({type:actionTypes.SET_CURRENT_DATA,payload:data}),
    setDailyData: (data) => dispatch({type:actionTypes.SET_DAILY_DATA,payload:data}),
    setHourlyData: (data) => dispatch({type:actionTypes.SET_HOURLY_DATA,payload:data}),
    setCoordinates: (data) => dispatch({type:actionTypes.SET_COORDINATES,payload:data}),
    setTimezoneOffset: (data) => dispatch({type:actionTypes.SET_TIMEZONE_OFFSET,timezone_offset:data}),
    toggleLoading: (data) => dispatch({type:actionTypes.TOGGLE_LOADING,status:data}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
