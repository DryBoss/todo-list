import { useState } from "react"
import Task from "./components/Task"

function TodoList(){
  const [toDoList, setToDoList] = useState([[0, "Banana"], [1, "Apple"]])

  function handleAddClick(){
    const newTask = document.getElementById("task-input").value
    newTask ? setToDoList(prevToDoList => [...prevToDoList, [0, newTask]]) : null
  }

  return(
    <>
      <h1>ToDO List</h1>
      <div className="add-todo">
        <input type="text" id="task-input" placeholder="Enter new task..."/>
        <button onClick={handleAddClick}>ADD</button>
      </div>
      <div className="todo-list">
        <ul>
          {toDoList.map((toDo, index) => <Task task={toDo} index={index}/> )}
        </ul>
      </div>
    </>
  )
}

export default TodoList