import React from 'react'
import WeatherComponent from '../../components/WeatherComponent/WeatherComponent';
// import { Caraousel } from 'react-responsive-carousel'

function DailyWeather() {
    return (
        <div className="dailyweather">
            <h1>Daily</h1>
            <div className="dailyweather__items">
                <WeatherComponent />
                <WeatherComponent />
                <WeatherComponent />
                <WeatherComponent />
                <WeatherComponent />
            </div>
        </div>
    )
}

export default DailyWeather
