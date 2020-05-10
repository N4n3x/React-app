import React, {Component} from "react";
import {Button, Grid, TextField} from '@material-ui/core';

class TodoForm extends Component{
    onClick(evt){
        evt.preventDefault();
        const txt = this.todoTitle.value;
        this.todoTitle.value = "";
        this.props.onNewTodo({
            title: txt,
            done: false,
            createAt: new Date()
        });
    }
    render() {
        return(
            <Grid container spacing={3} justify="center">
                <Grid item xs={9}>
                    <TextField fullWidth label="TODO"  inputRef={(input)=>this.todoTitle = input}/>
                </Grid>
                <Grid item xs={9}>
                    <Button color="primary" variant="contained" onClick={this.onClick.bind(this)}>Ajouter</Button>
                </Grid>
            </Grid>
        );
    }
}

export default TodoForm;