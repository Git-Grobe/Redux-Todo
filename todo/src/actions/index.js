// action types 

export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"


// other constants

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}

// action creators

export const addTodo = text => {
    console.log("ADD TODO ACTION")
    return {
        type: ADD_TODO,
        text: "Build todo redux app"
    }
};

export const toggleTodo = text => {
    console.log("Toggle Todo Action")
    return {
        type: TOGGLE_TODO,
        text: "Build todo redux app"
    }
};

export const setVisibilityFilter = text => {
    console.log("Set visibility filter action")
    return {
        type: SET_VISIBILITY_FILTER,
        text: "Build todo redux app"
    }
};
