import React from "react";
import Info from "./Info";
import classes from './InfoLists.module.css';

const InfoLists = props => {
    return(
        <nav className={classes['info-list']}>
            {
                props.info.map((el, index) => (
                    <Info
                        key={index}
                        fn={el.fname}
                        sn={el.sname}
                        ag={el.age}
                        txt={el.info}
                    />
                ))
            }
        </nav>
    );
};

export default InfoLists;