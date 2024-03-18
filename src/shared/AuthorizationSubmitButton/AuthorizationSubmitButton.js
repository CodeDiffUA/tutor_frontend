import React from 'react';

import './authorization_submit_button.scss'




const AuthorizationSubmitButton = ({on_change_function}) => {
    return (
        <button className={"authorization-submit-button"} onChange={on_change_function}>
            Продовжити
        </button>
    );
};

export default AuthorizationSubmitButton;