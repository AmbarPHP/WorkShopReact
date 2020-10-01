import React from 'react';
import './Calendario.css';
import moment from 'moment'




const getFirstDayOfMonth = (date) => {
    let firstDay = moment(date).startOf("month").format("d"); 
    return firstDay;
 };
 
 const getDaysInAMonth=()=>{
   const date = new Date();
   return moment(date).daysInMonth();
 }
 

 
 
 const updateMonthCalendar= ()=>{
     const  blanks = [];
     for (let i = 0; i < getFirstDayOfMonth(); i++) {
       blanks.push(
         <td key={"n"+i} >{""}</td>
       );
     }
 
     //
     const daysInMonth = [];
     for (let d = 1; d <=getDaysInAMonth() ; d++) {
       daysInMonth.push(
         <td key={d} >
           {d}
         </td>
       );
     }
 
     var totalSlots = [...blanks, ...daysInMonth];
     let rows = [];
     let cells = [];
 
     totalSlots.forEach((row, i) => {
         if (i % 7 !== 0) {
           cells.push(row); // if index not equal 7 that means not go to next week
         } else {
           rows.push(cells); // when reach next week we contain all td in last week to rows 
           cells = []; // empty container 
           cells.push(row); // in current loop we still push current row to new container
         }
         if (i === totalSlots.length - 1) { // when end loop we add remain date
           rows.push(cells);
         }
       });
 
       let daysinCalendar = rows.map((d, i) => {
         return <tr  className="DayCont" key={i} >{d}</tr>;
       });
 
 
     return daysinCalendar;
 
     
 
 }
 

function getDaysInWeek(){
         
    let  weekdays = moment.weekdaysShort();
  
    let weekdayshortname = weekdays.map(day =>  (
            <th  key={day} className="WeekDayNames"> { day } </th>
    ));
      
   return weekdayshortname;

}
const getMonth =()=>{
  return 'Junio';
}



const  CalendarBody=() =>{

  moment.lang('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
  }
  );
 
    let monthName=getMonth();
    let weekdayshortname = getDaysInWeek();
    let n = updateMonthCalendar();
  

    return (
      
      <div className="CalendarBodyCont"> 
     
        <table>
          <thead>
            <tr className="monthName">{monthName}</tr>
            <tr>{weekdayshortname}</tr>
          </thead>
          <tbody>{n}</tbody>
        </table>
            
        
      </div>
  );

}


export default CalendarBody;