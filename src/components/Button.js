export const Button = (props) => {
  return (
    <button style={props.style} className={props.classes} value={props.value} onClick={props.handleClick}>{props.title}</button>
  )
}
