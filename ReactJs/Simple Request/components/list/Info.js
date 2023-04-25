import React from "react";
import classes from './Info.module.css';

const Info = props => {
    return(
        <li className={classes.info}>
            <h2>{props.fn}</h2>
            <h2>{props.sn}</h2>
            <h3>{props.ag}</h3>
            <p>{props.txt}</p>
        </li>
    );
};

export default Info;