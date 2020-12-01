import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

function Header({city,changeCity}) {

    const [searchCity,setSearchCity] = useState(city);

    const change_city = () =>{
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
                        e.preventDefault();
                        change_city(searchCity);
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
        changeCity : (data) => dispatch({action:actionTypes.SET_CITY,city:data}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
