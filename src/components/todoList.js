import React, {Component} from "react";
import { ListItem, ListItemText, ListItemIcon} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';


class TodoList extends Component{

    render(){
        return(
          <div className={'list'}>
              {this.showTodos(this.props.todos)}
          </div>
        );
    }

    toggleTodo(todo, index){
        // e.preventDefault()
        this.props.onTodoToggle(todo, index);
    }

    showTodos(todos){
        return(
            todos.map((todo, idx) => {
                return(
                    <ListItem button className={"todo"} key={idx} onClick={()=>this.toggleTodo(todo, idx)}>
                        <ListItemIcon>
                            {todo.done ? <CheckIcon></CheckIcon> : <RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>}
                        </ListItemIcon>
                        <ListItemText primary={todo.title} secondary={todo.createAt.toLocaleDateString() + " " + todo.createAt.toLocaleTimeString()}>
                        </ListItemText>
                    </ListItem>
                )
            })
        );
    }
}

export default TodoList;