import React from 'react'
import WeatherComponent from '../../components/WeatherComponent/WeatherComponent';

function HourlyWeather() {
    return (
        <div className="dailyweather">
            <h1>Hourly</h1>
            <div className="dailyweather__items">
                <WeatherComponent hourly />
                <WeatherComponent hourly />
                <WeatherComponent hourly />
                <WeatherComponent hourly />
                <WeatherComponent hourly />
                <WeatherComponent hourly />
                <WeatherComponent hourly />
            </div>
        </div>
    )
}

export default HourlyWeather
