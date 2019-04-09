import React from 'react';
import { connect } from "react-redux";
import { addNewTodo, changeInputText } from "./actions";

import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import './App.css';

// don't need to write this.props.whatever just props.whatever because App is not a class component

const App = props => {
    return (
      <div className="App">
      <h1>Your Todos</h1>
      {/* <Todo todos={props.todos}/> */}
      <TodoList/>
      <input
            type="string"
            name="newTask"
            value={props.newTask}
            placeholder="What's else?"
            onChange={e => {props.changeInputText(e.target.value)}}
          />
      <button
        onClick={e => {
          e.preventDefault();
          props.addNewTodo();
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
