import React, {useState} from "react";
import classes from './Form.module.css';
import Card from "../Card/Card";


const Form = props => {
    const[toDo, setToDo] = useState('');

    const toDoHandler = e => {
        setToDo(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();

        props.onApp(toDo);
        setToDo('');
    };

    return(
        <Card>
            <form 
            className={classes['main-form']}
            onSubmit={submitHandler}
        >
            <div>
                <label htmlFor="task">New List</label>
                <input
                    type="text"
                    onChange={toDoHandler}
                    value={toDo}
                />
            </div>
            <button
                className={classes.button} 
                type="submit">SUBMIT</button>
        </form>
        </Card>
    );
};

export default Form;