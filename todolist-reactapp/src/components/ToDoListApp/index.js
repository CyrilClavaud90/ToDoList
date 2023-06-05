import { useState } from 'react';

import data from '../../data';

import Form from "../Form";
import Task from "../Task";
import Count from '../Count';


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

  
  return (
    <div className="ToDoList">
      <Count tasks={ taskList } />

      <Form newTask={ addTask } />

      <Task tasks={ taskList } deleteTask={ deleteTask } />
    </div>
  );
}

export default ToDoList;
