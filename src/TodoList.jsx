import { useState } from "react"
import Task from "./components/Task"

function TodoList(){
  const [toDoList, setToDoList] = useState([[0, "Banana"], [1, "Apple"]])

  return(
    <>
      <h1>ToDO List</h1>
      <div className="add-todo">
        <input type="text"/>
        <button>ADD</button>
      </div>
      <div className="todo-list">
        <ul>
          {toDoList.map((toDo) => <Task task={toDo}/> )}
        </ul>
      </div>
    </>
  )
}

export default TodoList