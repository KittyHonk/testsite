import React, {useState} from 'react';

const DifferenceField = (...props) => {
    const [state, setState] = useState({var1: props.var1, var2: props.var2, result: 0})

    const difference = () => {
        const res = state.var2 - state.var1;
        setState({result: res})
    }

    return (
        <div onSubmit={difference}>
            {state.result}
        </div>
    );
};

export default DifferenceField;