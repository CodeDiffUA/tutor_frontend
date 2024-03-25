import React, {useState} from 'react';
import './login_register_page.scss'
import AuthorizationInput from "../../shared/AuthorizationInput/AuthorizationInput";
import LoginItem from "../../features/LoginItem/LoginItem";
import RegisterItem from "../../features/RegisterItem/RegisterItem";

const LoginRegisterPage = () => {

    const [is_login_active, setIs_login_active] = useState(true)

    const change_item = () => {
        setIs_login_active(!is_login_active)
    }

    return (
        <div className={"login-register-page"}>
            {is_login_active&&<LoginItem />}
            {!is_login_active&&<RegisterItem />}
            {is_login_active&&<button onClick={change_item}>Ви тут вперше? <span>Зареєструйтесь зараз</span> </button>}
            {!is_login_active&&<button onClick={change_item}>Вже маєш обліковий запис? <span>Увійти</span> </button>}
        </div>
    );
};

export default LoginRegisterPage;