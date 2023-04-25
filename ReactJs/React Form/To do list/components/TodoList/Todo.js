import React from "react";
import classes from './Todo.module.css';

const Todo = props => {

    return(
        <li className={classes['list-items']}>{props.children}</li>
    );
};

export default Todo;