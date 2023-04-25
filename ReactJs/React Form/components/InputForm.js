import React, {useState} from "react";
import classes from './InputForm.module.css'


const InputForm = props => {
    const[enteredValue, setEnteredValue] = useState('');

    const inputFunction = (e) => {
        setEnteredValue(e.target.value);
    }

    const inputSubmitHandler = (e) => {
        e.preventDefault();

        if(enteredValue.trim().length === 0){
            return;
        }
        props.formInputs(enteredValue);

        // Clear input
        setEnteredValue('');
    }
    return (
        
            <form 
                className={classes.main_form}
                onSubmit={inputSubmitHandler}
            >
                <label htmlFor="text">Add your daily routines</label>
                <input 
                    type="text"
                    value={enteredValue}
                    onChange={inputFunction}
                />
                <button type="submit">Save</button>
            </form>
    );
};

export default InputForm;