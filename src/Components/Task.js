import React from 'react'
import {connect} from 'react-redux'
import { deleteTodo, completeTodo , saveTodo } from '../Actions/actions'

function Task(props) {
    return (
        <div>
            <p className= {props.todo.isDone ? 'done' : undefined }>{props.todo.description}</p>
            <button onClick = {()=> props.delete(props.todo.id)}>Delete</button>
            <button onClick = {()=> props.complete(props.todo.id)}>{ props.todo.isDone ? 'Undo' : 'Complete'}</button>
            <button onClick = {() => props.save(props.todo)}>Edit</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
return {
    delete : id => dispatch(deleteTodo(id)) , 
    complete : id => dispatch(completeTodo(id)), 
    save : todo => dispatch (saveTodo(todo))
}
}

export default connect(null, mapDispatchToProps)(Task)