import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  
  // safe navigator operator 
 const tasksMapped = tasks?.map((task) => {
    return <Task {...task} key={task.text}  deleteTask={deleteTask}/>
  })

  return (
    <div className="tasks">
        {tasksMapped}
    </div>
  );
}

export default TaskList;
