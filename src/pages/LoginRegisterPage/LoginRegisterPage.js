import React from 'react';
import './login_register_page.scss'
import AuthorizationInput from "../../shared/AuthorizationInput/AuthorizationInput";
import LoginItem from "../../features/LoginItem/LoginItem";
import RegisterItem from "../../features/RegisterItem/RegisterItem";

const LoginRegisterPage = () => {
    return (
        <div className={"login-register-page"}>
            <LoginItem />
            <RegisterItem />
        </div>
    );
};

export default LoginRegisterPage;