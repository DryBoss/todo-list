import { useState } from "react"
import Button from "./components/Button"

function TodoList(){
  const [toDoList, setToDoList] = useState([[0, "Banana"], [1, "Apple"]])

  const strike = {
    textDecoration: "line-through"
  }

  function handleAddClick(){
    const newTask = document.getElementById("task-input").value.trim()
    newTask ? setToDoList(prevToDoList => [...prevToDoList, [0, newTask]]) : null
    document.getElementById("task-input").value = ""
  }

  function handleCheckChange(index){
    
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
          {toDoList.map((toDo, index) =>  <li key={index}>
                                            <input type="checkbox" 
                                              onChange={(event) => {
                                                toDo[0] = toDo[0] ? 0 : 1
                                                event.target.checked = toDo[0]
                                              }}/>
                                            <span style={toDo[0] ? strike : null}>
                                              {toDo[1]}
                                            </span>
                                            <Button type="up"/>
                                            <Button type="down"/>
                                            <Button type="delete"/>
                                          </li> )}
        </ul>
      </div>
    </>
  )
}

export default TodoList