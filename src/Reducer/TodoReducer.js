import {ADD_TODO , DELETE_TODO, COMPLETE_TODO , EDIT_TODO, FILTER_TODO} from '../Actions/types'

const initialState = [  
]

const TodoReducer = (State = initialState, action) => {
switch(action.type) {
    case ADD_TODO : 
         return  State.concat(action.payload)
    case DELETE_TODO : 
         return State.filter(el => el.id !== action.payload)
    case COMPLETE_TODO :
        return State.map(el => el.id === action.payload ? {...el, isDone: !el.isDone} : el)
    case EDIT_TODO : 
        return State.map(el=> el.id === action.payload.id ? action.payload : el)
    default : 
       return State
}
}

export default TodoReducer;