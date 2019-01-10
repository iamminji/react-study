import {
    CLOUD,
    SUNNY,
    RAIN,
} from '../actions'


function weatherInfo(state = {}, action) {
    switch (action.type) {
        case CLOUD:
            return state;
        case SUNNY:
            return state;
        case RAIN:
            return state;
        default:
            return state;
    }
}
