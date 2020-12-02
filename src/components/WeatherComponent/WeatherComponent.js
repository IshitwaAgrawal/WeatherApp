import React from 'react'
// import * as actionTypes from '../../store/actions'
import { connect } from 'react-redux'

function WeatherComponent({ hourly ,time, max, min, weather, icon, isCelcius, timezone_offset}) {

    const getTime = (time) => {
        var date = new Date((time+timezone_offset)*1000);
        var day = date.toUTCString().substring(0,3);
        // var time = date.toUTCString().substring(17,22);
        return day;
    } 

    const convertTemp = temp => {
        const t = Math.round(temp-273);
        if(isCelcius){
            return t;
        }
        else{
            const f = Math.round((t*(9/5))+32);
            return f;
        }
    }

    return !hourly ? (
        <div className="weathercomponent">
            {/* each weather tile ->
              date
              icon
              max min
              weather condition */}
            <p className="weathercomponent__date">{getTime(time)}</p>
            <img className="weathercomponent__icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />
            <div className="weathercomponent__temp">
                <h3 className="weathercomponent__temp__max">{convertTemp(max)}&deg;</h3>
                <h5 className="weathercomponent__temp__min">{convertTemp(min)}&deg;</h5>
            </div>
            <p className="weathercomponent__weathertype">{weather}</p>
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
                <img className="weathercomponent__icon-hourly" src="http://openweathermap.org/img/w/50n.png" alt="icon" />
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

const mapStateToProps = state => {
    return {
        isCelcius:state.isCelcius,
        timezone_offset:state.timezone_offset
    }
  }
  
// const mapDispatchToProps = dispatch => {
//     return {
//         onToggle: () => dispatch({type:actionTypes.SET_DATA})
//     }
// }

export default connect(mapStateToProps,null)(WeatherComponent)
