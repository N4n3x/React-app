import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

function TodoListHook(props) {

    const toggleTodo = (todo, index) => {
        props.onTodoToggle(todo,index);
    }

    const showTodo = someTodo =>{
        return(
            someTodo.map((todo, idx) =>{
                return(
                    <ListItem button className={"todo"} key={idx} onClick={()=>toggleTodo(todo, idx)}>
                        <ListItemIcon>
                            {todo.done ? <CheckIcon/> : <RadioButtonUncheckedIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={todo.title} secondary={todo.createAt.toLocaleDateString() + " " + todo.createAt.toLocaleTimeString()}>
                        </ListItemText>
                    </ListItem>
                );
            })
        );
    }

    return (
        <div className={'list'}>
            {showTodo(props.todo)}
        </div>
    );
}

export default TodoListHook;