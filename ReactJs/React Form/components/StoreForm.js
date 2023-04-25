import React from "react";
import classes from './StoreForm.module.css';

const StoreForm = props => {


    return (
        <ul className={classes.main_nav}>
            {props.sttext.map(txt => (
                <li
                    key={txt.id}
                    id={txt.id}
                >
                    {txt.text}
                </li>
            ))}
        </ul>

        // <ul>
        //     {props.sttext.map(txt => (
        //         <li
        //             id={txt.id}
        //             key={txt.id}
        //         >{txt.text}</li>
        //     ))}
        // </ul>
    )
}

export default StoreForm;