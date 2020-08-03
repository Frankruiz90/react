import React, { Component } from 'react';
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component {
  styleCompleted() {
    return{
      boxShadow:'0 2px 5px #868686',
      display:'flex',

      borderRadius:'10px',
      margin:'10px',
      padding:'10px',
      width:'400px',
      height:'max-content',
      fontSize: '20px',
      flexFlow: 'wrap',
      alignItems: 'center'
    }
  }
  styleTitle() {
    return {
      height:'30px',
      margin:'0',
      color:'grey',
      textDecoration: this.props.task.done ? 'line-through' : 'none',
      flex: '0 0 100%'
    }
  }
  styleDescripntion() {
    return {
      color: this.props.task.done ? 'gray' : 'black',
      textDecoration: this.props.task.done ? 'line-through' : 'none',
      flex: '0 0 90%'

    }
  }
   render() {
     const { task } = this.props;
     return <div style={this.styleCompleted()}>
       <h3 style={this.styleTitle()} >{ task.title }</h3>  
       <p style={ this.styleDescripntion()}> { task.description } </p>
      <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
      <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
        Delete
      </button>
     </div>
     
   }
 }
Task.propTypes = {
  task: PropTypes.object.isRequired
}
 const btnDelete = {
    height:'30px',
    width: '100%',
    fonSize: '25px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '20px',
    cursor: 'pointer',
 }

 export default Task;