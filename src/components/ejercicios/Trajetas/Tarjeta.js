import React from 'react';
import './Tarjeta.css';
import data from './Data';

const Tarjeta = ({data}) => {

    const {
        first_name, 
        last_name,
        email,
        gender,
        country,
        avatar} =data;
    return (

        <div className = "TarjetaCont" >
            <div className = "ImgCont" > 
            <img src={avatar} alt={gender}></img>
            </div> 
            <div className = "ContenidoCont" >
                <span>{first_name} </span>
                <span>{last_name}</span>
                <span>{email}</span>
                <span>{country}</span>
                </div> 
            <div className = "ExtraInfoCont" >extra info</div> 
        </div>
    );
    
}

export default Tarjeta;