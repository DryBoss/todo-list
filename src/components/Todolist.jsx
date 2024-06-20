import { useState } from "react";
import Todos from "./Todos";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAddClick() {
    setTodos([...todos, input]);
    setInput("");
  }

  return (
    <>
      <div className="addToDo">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        <button onClick={handleAddClick}>Add</button>
      </div>

      <h3>Todos</h3>
      <ul className="todos">
        {todos.map((todo, index) => (
          <Todos key={index} todo={todo} />
        ))}
      </ul>

      <h3>Completed</h3>
      <ul className="todos">
        {todos.map((todo, index) => (
          <Todos key={index} todo={todo} />
        ))}
      </ul>
    </>
  );
}
