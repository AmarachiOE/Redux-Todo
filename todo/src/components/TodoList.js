import React from "react";
import { connect } from "react-redux";
import { toggleTask, deleteTask } from "../actions";

const TodoList = props => {
  return (
    <div className="todo-list-container">
      {props.todos.map(todo => (
        <div className="each-todo">
          {/* add className "completed" if todo completed property is true */}
          <h2
            className={todo.completed ? "completed" : null}
            key={todo.id}
            onClick={id => {
              props.toggleTask(todo.id);
            }}
          >
            {todo.task}
            {/* removed completed state from being display */}
            {/* {todo.completed.toString()} */}
          </h2>
          <p
            className="delete-btn"
            onClick={id => {
              if (
                window.confirm(
                  `Are you sure you want to delete ${
                    todo.task
                  } from your todo list?`
                )
              ) {
                props.deleteTask(todo.id);
              }
            }}
          >
            X
          </p>
        </div>
      ))}
    </div>
  );
};

/* 

if (window.confirm(`Are you sure you want to delete ${props.smurf.name}`)) {
      props.deleteSmurf(props.smurf.id);
    }



*/

// Need to connect this component to the redux store
// implicit return: const mSTP = state => {( todos: state.todos )};
const mapStateToProps = state => {
  console.log("From mSTP TodoList", state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTask, deleteTask }
)(TodoList);
