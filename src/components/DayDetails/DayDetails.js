import React from 'react'

function DayDetails() {
    return (
        <div className="daydetails">
            {/* 
          Day Details
            Sunrise
              icon temperature
            Sunset
              icon temperature

            Precipitaion , Humidity, UV Index, Max Wind with direction
        */}
            <h1>Day Details</h1>
            <div className="daydetails__items">
                <div className="daydetails__items__temp">
                    <div className="daydetails__items__temp-max">
                        <h2>SUNRISE</h2>
                        <div>
                            <img src="http://openweathermap.org/img/w/50n.png" />
                            <h2>06:10</h2>
                        </div>
                    </div>
                    <div className="daydetails__items__temp-min">
                        <h2>SUNSET</h2>
                        <div>
                            <img src="http://openweathermap.org/img/w/50n.png" />
                            <h2>17:30</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DayDetails
