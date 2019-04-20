// action types 

export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

// action creators

export const addTodoAction = todo => {
    console.log("ADD TODO ACTION", {todo})
    return {
        type: ADD_TODO,
        payload: todo
    }
};

// export const toggleTodo = index => {
//     console.log("Toggle Todo Action")
//     return {
//         type: TOGGLE_TODO,
//         payload: index
//     }
// };

