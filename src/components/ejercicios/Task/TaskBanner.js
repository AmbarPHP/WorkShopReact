import React from "react";

const TaskBanner = (props) => {
    let ItemsDone=0;

  function countTaskDone () {
     
    return ( ItemsDone=props.taskItems.filter((t) => !t.done).length);
  }  

  countTaskDone();
  return (
    <h4 className="bg-primary text-white text-center  p-4">
      {props.userName} tienes pendientes {ItemsDone} tareas
    </h4>
  );
};

export default TaskBanner;
