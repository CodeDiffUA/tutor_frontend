import React from 'react';

import './autorization_input.scss'



const AuthorizationInput = ({placeholder_text}) => {
    return (
        <input className={"authorization-input"} type={"text"} placeholder={placeholder_text}>

        </input>
    );
};

export default AuthorizationInput;