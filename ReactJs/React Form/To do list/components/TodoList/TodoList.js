import React from "react";
import classes from './TodoList.module.css';
import Todo from "./Todo";
import Card from "../Card/Card";

const TodoList = props => {

    return(
        <Card>
            <ul className={classes['main-ul']}>
            {props.todo.map((el, index) => (
                <Todo
                    key={index}
                    id={el.id}
                >
                    {el.list}
                </Todo>
            ))}
        </ul>
        </Card>
    )
};

export default TodoList;