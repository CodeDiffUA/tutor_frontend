import React from 'react';
import './recovery_email_item.scss';

const RecoveryEmailItem = () => {
    return (
        <div className={'recovery-email'}>
            <h3>Забули пароль?</h3>
            <h5>Введіть свою адресу електроної адреси, щоб отримати інструкцію для скидання паролю</h5>
            <div className={'recovery-email__input'}>
                <input type='text' placeholder={'Email'}/>
            </div>
            <div className={'recovery-email__button'}>
                <button style={{width: '115px'}}>Назад</button>
                <button style={{width: '185px'}}>Скинути пароль</button>
            </div>
        </div>
    );
};

export default RecoveryEmailItem;