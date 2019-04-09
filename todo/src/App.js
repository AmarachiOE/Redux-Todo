import React from "react";
import { connect } from "react-redux";
import { addNewTodo, changeInputText, clearCompleted } from "./actions";

import TodoList from "./components/TodoList";
import "./App.css";

// don't need to write this.props.whatever just props.whatever because App is not a class component

const App = props => {
  return (
    <div className="App">
      <div className="container">
        <h1>Your Todos:</h1>
        <TodoList />
        <form
          className="todo-form"
          onSubmit={e => {
            e.preventDefault();
            props.addNewTodo(props.newTask);
          }}
        >
          <input
            type="string"
            name="newTask"
            value={props.newTask}
            placeholder="What else?"
            onChange={e => {
              props.changeInputText(e.target.value);
            }}
          />
          <button className="btn">Add Item</button>
        </form>
        <button
        className="btn"
          onClick={e => {
            e.preventDefault();
            props.clearCompleted();
          }}
        >
          Clear Completed Items
        </button>
      </div>
    </div>
  );
};

// mSTP gives component access to props
const mapStateToProps = state => {
  return {
    todos: state.todos,
    newTask: state.newTask
  };
};

export default connect(
  mapStateToProps,
  { addNewTodo, changeInputText, clearCompleted }
)(App);
