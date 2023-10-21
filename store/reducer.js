import * as actionTypes from './actions';

const initialState = {
    city:"Delhi",
    current:null,
    daily:null,
    hourly:null,
    coordinates:null,
    timezone_offset:0,
    isCelcius:true,
    isLoading:true
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.SET_TIMEZONE_OFFSET:{
            return {
                ...state,
                timezone_offset:action.timezone_offset
            }
        }
        case actionTypes.SET_CITY:{
            return {
                ...state,
                city:action.city
            }
        }
        case actionTypes.SET_CURRENT_DATA:{
            return {
                ...state,
                current:action.payload
            }
        }
        case actionTypes.SET_DAILY_DATA:{
            return {
                ...state,
                daily:action.payload
            }
        }
        case actionTypes.SET_HOURLY_DATA:{
            return {
                ...state,
                hourly:action.payload
            }
        }
        case actionTypes.SET_COORDINATES:{
            return {
                ...state,
                coordinates:action.payload
            }
        }
        case actionTypes.CHANGE_TEMP_UNIT:{
            return {
                ...state,
                isCelcius:!state.isCelcius
            }
        }
        case actionTypes.TOGGLE_LOADING:{
            return {
                ...state,
                isLoading:action.status
            }
        }
        default:{
            return state;
        }
    }
}

export default reducer;