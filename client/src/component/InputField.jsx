import React, {useState} from 'react';
import InputUI from "./UI/input/InputUI";

const InputField = React.forwardRef((props, ref) => {
    const [input, setInput] = useState({field: '', placeholder: ''})

    return (
        <div>
            <InputUI
                readOnly={props.readonly}
                ref={ref}
                value={input.field}
                type="number"
                placeholder={props.start}
                onChange={e => setInput({...input, field: e.target.value})}
            />
        </div>
    );
});

export default InputField;