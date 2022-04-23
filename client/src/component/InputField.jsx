import React, {useState} from 'react';
import InputUI from "./UI/input/InputUI";

const InputField = React.forwardRef((props, ref) => {
    const [input, setInput] = useState({field: ''})
    let readOnlyCheck = false

    if ((props.user !== "ADMIN") && (props.user !== undefined)) {
        readOnlyCheck = true
    }

    return (
        <div>
            <InputUI
                readOnly={readOnlyCheck}
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