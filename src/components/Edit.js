import React, { useState } from "react";

const EditTodo = ({ todo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleStatusChange = (e) => {
    editTodo({
      ...todo,
      status: e.target.value,
    });
  };

  const handleUpdate = () => {
    editTodo({
      ...todo,
      name: newName,
      description: newDescription,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewName(todo.name);
    setNewDescription(todo.description);
    setIsEditing(false);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div className="card todo-card">
      <div className="card-body">
        {isEditing ? (
          <>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            <div className="button-container">
              <button className="btn btn-success mr-2" onClick={handleUpdate}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="card-title">Name: {todo.name}</p>
            <p className="card-text">Description: {todo.description}</p>
            <div className="status-container">
              <p className="card-text">Status:</p>
              <select
                className={`form-control status-dropdown ${
                  todo.status === "Not Completed"
                    ? "not-completed"
                    : "completed"
                }`}
                value={todo.status}
                onChange={handleStatusChange}
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="button-container">
              <button
                className="btn btn-add mr-2"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
  );
};

export default EditTodo;
