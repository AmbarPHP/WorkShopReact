import React from 'react';


// este componente retorna los multiples rows
const TaskRow =(props) =>{
  
        return (   
        <tr key={props.task.name}>
            <td> {props.task.name}</td>
            <td> 
            <input type="checkbox" 
            checked={props.task.done}  
            onChange = {()=>{ props.ToggleTask(props.task)}}/>
            </td>
        </tr>
        );


};

export default TaskRow;