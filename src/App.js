import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import tasks from './sample/task.json';

// impor components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Post from './components/Post'
class App extends Component {

  state = {
    tasks: tasks
  }
  addTask = (title, description)=> {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  deleteTask = (id)=>{
    console.log('hello');
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTask
    })
  }
  checkDone = (id)=>{
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id) {
        task.done = !task.done
      }
      return task;
    })
    this.setState({
      tasks: newTasks
    })
  }
  containerTask(){
    return {
    textAlign: '-webkit-center'
  }
  }
  render() {
    return <div>
      <Router>
      <Link to="/">home</Link>
      <br/>
      <Link to="/post">Post</Link>

      <Route exact path="/" render={() => {
        return <div  style={ this.containerTask() }>
          <TaskForm addTask={this.addTask} />
          <Tasks tasks={ this.state.tasks } deleteTask={this.deleteTask} checkDone={this.checkDone} />
        </div>
    }}>
    </Route>
    <Route path="/post" component={Post} />
      </Router>
    </div>

  }
}

export default App;
