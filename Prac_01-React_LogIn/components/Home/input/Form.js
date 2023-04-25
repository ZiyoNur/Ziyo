import React, { useState } from "react";
import classes from './Form.module.css';
import Card from "../../card/Card";

const Form = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const changeNameHandler = e => {
        setEnteredName(e.target.value);
    };
    const changeAgeHandler = e => {
        setEnteredAge(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        };
        if(enteredAge < 1) {
            return;
        };

        props.onInput(enteredName, enteredAge);

        // Clear inputs
        setEnteredName('');
        setEnteredAge('');
    }
    return (
        <Card>
            <form
                onSubmit={submitHandler}
                className={classes["main-form"]}>
                <div className={classes.form}>

                    <label>Add Name</label>
                    <input
                        value={enteredName}
                        onChange={changeNameHandler}
                        type="text"
                    />

                    <label>Add Age</label>
                    <input
                        value={enteredAge}
                        onChange={changeAgeHandler}
                        type="number"
                    />
                </div>

                <div className={classes.btn}>
                    <button className={classes.button} type="submit">Submit</button>
                </div>
            </form>
        </Card>
    );
};

export default Form;