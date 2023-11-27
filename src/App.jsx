import { useState } from "react";
import "./App.css";
import ToDoRowItem from "./components/ToDoRowItem";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User Three" },
  ]);
  console.log("todos data from state", todos);

  const addData = (assign, textArea) => {
    const newData = {
      rowNumber: todos.length + 1,
      rowDescription: textArea,
      rowAssigned: assign,
    };
    setTodos([...todos, newData]);
    console.log("state value", todos);
  };
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addData}>
            Add new todo
          </button>
          <NewTodoForm addToDo={addData} />
        </div>
      </div>
    </div>
  );
}

export default App;
