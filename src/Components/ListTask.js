import React, { Component } from 'react'
import { connect } from 'react-redux'
import Task from './Task'

class ListTask extends Component {
   constructor(props){
       super(props); 
       this.state = { filter : null
       } 
   }

render(){
    return (
        <div className="tasksListDiv">   
            <h3 className="tasksListTitle">Tasks List : </h3>

            <div className="filterDiv">
                    <p className="titleFilter">Tasks Filtering :</p>
                    <form>
                        <div className="inputFilter">
                        <label>
                            <input type="radio" id="Completed" name="task" onChange={() => this.setState({filter: true})} value={true}/> 
                            Completed</label><br/>
                        </div>
                        <div className="inputFilter">
                        <label >
                            <input type="radio" id="Not Completed" name="task" onChange={() => this.setState({filter: false})} value={false} />
                            Not Completed</label><br/>
                        </div>
                        <div className="inputFilter">
                        <label >
                            <input type="radio" id="All" name="task" onChange={() => this.setState({filter: null})} value={null} />
                            All</label>
                        </div>
                    </form>
            </div>

             <div className="tasksList">
                {
                 this.props.todos.filter(el=> this.state.filter===null ? el : el.isDone === this.state.filter).map(el => <Task todo={el}/>)
                 }
             </div>
        </div>
    )
}}

const mapStateToProps = state => {
    return {
        todos: state.TodoReducer
    }
}

export default connect(mapStateToProps)(ListTask);
