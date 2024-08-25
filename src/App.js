import React, { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (editedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    return filter === "Completed"
      ? todo.status === "Completed"
      : todo.status === "Not Completed";
  });

  const getFilterClass = () => {
    if (todos.length === 0) return "";
    return todos.every(todo => todo.status === "Completed") ? "all-completed" : "not-all-completed";
  };

  return (
    <div className="container my-4">
    <h1 className="text-center mb-4">My Todo</h1>
    <Form addTodo={addTodo} />
    <div className="filter-container">
      <label className="todo-label">My Todos</label>
      <div className="status-filter">
        <label className="todo-label">Status Filter:</label>
        <select
  className={`form-control filter-dropdown ${getFilterClass()}`}
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
>
  <option value="All">All</option>
  <option value="Completed">Completed</option>
  <option value="Not Completed">Not Completed</option>
</select>
      </div>
    </div>
    <Card
      todos={filteredTodos}
      editTodo={editTodo}
      deleteTodo={deleteTodo}
    />
  </div>
  );
};

export default App;