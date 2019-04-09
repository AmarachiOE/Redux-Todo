export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const CHANGE_INPUT_TEXT = "CHANGE_INPUT_TEXT" 

export const addNewTodo = action => {
    // i.e. onSubmit event handler
    // can set id here?
    return {
        type: ADD_NEW_TODO,
        payload: action
    };
};

export const changeInputText = action => {
    // i.e. handle changes event handler
    return {
        type: CHANGE_INPUT_TEXT,
        payload: action
    };
};