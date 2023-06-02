import Form from "../Form";
import Task from "../Task";

function ToDoList() {
  return (
    <div className="ToDoList">
      <h1>My ToDo List</h1>

      <Form />

      <Task />
    </div>
  );
}

export default ToDoList;
