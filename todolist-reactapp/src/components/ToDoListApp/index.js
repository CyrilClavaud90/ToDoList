import { useState } from 'react';

import data from '../../data';

import Form from "../Form";
import Task from "../Task";

function ToDoList() {
  const [ taskList, setTasksList ] = useState(data);

  const findId = () => {
    const ids = taskList.map((task) => task.id);
    return Math.max(...ids);
  };

  const addTask = (task) => {
    console.log(task);
    setTasksList([ ...taskList, {id: findId() + 1, taskName: task, done: false}])
  };

  return (
    <div className="ToDoList">
      <h1>My ToDo List</h1>

      <Form newTask={ addTask } />

      <Task tasks={ taskList } />
    </div>
  );
}

export default ToDoList;
