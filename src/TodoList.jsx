import { useState } from "react"
import Button from "./components/Button"
import Up from './assets/up.svg'
import Down from './assets/down.svg'
import Delete from './assets/delete.svg'

function TodoList(){
  const [toDoList, setToDoList] = useState([])

  const styleUpDown = {
    backgroundColor: "#2a86ff",
    padding: "5px 10px",
    margin: "0 2px",
    borderRadius: "5px"
  }
  const styleDelete = {
    backgroundColor: "#bc2024",
    padding: "5px 10px",
    margin: "0 0 0 8px",
    borderRadius: "5px"
  }

  function handleAddClick(){
    const newTask = document.getElementById("task-input").value.trim()
    newTask ? setToDoList(prevToDoList => [...prevToDoList, [0, newTask]]) : null
    document.getElementById("task-input").value = ""
  }

  function handleUpClick(index){
    if (index != 0){
      let updatedTask = [...toDoList];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
      setToDoList(updatedTask);
    }
  }

  function handleDownClick(index){
    if (index != toDoList.length - 1){
      let updatedTask = [...toDoList];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setToDoList(updatedTask);
    }
  }

  function handleDeleteClick(index){
    let updatedTask = toDoList.filter((_, currentIndex) =>  {
                                                              index != currentIndex
                                                            })
    setToDoList(updatedTask)
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
                                              onChange={event => {
                                                toDo[0] = toDo[0] ? 0 : 1
                                                event.target.checked = toDo[0]
                                                document.getElementById("task-text").style.textDecoration = toDo[0] ? "line-through" : "none"
                                              }}/>
                                            <span id="task-text">
                                              {toDo[1]}
                                            </span>
                                            <img style={styleUpDown} src={Up} alt="up" onClick={() => handleUpClick(index)}/>
                                            <img style={styleUpDown} src={Down} alt="down" onClick={() => handleDownClick(index)}/>
                                            <img style={styleDelete} src={Delete} alt="delete" onClick={() => handleDeleteClick(index)}/>
                                          </li> )}
        </ul>
      </div>
    </>
  )
}

export default TodoList