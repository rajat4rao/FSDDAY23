import React from "react";
import Edit from "./Edit";

const Card = ({ todos, editTodo, deleteTodo }) => {
  return (
    <div className="row">
      {todos.map((todo) => (
        <Edit
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Card;
