import React from 'react';
import { connect } from "react-redux";


const TodoList = props => {
    return (
        <div>
            <div className="todo-list">
                {props.todos.map( todo => (
                    <h2 key={todo.id}>{todo.task} {todo.completed} </h2>
                ))}
            </div>
        </div>
    )
}

// Need to connect this component to the redux store
// implicit return: const mSTP = state => {( todos: state.todos )};
const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
};

export default connect(
    mapStateToProps, 
    {}
    )(TodoList);