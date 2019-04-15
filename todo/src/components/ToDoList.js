import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodoAction} from '../actions'

class ToDoList extends Component {
    state = {
        newToDo: ''
    }

    addToDo = event => {
        event.preventDefault();
        this.props.addTodoAction(this.state.newToDo);
    }

    handleChanges = event => this.setState({ newToDo: event.target.value});
    
    render () {
        return(
            <div>
                <h1>To Do List</h1>
                {console.log(this.state)}
                <input onChange={this.handleChanges} value={this.state.newToDo}/>
                <button onClick={this.addToDo}>Add Todo</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.newToDo
    };
};

export default connect(mapStateToProps, {addTodoAction})(ToDoList);