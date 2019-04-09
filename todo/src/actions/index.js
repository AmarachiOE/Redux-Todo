export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const CHANGE_INPUT_TEXT = "CHANGE_INPUT_TEXT" ;
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addNewTodo = newTodoTask => {
    // i.e. onSubmit event handler
    // can set id here?
    console.log("addNewTodo:", newTodoTask);
    return {
        type: ADD_NEW_TODO,
        payload: newTodoTask
    };
};

export const changeInputText = action => {
    // i.e. handle changes event handler
    return {
        type: CHANGE_INPUT_TEXT,
        payload: action
    };
};

export const toggleTask = id => {
    console.log(id);
    return {
        type: TOGGLE_TASK,
        payload: id
    };
};

export const deleteTask = id => {
    return {
        type: DELETE_TASK,
        payload: id
    };
};

export const clearCompleted = completed => {
    return {
        type: CLEAR_COMPLETED,
        payload: completed
    };
};