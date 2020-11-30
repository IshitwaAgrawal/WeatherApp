import React from 'react'

function WeatherComponent() {
    return (
        <div className="weathercomponent">
            {/* each weather tile ->
              date
              icon
              max min
              weather condition */}
            <p className="weathercomponent__date">Mon 30</p>
            <img className="weathercomponent__icon" src="http://openweathermap.org/img/w/50n.png" alt="icon"/>
            <div className="weathercomponent__temp">
                <h3>25&deg;</h3>
                <h5>10&deg;</h5>
            </div>
            <p className="weathercomponent__weathertype">Sunny</p>
        </div>
    )
}

export default WeatherComponent
