import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addTodo , editTodo, clearSaved } from '../Actions/actions'
import {v4 as uuidv4} from 'uuid'

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description:''
        }
    }

handleChange = e => {
    this.setState({description : e.target.value})
}

addOrEdit=()=> {
if (this.props.saved) {
    this.props.editTodo(this.state)
    this.setState({description :''})
    this.props.clear()
}else {
    this.props.addNewTodo({
        id : uuidv4(), 
        description : this.state.description,
        isDone: false})
    this.setState({description :''})}
}

componentWillReceiveProps(nextProps) {
this.setState(nextProps.saved)
}

    render(){    
        return (
            <div>
                <input type="text" placeholder="Add new todo task..." onChange={this.handleChange} value={this.state.description}></input>
                <button onClick={this.addOrEdit}>{this.props.saved ? 'Edit' : 'Add'}</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewTodo : todo => dispatch(addTodo(todo)),
        editTodo : todo => dispatch(editTodo(todo)),
        clear: () => dispatch(clearSaved())
    }
}

const mapStateToProps = state => {
    return {
        saved : state.SavedReducer
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (AddTask)

