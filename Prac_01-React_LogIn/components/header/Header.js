import React from "react";
import classes from './Header.module.css';


const Header = props => {
    return (
        <div className={classes['main-header']}>
            <h2 className={classes.logo}>Everything is good</h2>
            {props.show && <nav className={classes.nav}>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Info</a></li>
            </nav>}
            {props.show &&<button
                onClick={props.onLogout}
                 className={classes['btn-logout']}>Logout</button>}
        </div>
    );
};

export default Header;