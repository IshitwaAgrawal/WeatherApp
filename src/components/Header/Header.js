import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

function Header({city,changeCity,toggleLoading}) {

    const [searchCity,setSearchCity] = useState(city);

    const change_city = (e) =>{
        e.preventDefault();
        toggleLoading(true);
        changeCity(searchCity);
    }

    return (
        <form>
            <div className="header">
                <h1 className="header__heading">Weather App</h1>
                <input 
                    type="text" 
                    value={searchCity} 
                    className="header__input" 
                    placeholder="Search" 
                    onChange={(e)=> setSearchCity(e.target.value)}
                />
                <button 
                    className="header__button"
                    type="submit" 
                    onClick={(e) => {
                        change_city(e);
                        }
                    }></button>
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        city:state.city,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        changeCity : (data) => dispatch({type:actionTypes.SET_CITY,city:data}),
        toggleLoading: (data) => dispatch({type:actionTypes.TOGGLE_LOADING,status:data})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
