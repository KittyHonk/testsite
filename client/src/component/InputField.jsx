import React, {useEffect, useState} from 'react';
import InputUI from "./UI/input/InputUI";
import "../styles/Component.css"

const InputField = React.forwardRef((props, ref) => {
    const [input, setInput] = useState({field: ''})
    const maxInput = 5
    let readOnlyCheck = false
    let bg = ""

    useEffect(() => {
        if (input.field.length > maxInput) {
            let tempInput = input.field.slice(0, maxInput)
            setInput({field: tempInput})
        }
    }, [input])

    if (props.readonly) {
        readOnlyCheck = true
    }

    if ((props.user !== "ADMIN") && (props.user !== undefined)) {
        readOnlyCheck = true
        bg = 'rgba(234,119,119,0.45)'
    }

    return (
        <div>
            <div style={{display: "none"}}>
                {props.children}
            </div>
            <div>
            <InputUI
                style={{backgroundColor: `${bg}`}}
                readOnly={readOnlyCheck}
                ref={ref}
                value={input.field}
                type="number"
                placeholder={props.start}
                onChange={e => setInput({...input, field: e.target.value})}
            />
            </div>
        </div>
    );
});

export default InputField;