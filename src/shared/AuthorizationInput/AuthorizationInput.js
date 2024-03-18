import React from 'react';

import './autorization_input.scss'



const AuthorizationInput = ({placeholder_text, on_change_function}) => {
    return (
        <input
            className={"authorization-input"}
            type={"text"}
            placeholder={placeholder_text}
            onChange={on_change_function}
        >

        </input>
    );
};

export default AuthorizationInput;