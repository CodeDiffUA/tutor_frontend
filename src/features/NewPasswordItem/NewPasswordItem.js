import React, { useState } from 'react';
import './new_password_item.scss';

const NewPasswordItem = () => {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordStatus, setPasswordStatus] = useState(false);

    const checkPasswords = () => {
        if (password1 !== password2) {
            setPasswordStatus(true);
        } else {
            setPasswordStatus(false);
        }
    };

    return (
        <div className={'new-password'}>
            <h3>Введіть новий пароль</h3>
            <div className={'new-password__input'}>
                <input type='password' placeholder={'Новий пароль'} value={password1} onChange={(e) => setPassword1(e.target.value)}/>
                <input type='password' placeholder={'Новий пароль'} value={password2} onChange={(e) => setPassword2(e.target.value)}/>
            </div>
            {passwordStatus && <span style={{color: 'red'}}>Паролі не співпадають</span>}
            <button onClick={checkPasswords}>Продовжити</button>
        </div>
    );
};

export default NewPasswordItem;