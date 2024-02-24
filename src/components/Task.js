function Task({ task, deleteTask }) {

  const handleDelete = () => {
    const taskToDelete = task.text
    deleteTask(taskToDelete)
  }

  return (
    <div className="task" >
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
