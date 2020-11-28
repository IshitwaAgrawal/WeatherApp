import React from 'react'

function CurrentWeather() {
    return (
        <div className="currentweather">
            {/* current weather 
              icon temperature c/f
              climate condition
              updated as of
              feels like  wind  visibility
              barometer  humidity  dew point
            */}
            <p className="currentweather__location">Chandausi, Up</p>
            <div className="currentweather__main">
                <img src="http://openweathermap.org/img/w/50n.png" alt="icon"/>
                <h1>20&deg;</h1>
                <div className="currentweather__main__tempconvert">
                    <button className="">C</button>
                    <button className="">F</button>
                </div>
            </div>
            <p className="currentweather__tempcondition">Fair</p>
            <h4 className="currentweather__updatetime">Updated as of 19:34</h4>
            <div className="currentweather__weatheritems">
                <div>
                    <p>Feels like  19&deg;</p>
                    <p>Wind  0km/h</p>
                    <p>Visibility  2km</p>
                </div>
                <div>
                    <p>Barometer  1016.00 mb</p>
                    <p>Humidity  67%</p>
                    <p>Dew Point  14&deg;</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather
