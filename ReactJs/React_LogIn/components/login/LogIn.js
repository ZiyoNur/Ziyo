import React, { useState } from "react";
import classes from './LogIn.module.css';
import Card from "../card/Card";

const LogIn = props => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const emailHandler = e => {
        setEmail(e.target.value);
    };
    const passwordHandler = e => {
        setPassword(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();

        if(password.trim().length < 6) return;
        props.onLogin(email, password);
    }
    return (
        <Card className={classes['form-card']}>
            <form
                onSubmit={submitForm} 
                className={classes['form-login']}>

                <label>Email</label>
                <input 
                    type="email"
                    onChange={emailHandler}
                />

                <label>Password</label>
                <input 
                    type="password" 
                    onChange={passwordHandler}
                />

                <button
                    className={classes['login-btn']}
                    type="submit">Login</button>
            </form>
        </Card>
    );
};

export default LogIn;