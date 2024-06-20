import up from "../assets/up.svg";
import down from "../assets/down.svg";
import del from "../assets/delete.svg";

export default function Todos(props) {
  return (
    <li>
      <div className="todo">
        <input type="checkbox" />
        {props.todo}
        <img src={up} alt="up" />
        <img src={down} alt="down" />
        <img src={del} alt="delete" />
      </div>
    </li>
  );
}
