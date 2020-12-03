import React from 'react'
import Header from '../../components/Header/Header';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import DailyWeather from '../DailyWeather/DailyWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
// import DayDetails from '../../components/DayDetails/DayDetails';

function Layout() {
    return (
        <div className="app">
            <Header />
            <CurrentWeather />
            <DailyWeather />
            <HourlyWeather />
            {/* <DayDetails /> */}
        </div>
    )
}

export default Layout
