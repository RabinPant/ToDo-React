import ToDoRowItem from "./ToDoRowItem";

const TodoTable = ({ todos, deleteTodo }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, id) => {
          return (
            <ToDoRowItem
              rowAssigned={todo.rowAssigned}
              rowDescription={todo.rowDescription}
              rowNumber={todo.rowNumber}
              key={id}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoTable;
