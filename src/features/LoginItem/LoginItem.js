import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {login} from "../../store";

import AuthorizationInput from "../../shared/AuthorizationInput/AuthorizationInput";
import AuthorizationSubmitButton from "../../shared/AuthorizationSubmitButton/AuthorizationSubmitButton";
import './login_item.scss'
import AuthTextField from "../../shared/AuthTextFiled/AuthTextFiled";


const LoginItem = () => {
    // const {movies, term, status, error, currentPage} = useSelector(( state => state.movieReducer))

    const [usernameOrEmail, setUsernameOrEmail] = useState()
    const [password, setPassword] = useState()

    const dispatch = useDispatch();

    const fetchData = async (e) => {
        e.preventDefault()
        try {
            const body = {
                "usernameOrEmail": "bodya",
                "password": "karpatyLviv"
            };

            const response = await fetch('https://tutor-backend-k28m.onrender.com/api/v1/authentication/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            const data = await response.json();
            console.log(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({usernameOrEmail, password})
        dispatch(login({usernameOrEmail, password}))

    }

    return (
        <>
            <form className={"login-item"} onSubmit={handleSubmit}>
                <p>Ласкаво просимо назад</p>
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
                {/*<AuthorizationInput placeholder_text={"email"}*/}
                {/*                    on_change_function={(e) => setUsernameOrEmail(e.target.value)}/>*/}
                {/*<AuthorizationInput placeholder_text={"password"}*/}
                {/*                    on_change_function={(e) => setPassword(e.target.value)}/>*/}
                {/*<TextField className={'authorization-input'} id="outlined-basic" label="Outlined" variant="outlined" />*/}
                {/*<TextField className={'authorization-input'} id="outlined-basic" label="email" variant="outlined"*/}
                {/*           sx={input_styles}/>*/}
                <AuthorizationSubmitButton/>
            </form>
            {/*<button onClick={fetchData}>fuck</button>*/}

        </>
    );
};

export default LoginItem;