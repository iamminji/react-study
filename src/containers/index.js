import {connect} from "react-redux";

import {Weather} from "../components";
import {weatherAPI} from "../actions";


// connect reducer and store instead of subscribe

export const WeatherContainer = connect(
    state => ({
        info: state.info,
    }),
    dispatch => ({
        // Component 에서 사용할 함수 작성
        RequestWeatherAPI(info) {
            dispatch(weatherAPI(info))
        }
        
    }))(Weather);
