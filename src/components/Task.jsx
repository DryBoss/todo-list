import Button from "./Button"

function Task(props){
  const strike = {
    textDecoration: "line-through"
  }

  function handleCheckChange(){
    
  }

  return(
    <>
    <li key={props.index}>
      <input type="checkbox" onChange={handleCheckChange}/>
      <span style={strike}>{props.task[1]}</span>
      <Button type="up"/>
      <Button type="down"/>
      <Button type="delete"/>
    </li>
    </>
  )
}

export default Task