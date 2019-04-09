import React from "react";
import { connect } from "react-redux";

function Todo(props) {
  return (
    <div>
      {props.todos.map(todo => (
        <p key={todo.id}>{todo.task}</p>
      ))}
    </div>
  );
}

export default connect(null, {})(Todo);
