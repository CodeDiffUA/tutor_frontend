import React from 'react';

import './profile_subject_syllabus_item.scss'
import Progress from "../Progress/Progress";

const ProfileSubjectSyllabusItem = ({syllabus_item_name, current_value}) => {
    return (
        <div className={'profile-subject-syllabus-item'}>
            <h4>{syllabus_item_name}</h4>
            {/*<progress value={current_value} max={100}></progress>*/}
            <Progress current_value={current_value} max_value={100}></Progress>
            {current_value !== 0&&<button>Продовжити</button>}
        </div>
    );
};

export default ProfileSubjectSyllabusItem;