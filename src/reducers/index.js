import {RESPONSE_WEATHER_API, REQUEST_WEATHER_API} from '../actions'


const initialState = {
    "day": "",
    "temp": 0
};


function weatherInfo(state = initialState, action) {
    switch (action.type) {
        case RESPONSE_WEATHER_API:
            return {
                ...state,
                day: action.day,
                info: action.info
            };
        default:
            return state;
    }
}

export default weatherInfo;