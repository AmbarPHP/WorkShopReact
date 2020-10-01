import React from 'react';
import WeatherTemperature from './WeaterTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
//Importacion implicita vs explicita {CLOUD, WIND, ...}

import './styles.css';



const WeatherData = ({data})=>{

    const { temperature, weatherState, humidity, wind}= data;
    return (
        
        <div className="weatherDataCont"> 
        <WeatherTemperature  temperature={temperature} weatherState={weatherState}></WeatherTemperature>
        <WeatherExtraInfo    humidity={humidity} wind={wind}></WeatherExtraInfo> 
        </div>
    );
}

    


export default WeatherData;