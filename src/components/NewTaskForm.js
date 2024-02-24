import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const [newTaskDetails, setNewTaskDetails] = useState("")
  const [newTaskCategory, setNewTaskCategory] = useState("")

  const categoriesMapped = categories.map((category) => {
    return category === "All" ? null : 
    <option key={category} value={category}>{category}</option>
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      text: newTaskDetails,
      category: newTaskCategory
    }
      onTaskFormSubmit(formData)
      setNewTaskDetails("")
      setNewTaskCategory("")
    }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={newTaskDetails} 
          onChange={e => setNewTaskDetails(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={newTaskCategory}
          onChange={e => {
            setNewTaskCategory(e.target.value)}} 
        >
          {categoriesMapped}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}



export default NewTaskForm;
