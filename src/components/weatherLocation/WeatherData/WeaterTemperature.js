import React from 'react';
import PropTypes from 'prop-types';



const getWeatherIcon = (weatherState) =>{

    const sizeIcon="4x";
    
    if(weatherState)
        return <i className={weatherState} size={sizeIcon} ></i>
    else 
        return <i className="wi wi-night-sleet" size={sizeIcon}></i>
}

const WeatherTemperature = ({temperature, weatherState}) =>(
    <div className="weatherTemperatureCont"> 
        {getWeatherIcon(weatherState)}
<span className="temperature">{`${temperature} `}</span>  
<span className="temperatureType">{`C`}</span>  
    </div>

);

//aqui ponemos la validacion de tipos esperados

WeatherTemperature.propTypes ={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}
export default WeatherTemperature; 