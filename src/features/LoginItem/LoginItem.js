import React, {useState} from 'react';

import './login_item.scss'
import AuthorizationInput from "../../shared/AuthorizationInput/AuthorizationInput";
import AuthorizationSubmitButton from "../../shared/AuthorizationSubmitButton/AuthorizationSubmitButton";




const LoginItem = () => {

    const [login_data, setLogin_data] = useState({email: '', password: ''})

    const handleChange = (e) => {
        // console.log(e.target.placeholder);
        // console.log(e.target.value);
        setLogin_data({...login_data, [e.target.placeholder]: e.target.value})
        // console.log(login_data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login_data)
    }
    return (
        <form className={"login-item"} onSubmit={handleSubmit}>
            <p>Ласкаво просимо назад</p>
            <AuthorizationInput placeholder_text={"email"} on_change_function={handleChange}/>
            <AuthorizationInput placeholder_text={"password"} on_change_function={handleChange}/>
            <AuthorizationSubmitButton/>
        </form>
    );
};

export default LoginItem;