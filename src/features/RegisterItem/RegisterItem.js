import React, {useState} from 'react';
import AuthorizationInput from "../../shared/AuthorizationInput/AuthorizationInput";
import AuthorizationSubmitButton from "../../shared/AuthorizationSubmitButton/AuthorizationSubmitButton";
import {useDispatch} from "react-redux";
import {registration} from "../../store";

const RegisterItem = () => {

    const [login_data, setLogin_data] = useState({email: '', password: '', name: ''})

    const dispatch = useDispatch();

    const handleChange = (e) => {
        // console.log(e.target.placeholder);
        // console.log(e.target.value);
        setLogin_data({...login_data, [e.target.placeholder]: e.target.value})
        // console.log(login_data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login_data)

        dispatch(registration({
            username: "bodya",
            email: "shraierbodya@gmail.com",
            password: "karpatyLviv",
            form: "FIFTH",
            age: 17
        }))
    }

    return (

        <div className={"register-item"}>
            <form className={"login-item"} onSubmit={handleSubmit}>
                <p>Створіть аккаунт</p>
                <AuthorizationInput placeholder_text={"name"} on_change_function={handleChange}/>
                <AuthorizationInput placeholder_text={"email"} on_change_function={handleChange}/>
                <AuthorizationInput placeholder_text={"password"} on_change_function={handleChange}/>
                <AuthorizationSubmitButton/>
            </form>
        </div>
    );
};

export default RegisterItem;