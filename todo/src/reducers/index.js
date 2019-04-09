// import ACTION-TYPES
import { ADD_NEW_TODO, CHANGE_INPUT_TEXT } from "../actions";

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
    newTask: "",
}

const rootReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case ADD_NEW_TODO:
    return {
      ...state,
      todos: [...state.todos, {task: action.payload, completed: false, id: Date.now()}],
      newTask: "", // clears input field
    };
    case CHANGE_INPUT_TEXT:
    return {
      ...state,
      newTask: action.payload
    };
    default:
    return state;
  }
}

export default rootReducer;