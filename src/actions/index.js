// 애플리케이션에서 사용하는 명령어와 액션 생성자를 모아 놓음

import axios from 'axios'

// constants
const WEATHER_API = 'https://jsonplaceholder.typicode.com/todos/1';

// action
export const REQUEST_WEATHER_API = 'REQUEST_WEATHER_API';
export const RESPONSE_WEATHER_API = 'RESPONSE_WEATHER_API';


function requestWeatherAPI() {
    return {
        type: REQUEST_WEATHER_API
    }
}

function responseSuccessWeatherAPI(day, info) {
    return {
        type: RESPONSE_WEATHER_API,
        day: day,
        info: info
    }
}

function responseFailedWeatherAPI(day, info) {
    return {
        type: RESPONSE_WEATHER_API,
        day: day,
        info: info
    }
}

export const weatherAPI = info => dispatch => {
    dispatch(requestWeatherAPI());
    
    const date = new Date();
    
    return axios.get(WEATHER_API)
        .then(response => {
                dispatch(responseSuccessWeatherAPI(date.getDay(), response));
                console.log("success!!!");
            }
        ).catch(err => {
                dispatch(responseFailedWeatherAPI(date.getDay(), err));
                console.log("fail!!!!!!!!!!!!!!!!11");
            }
        )
};
