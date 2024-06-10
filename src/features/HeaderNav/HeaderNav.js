import React from 'react';

import icon_books from './images/icon_books.svg'
import icon_notification from './images/icon_notification.svg'
import icon_list_check from './images/icon_list_check.svg'
import './header_nav.scss'
import SubjectsDropdown from "../../entities/SubjectsDropdown/SubjectsDropdown";
import {useNavigate} from "react-router-dom";

const HeaderNav = () => {
    const navigate = useNavigate();

    return (
        <div className={'header-nav'}>
            {/*<div className={'logo'}>logo</div>*/}
            {/*<h6>dropdown</h6>*/}
            <SubjectsDropdown/>
            <nav>
                <div>
                    <img src={icon_notification}/>
                    <p>Чат-бот</p>
                </div>
                {/*<div>*/}
                {/*    <img src={icon_books}/>*/}
                {/*    <p>Лекції</p>*/}
                {/*</div>*/}
                <div>
                    <img src={icon_list_check}/>
                    <p>Тести</p>
                </div>
            </nav>
            <div
                className={'profile-icon'}
                onClick={() => navigate('/profile')}></div>
        </div>
    );
};

export default HeaderNav;