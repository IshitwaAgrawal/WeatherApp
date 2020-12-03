import React from 'react'
// import * as actionTypes from '../../store/actions'
import { connect } from 'react-redux'

function WeatherComponent({ hourly ,time, max, min, weather, icon, isCelcius, timezone_offset, temp, windSpeed, humidity}) {

    const getTime = (time) => {
        var date = new Date((time+timezone_offset)*1000);
        var day = date.toUTCString().substring(0,3);
        return day;
    } 

    const getDate = (time) => {
        var date = new Date((time+timezone_offset)*1000);
        var day = date.toUTCString().substring(0,11);
        var time2 = date.toUTCString().substring(17,22);
        return day+" ,"+time2;
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
                <img className="weathercomponent__icon-hourly" src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />
                <div className="weathercomponent__temp">
                    <h3 className="weathercomponent__temp__max">{convertTemp(temp)}&deg;</h3>
                </div>
                <p className="weathercomponent__weathertype-hourly">{weather}</p>
                <p className="weathercomponent-hourly__rain">
                    {humidity}%
            </p>
                <p className="weathercomponent-hourly__wind">
                    {windSpeed} km/h
            </p>
                <p className="weathercomponent-hourly__time">
                    {getDate(time)}
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
