import React from 'react';
import './inputField.css';

/**
 * Primary UI component for user interaction
 */
export const InputField = ({ state, type }) => {
    const [_state, setState] = React.useState(state);
    const [_validationMessage, setMessage] = React.useState("");

    React.useEffect(() => {
        setMessage("");
        setState(state);
    }, [state]);

    function validateEmail(e) {
        const { value } = e.target;

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            setState("valid");
            setMessage("Valid email address.");
        } else {
            setState("error");
            setMessage("Invalid email address.");
        }
    }

    return (
        <div>
            <input
                type={type}
                placeholder={type === "email" ? "ex: john_doe@gmail.com" : "Enter here"}
                className={_state}
                onChange={type === "email" ? validateEmail : () => { }}
                disabled={_state === 'disabled'}
            />
            <div className={`input-message ${_state}`}>{_validationMessage}</div>
        </div>
    );
};

InputField.defaultProps = {
    state: 'default',
    type: 'text',
};
