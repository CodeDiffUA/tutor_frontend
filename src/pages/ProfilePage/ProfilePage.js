import React from 'react';

import './profile_page.scss'
import ProfileSubjectItem from "../../entities/ProfileSubjectItem/ProfileSubjectItem";

const ProfilePage = () => {
    return (
        <div className={'profile-page'}>
            <div className={'user-info'}>
                <div className={'profile-icon'}></div>
                <h4>Nick Name</h4>
                <h4>description</h4>
                <button className={'add-friend'}>Добавити</button>
                <div className={'user-info__statistic'}>
                    <h4>Днів поспіль</h4>
                    <div><h4>12</h4></div>
                </div>
                <div className={'user-info__statistic'}>
                    <h4>Points</h4>
                    <div><h4>1232</h4></div>
                </div>

            </div>


            <div className={'user-courses'}>
                <p>Мої курси</p>
                <ProfileSubjectItem />
            </div>
        </div>
    );
};

export default ProfilePage;