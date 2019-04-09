import React from 'react';
import { connect } from "react-redux";

import Todo from "./components/Todo";
import './App.css';

const App = props => {
    return (
      <div className="App">
      <h1>Your Todos</h1>
      <Todo todos={props.todos}/>
      <input
            type="string"
            name="task"
            placeholder="What's else?"
          />
      <button>Add Item</button>
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
  {}
)(App);
