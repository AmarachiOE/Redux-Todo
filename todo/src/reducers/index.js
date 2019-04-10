// import ACTION-TYPES
import {
  ADD_NEW_TODO,
  CHANGE_INPUT_TEXT,
  TOGGLE_TASK,
  DELETE_TASK,
  CLEAR_COMPLETED
} from "../actions";

const initialState = {
  todos: [
    {
      task: "Organize Garage",
      id: 1528817077286,
      completed: false
    },

    {
      task: "Bake Cookies",
      id: 1528817084358,
      completed: false
    }
  ],
  newTask: ""
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case ADD_NEW_TODO:
      // copy state
      // for todos, copy state.todos and add new todos at end of list
      // task: action.payload because action.payload = the newTodoTask in actions
      // newTask: "" clears input field when button is eventually clicked
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: action.payload, completed: false, id: Date.now() }
        ],
        newTask: ""
      };
    case CHANGE_INPUT_TEXT:
      return {
        ...state,
        newTask: action.payload
      };
    case TOGGLE_TASK:
      // map through state.todos
      // if todo's id at current iteration matches action.payload (id)
      // return new todo object - but spread in old todo object
      // toggle todo's 'completed' property (keep immutable)
      // else return member untouched
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return console.log("Deleted", { todo });
        })
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          if (todo.completed === false) {
            // if the the completed property on the todo item is false, keep the todo
            return todo;
          }
          return console.log("Cleared Todo", { todo });
        })
      };
    default:
      return state;
  }
};

export default rootReducer;
