import React, {useState} from 'react';

const CalcField = (props) => {
    const calculated = (firstVal, secondVal) => {
        let result = parseInt(firstVal) + parseInt(secondVal)
        return result
    }

    return (
        <div style={{width: "125px"}}>
            {calculated(props.firstVal, props.secondVal)}
        </div>
    );
};

export default CalcField;