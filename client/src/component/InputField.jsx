import React, {useState} from 'react';
import InputUI from "./UI/input/InputUI";

const InputField = ({getChildVal = '', ...props}) => {
    const [input, setInput] = useState({id: '', field: '', placeholder: ''})

    function onChangeHandler(e) {
        const callbackVal = {
            field: e.target.value, id: props.id
        }
        getChildVal(callbackVal)
        setInput({field: e.target.value, placeholder: props.placeholder, id: props.id})
    }

    return (
        <div>
            <InputUI
                id={props.id}
                value={input.field}
                type="text"
                placeholder={props.placeholder}
                /*onChange={e => setInput({...input, field: e.target.value})}*/
                onChange={onChangeHandler}
            />
        </div>
    );
};

export default InputField;