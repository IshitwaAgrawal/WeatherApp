import React from 'react'

function WeatherComponent({hourly}) {
    return !hourly ? (
        <div className="weathercomponent">
            {/* each weather tile ->
              date
              icon
              max min
              weather condition */}
            <p className="weathercomponent__date">Mon 30</p>
            <img className="weathercomponent__icon" src="http://openweathermap.org/img/w/50n.png" alt="icon"/>
            <div className="weathercomponent__temp">
                <h3 className="weathercomponent__temp__max">25&deg;</h3>
                <h5 className="weathercomponent__temp__min">10&deg;</h5>
            </div>
            <p className="weathercomponent__weathertype">Sunny</p>
        </div>
    ) :
    (
        <div className="weathercomponent weathercomponent-hourly">
                {/* 
            caraousel Hourly forecast
                each weather tile ->
                weather icon
                temperature
                weather condition
                humidity
                wind speed+direction
                time
            */}
            <img className="weathercomponent__icon-hourly" src="http://openweathermap.org/img/w/50n.png" alt="icon"/>
            <div className="weathercomponent__temp">
                <h3 className="weathercomponent__temp__max">12&deg;</h3>
            </div>
            <p className="weathercomponent__weathertype-hourly">Clear</p>
            <p className="weathercomponent-hourly__rain">
                0%
            </p>
            <p className="weathercomponent-hourly__wind">
                8 km/h
            </p>
            <p className="weathercomponent-hourly__time">
                01:00
            </p>
        </div>
    )
}

export default WeatherComponent
