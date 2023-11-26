const ToDoRowItem = ({ rowNumber, rowDescription, rowAssigned }) => {
  return (
    <tr>
      <th scope="col">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
};

export default ToDoRowItem;
