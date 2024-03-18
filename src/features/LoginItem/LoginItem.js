import React, {useState} from 'react';

import './login_item.scss'
import AuthorizationInput from "../../shared/AuthorizationInput/AuthorizationInput";
import AuthorizationSubmitButton from "../../shared/AuthorizationSubmitButton/AuthorizationSubmitButton";




const LoginItem = () => {

    const [login_data, setLogin_data] = useState({email: '', password: ''})

    const handleChange = (e) => {
        console.log(e);
        setLogin_data({...login_data, })
    }
    console.log(typeof handleChange)
    return (
        <form className={"login-item"}>
            <p>Ласкаво просимо назад</p>
            <AuthorizationInput placeholder_text={"email"} />
            <AuthorizationInput placeholder_text={"password"} />
            <AuthorizationSubmitButton on_submit_function={handleChange}/>
        </form>
    );
};

export default LoginItem;