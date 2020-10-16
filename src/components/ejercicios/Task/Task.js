import React, { useState } from "react";
import TaskRow from "./TaskRow";
import TaskBanner from "./TaskBanner";
import TaskCreator from "./TaskCreator";
import { VisibilityControl } from "./VisibilitiControl";

const Task = () => {
  const [userName, setUserName] = useState("fast");
  const [taskItems, settaskItems] = useState([
    { name: "Task One", done: true },
    { name: "Task Two", done: true},
    { name: "Task Three", done: false },
    { name: "Task Four", done: true },
  ]);

  const [showCompleted, setShowCompleted]=useState(true);



  //cambiar el estado de las tareas
  function ToggleTask(task){
      settaskItems(
          taskItems.map(t =>{
                return (
                    //pasa los parametros buscados, pero el done, se debe cambiar, ...t es el spread operator, pasa todo lo que esta contenido en el item iterado, excepto done
                   t.name === task.name ? { ...t, done:!t.done } : t 
                )
            })
      )
  }

  function TaskTableRows(valueCompleted) {
    //pora cada tarea que recorar genera multiples rows
    return (
      taskItems
      .filter(task=>valueCompleted===task.done)
      .map((task) => <TaskRow   task={task} ToggleTask={ToggleTask} />
      )
    );
    
   
  }

  function createNewTask(taskName){
    settaskItems([...taskItems, { name:taskName, done: false}]);
  }

  


  return (
    <div>
       <TaskCreator  callback={createNewTask}> </TaskCreator>
      <table className="table-striped">
        <thead>
          <tr>
            <th colSpan="2"><TaskBanner  userName={userName} taskItems={taskItems}/></th>
          </tr>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
      
        <tbody>
        {TaskTableRows(false)}
         </tbody>
      </table>
     

      <div className="bg-secondary-text-white text-left   p-2" >
        <VisibilityControl 
          description="completed task" 
          isChecked={showCompleted} 
          callback={checked=>setShowCompleted(checked)}>
        </VisibilityControl>
        {
          showCompleted & (
            <table class="table table-striped table-bordered">
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
              <tbody>
                {TaskTableRows(true)}
              </tbody>
            </table>
          )
        }
      </div>
    </div>
  );
};

export default Task;
