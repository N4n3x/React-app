import React, {useState} from 'react';
import TodoForm from "./TodoFormHook";
import {Box, List} from "@material-ui/core";
import TodoList from "./TodoListHook";

function TodoHook() {

    const [todoList, setTodoList] = useState([]);

    const onNewTodo = todo => {
        todo.id = todoList.length;
        setTodoList([...todoList, todo]);
        console.log(todoList);
    }

    const onToggleTodo = (todo) => {
        setTodoList(todoList.map(item => item.id === todo.id ? {...item, done: !todo.done} : item));
    }

    return (
        <Box className={"Todo"}>
            <div className='Todo-header'>
                <h2>TodoApp</h2>
            </div>
            <div className='Todo-body'>
                <TodoForm onNewTodo={onNewTodo}/>
                <List>
                    <TodoList todo={todoList} onTodoToggle={onToggleTodo}/>
                </List>
            </div>
        </Box>
    );
}

export default TodoHook;