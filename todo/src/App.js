import React from 'react';
import { connect } from "react-redux";
import { addNewTodo, changeInputText } from "./actions";

import TodoList from "./components/TodoList";
import './App.css';

// don't need to write this.props.whatever just props.whatever because App is not a class component

const App = props => {
    return (
      <div className="App">
      <h1>Your Todos</h1>
      <TodoList/>
      <input
            type="string"
            name="newTask"
            value={props.newTask}
            placeholder="What else?"
            onChange={e => {props.changeInputText(e.target.value)}}
          />
      <button
        onClick={e => {
          e.preventDefault();
          props.addNewTodo(props.newTask);
        }}
      >
      Add Item</button>
      <button>Delete</button>
      
      </div>
    );
  
}

// mSTP gives component access to props
const mapStateToProps = state => {
  return {
    todos: state.todos,
    newTask: state.newTask
  }
}

export default connect(
  mapStateToProps,
  {addNewTodo, changeInputText}
)(App);
