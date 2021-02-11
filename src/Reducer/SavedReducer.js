import { SAVE_TODO, CLEAR } from '../Actions/types'

const SavedReducer = (State = null , action) => {
    switch (action.type){
        case SAVE_TODO : 
        return action.payload
        case CLEAR :
        return null
        default : 
        return State
    }
}

export default SavedReducer;