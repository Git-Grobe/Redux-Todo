import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodoAction} from '../actions';
import ToDo from './ToDo';

class ToDoList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            newToDo: ''
    }
 
    }

    addToDo = event => {
        event.preventDefault();
        this.props.addTodoAction(this.state.newToDo);
    }

    handleChanges = event => this.setState({ newToDo: event.target.value});
    
    render () {
        console.log(this.props.todos)
        return(
            <div>
                <h1>To Do List</h1>
                {console.log(this.state.newToDo)}
                <input onChange={this.handleChanges} value={this.state.newToDo}/>
                <button onClick={this.addToDo}>Add Todo</button>
                {/* {this.props.todos.map(item => <ToDo item={item}/>)} */}

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.todo)
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, {addTodoAction})(ToDoList);