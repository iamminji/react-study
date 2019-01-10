import React from 'react';

import {Route} from "react-router-dom";

import {
    WeatherResult,
    DustResult
} from '../components'
import Menu from "../components/Menu";


const App = () => {
    return (
        <div>
            <Menu/>
            <Route exact path="/:data?" component={WeatherResult}/>
            <Route path="/response" component={DustResult}/>
        </div>
    )
    
};

export default App;