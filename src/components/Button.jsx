import Up from '../assets/up.svg'
import Down from '../assets/down.svg'
import Delete from '../assets/delete.svg'

function Button(props){
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

  return(
    <img 
      style={props.type == "delete" ? styleDelete : styleUpDown}
      src={props.type == "up" ? Up : props.type == "down" ? Down : Delete} 
      alt={props.type} />
  )
}

export default Button