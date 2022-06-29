const TodoItem = (props) => {
    const {title, time, description} = props.task
    return(
        <div>
            <h3>{title}</h3>
            <h4>{time}</h4>
            <p>{description}</p>
        </div>
    )
  }
  
  
  export default TodoItem