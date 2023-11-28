const ToDoRowItem = ({
  rowNumber,
  rowDescription,
  rowAssigned,
  deleteTodo,
}) => {
  return (
    <tr onClick={() => deleteTodo(rowNumber)}>
      <th scope="col">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
};

export default ToDoRowItem;
