import React from 'react';

import Menu from "../components/Menu";
import {WeatherContainer} from "../containers"


const App = () => {
    return (
        <div>
            <Menu/>
            <WeatherContainer/>
        </div>
    )
    
};

export default App;