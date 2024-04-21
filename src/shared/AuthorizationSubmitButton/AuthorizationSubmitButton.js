import React from 'react';

import './authorization_submit_button.scss'


const AuthorizationSubmitButton = ({on_click}) => {
    return (
        <button type={'submit'} className={"authorization-submit-button"} onClick={on_click}>
            Продовжити
        </button>
    );
};

export default AuthorizationSubmitButton;