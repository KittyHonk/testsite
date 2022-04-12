import React from 'react';
import classes from "./InputUI.module.css";

const InputUI = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={classes.InputUI}/>
    );
});

export default InputUI;