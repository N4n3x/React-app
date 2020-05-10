import React, {useState} from 'react';
import {Button, Grid, TextField} from "@material-ui/core";

function TodoFormHook(props) {
    const [input, setInput] = useState('')
    const onClick = e => {
        e.preventDefault();
        console.log(input);
        if(input !== ""){
            const txt = input;
            setInput("");
            props.onNewTodo({
                id: 0,
                title: txt,
                done: false,
                createAt: new Date()
            });
        }
    }

    return (
        <Grid container spacing={3} justify="center">
            <Grid item xs={9}>
                <TextField fullWidth label="TODO"  value={input} onInput={event => {setInput(event.target.value)}}/>
            </Grid>
            <Grid item xs={9}>
                <Button color="primary" variant="contained" onClick={onClick}>Ajouter</Button>
            </Grid>
        </Grid>
    );
}

export default TodoFormHook;