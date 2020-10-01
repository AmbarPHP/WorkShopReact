import React from "react";

import './Calendario.css';



const Header =()=>{

    
    return (
        <div className="HeaderCont"> 
            <div className="headerLeft">           
                <button className="buttonToday">Today</button>
                <button className="buttonBack">Back</button>
                <button className="buttonNext">Next</button>
            </div>
            <div className="headerCenter">  
            {/* <div> <Moment date={dateToFormat} /></div> */}
            </div>
            <div className="headerRight">   
            {/* <button className="buttonToday" onClick={() => updateMonthCalendar}>Mes</button> */}
            <button className="buttonBack" >Week</button>
            <button className="buttonNext">Day</button>
            </div>
        </div>
    );
}
export default Header;