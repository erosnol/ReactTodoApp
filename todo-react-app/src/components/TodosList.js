import TodoItem from './TodoItem'


const TodosList = (props) => {
  return (
    <div>
      <h2>Todos</h2>

    
      {props.tasks.map((tasks, idx) => <TodoItem task={tasks} key={idx} /> )}
    </div>
  );
};



export default TodosList; 