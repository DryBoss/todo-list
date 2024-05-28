import Button from "./Button"

function Task(props){
  return(
    <>
    <li>
      <input type="checkbox"/>
      <span>{props.task[1]}</span>
      <Button type="up"/>
      <Button type="down"/>
      <Button type="delete"/>
    </li>
    </>
  )
}

export default Task