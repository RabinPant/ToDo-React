import { useState } from "react";
import "./App.css";
import ToDoRowItem from "./components/ToDoRowItem";
import TodoTable from "./components/TodoTable";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User Three" },
  ]);
  console.log("todos data from state", todos);

  const addData = () => {
    const newData = {
      rowNumber: todos.length + 1,
      rowDescription: "Hello",
      rowAssigned: "User",
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
        </div>
      </div>
    </div>
  );
}

export default App;
