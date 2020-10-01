import React from 'react';
import { useState } from 'react';

const TaskCreator = (props)=>{

    const [newTaskName, setNewTaskName]=useState('');

    //para poder cambiar el estado del valor
    const updateNewTaskValue = (e)=> (
            setNewTaskName(e.target.value)
    );

    const createNewTask= ()=>{
       //debugger;
        console.log(newTaskName);
        props.callback(newTaskName);
        setNewTaskName('');
    }    
    
        
    return (
        
        <form className="form-inline mx-2"  >
            <label htmlFor="newtask">Add New:</label>
            <input id="newtask" 
                type="text"
                className="form-control"
                value={newTaskName}
                onChange={updateNewTaskValue}
                placeholder="Add new task"
            />
            <button className="btn btn-primary" onClick={createNewTask} > Add </button>
        </form>
    );

  

}

export default TaskCreator;
