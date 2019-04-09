import React from "react";

function Todo(props) {
  return (
    <div>
      {props.todos.map(todo => (
        <p key={todo.id}>{todo.task}</p>
      ))}
    </div>
  );
}

export default Todo;
