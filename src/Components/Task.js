import React from 'react'
import {connect} from 'react-redux'
import { deleteTodo, completeTodo , saveTodo } from '../Actions/actions'

function Task(props) {
    return (
        <div className="taskDiv">
              <p className= {props.todo.isDone ? 'done' : 'descreptionTask' }>Task description : {props.todo.description}</p>
            <div className="btns">
                    <button className="btn" onClick = {()=> props.delete(props.todo.id)}>Delete</button>
                    <button className="btn completeBtn" onClick = {()=> props.complete(props.todo.id)}>{ props.todo.isDone ? 'Undo' : 'Complete'}</button>
                    <button className="btn" onClick = {() => props.save(props.todo)}>Edit</button>
            </div>
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