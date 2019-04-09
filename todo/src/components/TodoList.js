import React from "react";
import { connect } from "react-redux";
import { toggleTask, deleteTask } from "../actions";

const TodoList = props => {
  return (
    <div>
      <div className="todo-list">
        {props.todos.map(todo => (
          <div className="each-todo">
            <h2
              key={todo.id}
              onClick={id => {
                props.toggleTask(todo.id);
              }}
            >
              {todo.task} {todo.completed.toString()}
            </h2>
            <button 
                onClick={id => {
                    if (window.confirm(`Are you sure you want to delete ${todo.task} from your todo list?`)) {
                        props.deleteTask(todo.id);
                    }
                    
                }}>
                Delete
            </button>
          </div>
        ))}
      </div>
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
