// 애플리케이션에서 사용하는 명령어와 액션 생성자를 모아 놓음


// constants
const WEATHER_API = 'https://jsonplaceholder.typicode.com/todos/1';

// weather
export const CLOUD = 'CLOUD';
export const SUNNY = 'SUNNY';
export const RAIN = 'RAIN';

// action
export const REQUEST_WEATHER_API = 'REQUEST_WEATHER_API';
export const RESPONSE_WEATHER_API = 'RESPONSE_WEATHER_API';


function requestWeatherAPI() {
    return {type: REQUEST_WEATHER_API}
}

function responseWeatherAPI(data) {
    return {type: RESPONSE_WEATHER_API, data}
}

export const fetchAPI = info => dispatch => {
    dispatch(requestWeatherAPI());
    return fetch(WEATHER_API + info)
        .then(resp => dispatch(responseWeatherAPI(resp)))
};