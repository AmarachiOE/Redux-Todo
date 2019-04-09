export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const CHANGE_INPUT_TEXT = "CHANGE_INPUT_TEXT" 

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