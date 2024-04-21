import React, {useState} from 'react';
import AuthorizationInput from "../../shared/AuthorizationInput/AuthorizationInput";
import AuthorizationSubmitButton from "../../shared/AuthorizationSubmitButton/AuthorizationSubmitButton";
import {useDispatch} from "react-redux";
import {registration} from "../../store";
import AuthTextField from "../../shared/AuthTextFiled/AuthTextFiled";

const RegisterItem = () => {

    const [usernameOrEmail, setUsernameOrEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({usernameOrEmail, password, name})

        dispatch(registration({
            username: name,
            email: usernameOrEmail,
            password: password,
            form: "FIFTH",
            age: 17
        }))
    }

    return (

        <div className={"register-item"}>
            <form className={"login-item"} onSubmit={handleSubmit}>
                <p>Створіть аккаунт</p>
                <AuthTextField
                    text={'Email'}
                    width={'320px'}
                    type={'text'}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                />
                <AuthTextField
                    text={'Password'}
                    width={'320px'}
                    type={'text'}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <AuthTextField
                    text={'Name'}
                    width={'320px'}
                    type={'text'}
                    onChange={(e) => setName(e.target.value)}
                />
                <AuthorizationSubmitButton/>
            </form>
        </div>
    );
};

export default RegisterItem;