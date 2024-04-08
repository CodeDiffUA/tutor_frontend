import React from 'react';
import './forgot_password_page.scss'
import RecoveryEmailItem from "../../features/RecoveryEmailItem/RecoveryEmailItem";

const ForgotPasswordPage = () => {
    return (
        <div className={'forgot-password'}>
            <RecoveryEmailItem />
        </div>
    );
};

export default ForgotPasswordPage;