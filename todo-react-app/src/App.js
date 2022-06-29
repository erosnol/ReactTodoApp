import './App.css';
import taskData from './data/TodosData'

import { Component } from 'react';

import Navbar from './components/Navbar';
import TodosList  from './components/TodosList'

class App extends Component {

  state = {
    taskData: taskData,
    value: ''
    }


  handleChange = (event) =>{
    console.log(event.target.value);
    this.setState({ [event.target.id] : event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    

    const newTask = {
      title: this.state.taskTitle,
      time: this.state.taskTime,
      description: this.state.taskDescription
    }
    console.log(newTask);

    this.setState({
      taskData: [newTask, ...this.state.taskData],
      taskTitle: '',
      taskTime: '',
      taskDescription: ''
    
    })
  }

    render(){
      return (
        <div className="App">
         <Navbar />

         <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskTitle">Task Title</label>
          <input type="text" value={this.state.taskTitle} onChange={this.handleChange} id="taskTitle"/>
          
          <label htmlFor="taskTime">Task Time</label>
          <input type="text" value={this.state.taskTime} onChange={this.handleChange} id="taskTime"/>

          <label htmlFor="taskDescription">Task Description</label>
          <input type="text" value={this.state.taskDescription} onChange={this.handleChange} id="taskDescription"/>

          <input type="submit" />

        </form>

         <TodosList tasks={this.state.taskData} id="taskTitle" />
        </div>
      );
    }
}



export default App;