import React from 'react';

import ProfileSubjectSyllabusItem from "../../shared/ProfileSubjectSyllabusItem/ProfileSubjectSyllabusItem";

import down_arrow from './images/down_arrow.svg'
import './profile_subject_item.scss'

const ProfileSubjectItem = () => {
    return (
        <div className={'profile-subject-item'}>
            <div className={'profile-subject-item__name'}>
                <h3>5 клас</h3>
                <h3>Укр Мова</h3>
            </div>

            <div className={'line'}></div>

            <div className={'profile-subject-item__syllabus'}>
                <ProfileSubjectSyllabusItem
                    syllabus_item_name={'Фонетика'}
                    current_value={30}
                />
                <div><img src={down_arrow}/></div>
                <ProfileSubjectSyllabusItem
                    syllabus_item_name={'Орфоепія'}
                    current_value={0}
                />
                <div><img src={down_arrow}/></div>
                <ProfileSubjectSyllabusItem
                    syllabus_item_name={'Орфографія'}
                    current_value={77}
                />
                <div><img src={down_arrow}/></div>
                <ProfileSubjectSyllabusItem
                    syllabus_item_name={'Пунктуація'}
                    current_value={90}
                />

            </div>
        </div>
    );
};

export default ProfileSubjectItem;