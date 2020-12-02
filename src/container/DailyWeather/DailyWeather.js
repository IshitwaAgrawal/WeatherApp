import React from 'react'
import WeatherComponent from '../../components/WeatherComponent/WeatherComponent';
import {connect} from 'react-redux'
// import { Caraousel } from 'react-responsive-carousel'

function DailyWeather({daily}) {
    return (
        <div className="dailyweather">
            <h1>Daily</h1>
            <div className="dailyweather__items">
                {
                    daily?.map(day => {
                        return <WeatherComponent key={day.dt} time={day.dt} max={day.temp.max} min={day.temp.min} weather={day.weather[0].main} icon={day.weather[0].icon} />
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        daily:state.daily,
    }
}

export default connect(mapStateToProps,null)(DailyWeather)
