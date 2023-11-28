import { useState } from "react";
import "./App.css";
import ToDoRowItem from "./components/ToDoRowItem";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [toggle, setToggle] = useState(false);
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User Three" },
  ]);

  const toggleControl = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  const addData = (assign, textArea) => {
    const newData = {
      rowNumber: todos.length + 1,
      rowDescription: textArea,
      rowAssigned: assign,
    };
    setTodos([...todos, newData]);
    console.log("state value", todos);
  };

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter((value) => {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button className="btn btn-primary" onClick={toggleControl}>
            {toggle ? "Close" : "Add New Todo"}
          </button>
          {toggle && <NewTodoForm addToDo={addData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
