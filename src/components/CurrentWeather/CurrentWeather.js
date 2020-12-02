import React from 'react'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions'

function CurrentWeather({city,current,timezone_offset,isCelcius,toggleTempUnit}) {

    const getTime = (time) => {
        var date = new Date((time+timezone_offset)*1000);
        return date.toUTCString().substring(17,22);
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

    const toggle_TempUnit = (from) => {
        if(from === 1){
            if(!isCelcius){
                toggleTempUnit();
            }
        }
        else{
            if(isCelcius){
                toggleTempUnit();
            }
        }
    }


    return (
        <div className="currentweather">
            <p className="currentweather__location">{city}</p>
            <div className="currentweather__main">
                <img className="currentweather__main__icon" src={`https://openweathermap.org/img/w/${current?.weather[0]?.icon}.png`} alt="icon"/>
                <h1>{convertTemp(current?.temp)}&deg;</h1>
                <div className="currentweather__main__tempconvert">
                    <button onClick={()=>toggle_TempUnit(1)} className={isCelcius?"active":""}>C</button>
                    <button onClick={()=>toggle_TempUnit(2)} className={isCelcius?"":"active"}>F</button>
                </div>
            </div>
            <p className="currentweather__tempcondition">{current?.weather[0].main}</p>
            <h4 className="currentweather__updatetime">Updated as of {getTime(current?.dt)}</h4>
            <div className="currentweather__weatheritems">
                <div>
                    <p>Feels like  {convertTemp(current?.feels_like)}&deg;</p>
                    <p>Wind  {current?.wind_speed}km/h</p>
                    <p>Visibility  {current?.visibility}m</p>
                </div>
                <div>
                    <p>Barometer  {current?.pressure} mb</p>
                    <p>Humidity  {current?.humidity}%</p>
                    <p>Dew Point  {convertTemp(current?.dew_point)}&deg;</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        city:state.city,
        current:state.current,
        timezone_offset:state.timezone_offset,
        isCelcius:state.isCelcius,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTempUnit: () => dispatch({type:actionTypes.CHANGE_TEMP_UNIT})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrentWeather)
