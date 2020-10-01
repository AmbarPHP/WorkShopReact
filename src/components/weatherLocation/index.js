import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'

import * as weathers from '../constants/weathers';
// {weathers.WIND}

const data = {
   temperature:5,
   weatherState:weathers.WIND,
   humidity:10,
   wind:'10 m/s'
}

const WeatherLocation = () =>(
   <div className="weatherLocationCont">
    <Location city="Santiago"></Location>
    <WeatherData data={data}></WeatherData>
   </div>
   )

export default WeatherLocation;