import React from 'react';
import classes from "./ButtonUI.module.css";

const ButtonUI = ({children, ...props}) => {
    return (
        <button {...props} className={classes.buttonUI}>
            {children}
        </button>
    );
};

export default ButtonUI;