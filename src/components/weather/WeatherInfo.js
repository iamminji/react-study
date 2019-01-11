import React, {Component} from 'react';


class WeatherInfo extends Component {
    
    componentDidMount() {
        console.log("weather info mount")
    }
    
    render() {
        return (
            <div>
                WeatherInfo
            </div>
        );
    }
}

export default WeatherInfo;