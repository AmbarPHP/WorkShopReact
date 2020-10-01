import React from 'react'

const profile = (nombre, email) =>{
    return (
    <div> 
        <h2>{nombre}</h2>
        <a href={`mailto:${email}`}> {email} </a>
    </div>);
}
export default profile;