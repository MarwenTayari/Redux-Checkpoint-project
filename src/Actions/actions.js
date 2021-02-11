import { ADD_TODO , DELETE_TODO , COMPLETE_TODO , EDIT_TODO, SAVE_TODO, CLEAR } from './types' 

export const addTodo = newTodo => {
    return {
        type : ADD_TODO,
        payload: newTodo
    }
}

export const deleteTodo = id => {
    return {
        type : DELETE_TODO,
        payload: id
    }
}

export const completeTodo = id => {
    return {
        type : COMPLETE_TODO ,
        payload: id
    }
}

export const saveTodo = todo => {
    return {
        type : SAVE_TODO ,
        payload: todo
    }
}

export const editTodo = updatedTodo => {
    return {
        type : EDIT_TODO ,
        payload: updatedTodo
    }
}

export const clearSaved = () => {
    return {
        type : CLEAR
    }
}