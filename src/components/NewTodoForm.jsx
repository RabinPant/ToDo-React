import { useState } from "react";

const NewTodoForm = ({ addToDo }) => {
  const [assign, setAssign] = useState();
  const [textArea, setTextArea] = useState();
  const handleAssign = (e) => {
    setAssign(e.target.value);
  };

  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  };
  const handleClick = () => {
    addToDo(assign, textArea);
    setAssign("");
    setTextArea("");
  };
  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={handleAssign}
            value={assign}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={handleTextArea}
            value={textArea}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={handleClick}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
