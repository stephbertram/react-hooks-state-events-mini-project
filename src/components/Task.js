function Task({ text, category, deleteTask }) {

  const handleDelete = () => {
    const taskToDelete = text
    deleteTask(taskToDelete)
  }

  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
