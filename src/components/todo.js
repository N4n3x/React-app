import React, {Component} from 'react';
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import {Box, List} from "@material-ui/core";

class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }
    onNewTodo(todo){
        // console.log(todo);
        let newTodoList = this.state.todos;
        newTodoList.push(todo);
        this.setState({todos: newTodoList})
    }

    onToggleTodo(todo, index){
        console.log(index, " : ", todo);
        let _todo = todo;
        _todo.done = !todo.done;
        let newTodos = this.state.todos;
        newTodos[index] = _todo;
        this.setState({todos: newTodos});
    }

    render(){
        return(
            <Box className={"Todo"}>
                <div className='Todo-header'>
                    <h2>TodoApp</h2>
                </div>
                <div className='Todo-body'>
                    <TodoForm onNewTodo={this.onNewTodo.bind(this)}></TodoForm>
                    <List>
                        <TodoList todos={this.state.todos} onTodoToggle={this.onToggleTodo.bind(this)}></TodoList>
                    </List>
                </div>
            </Box>
        );
    }
}

export default Todo;