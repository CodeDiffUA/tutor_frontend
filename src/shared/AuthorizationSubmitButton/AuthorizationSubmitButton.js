import React from 'react';

import './authorization_submit_button.scss'




const AuthorizationSubmitButton = ({on_submit_function}) => {
    return (
        <button type={"submit"} className={"authorization-submit-button"} >
            Продовжити
        </button>
    );
};

export default AuthorizationSubmitButton;