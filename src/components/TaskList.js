import React from "react";
import Task from "./Task";

function TaskList({ tasksToDisplay, deleteTask }) {
  
 const tasksMapped = tasksToDisplay.map((task) => {
    return <Task task={task} key={task.text}  deleteTask={deleteTask}/>
  })

  return (
    <div className="tasks">
        {tasksMapped}
    </div>
  );
}

export default TaskList;
