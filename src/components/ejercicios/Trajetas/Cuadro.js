import React from 'react';
import data from './Data.js';
import Tarjeta from './Tarjeta'


const Cuadrado =()=>{

    const datos= data;

return (
    <div className="CuadroCont">
      {datos.map((item, index) => (
        <Tarjeta key={index} data={item} />
      ))}
    </div>
  );
}

export default Cuadrado;