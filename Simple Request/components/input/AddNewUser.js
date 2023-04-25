import React, { useState } from "react";
import classes from './AddNewUser.module.css';

const AddNewUser = (props) => {
    const [fName, setFname] = useState('');
    const [sName, setSname] = useState('');
    const [age, setAge] = useState('');
    const [text, setText] = useState('');

    const changeFnameHandler = e => {
        setFname(e.target.value);
    };
    const changeSnameHandler = e => {
        setSname(e.target.value);
    }
    const changeAgeHandler = e => {
        setAge(e.target.value);
    }
    const changeTextHandler = e => {
        setText(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();

        const newUser = {
            fname: fName,
            sname: sName,
            age: age,
            info: text,
    }
        props.onAddUser(newUser);

        // Clear inputs
        setFname('');
        setSname('');
        setAge('');
        setText('');
    }

    return (
        <form className={classes["user-form"]} onSubmit={submitHandler}>
            <div className={classes.user}>
                <label htmlFor='name'>First Name</label>
                <input
                    type='text'
                    id='fname'
                    onChange={changeFnameHandler}
                    value={fName}
                />
            </div>
            <div className={classes.user}>
                <label htmlFor='lname'>Last Name</label>
                <input
                    type='text'
                    id='lname'
                    onChange={changeSnameHandler}
                    value={sName}
                />
            </div>
            <div className={classes.user}>
                <label htmlFor='age'>Age</label>
                <input
                    type='number'
                    id='age'
                    onChange={changeAgeHandler}
                    value={age}
                />
            </div>
            <div className={classes.user}>
                <label htmlFor='Text'>Some info</label>
                <textarea
                    rows='5'
                    id='full-info'
                    onChange={changeTextHandler}
                    value={text}
                ></textarea>
            </div>
            <div className={classes['btn-btts']}>
            <button className={classes.submit}
                type="submit">Add User</button>
            <button className={classes.fetch}
                onClick={props.onFetch}>Fetch</button>
            </div>
        </form>
    );
};

export default AddNewUser;