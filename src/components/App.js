import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [taskList, setTaskList] = useState(TASKS)
  const [categorySelection, setCategory] = useState("All")

  const onSelectedCategory = (categoryValue) => {
    setCategory(categoryValue)
  }

const deleteTask = (taskToDelete) => {
  const newTaskArray = taskList.filter((task) => task.text !== taskToDelete)
  setTaskList(newTaskArray)
}

const tasksToDisplay = taskList.filter((task) => {
 return categorySelection === "All" || task.category === categorySelection
})

const onTaskFormSubmit = (formData) => {
  const newTaskArray = [...taskList, formData]
  setTaskList(newTaskArray)
}


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectedCategory={onSelectedCategory} categorySelection={categorySelection}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksToDisplay} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
