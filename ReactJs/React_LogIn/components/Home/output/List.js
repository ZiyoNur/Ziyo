import React from "react";
import classes from './List.module.css';
import Card from "../../card/Card";

const List = (props) => {
    return(
        <Card>
            <ul className={classes.ul}>
                {props.users.map((element, index) => (
                    <li key={index}>
                        {element.name} {element.age}
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default List;