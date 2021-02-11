import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'

function ListTask(props) {
    return (
        <div>
            {
            props.todos.map(el => <Task todo={el}/>)
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.TodoReducer,
    }
}

export default connect(mapStateToProps)(ListTask);
