import { useState } from 'react';

import data from '../../data';

import Form from "../Form";
import Task from "../Task";
import Count from '../Count';

import './ToDoListApp.css';


function ToDoList() {
  const [ taskList, setTasksList ] = useState(data);


  const findId = () => {
    const ids = taskList.map((task) => task.id);
    return Math.max(...ids);
  };

  const addTask = (task) => {
    setTasksList([ ...taskList, {id: findId() + 1, taskName: task, done: false}])
  };

  const deleteTask = (event) => {
    const id = Number(event.target.name);
    setTasksList( taskList.filter(task => task.id !== id) );
  };

  
  const statusTask = (event) => {
    const id = Number(event.target.name);
    const tasksModified = taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            done: !task.done,
          }
        }
        return task;
      });
      
    setTasksList(tasksModified);
};


  
  return (
    <div className="ToDoList">
      <Form newTask={ addTask } />
      
      <Count tasks={ taskList } />

      <Task 
        tasks={ taskList } 
        deleteTask={ deleteTask } 
        statusTask={ statusTask }
      />
    </div>
  );
}

export default ToDoList;
