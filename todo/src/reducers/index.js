import { ADD_TODO } from '../actions'

const initialState = {
    todos: [{todo: 'hi'}]
}



const reducer = (state = initialState, action) => {
    const todos = {todo: action.payload}
    switch (action.type) {
        
        case ADD_TODO:
            return {
               ...state,
               todos: [...state.todos, todos]
            };
        default:
            return state;
    }
}

export default reducer;