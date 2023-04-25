import React from "react";
import classes from './Header.module.css';

const Header = props => {
    return(
        <header className={classes.main_header}>
            <h2 className={classes.main_logo}>Logo</h2>
            <nav className={classes.main_nav}>
                <li>Home</li>
                <li>Contact</li>
                <li>Main</li>
                <li>Logout</li>
            </nav>
        </header>
    )
}

export default Header;