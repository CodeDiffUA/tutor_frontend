import React, {useEffect} from 'react';

import './content_of_lecture.scss'
import SubjectChapterInfo from "../../entities/SubjectChapterInfo/SubjectChapterInfo";
import {useDispatch, useSelector} from "react-redux";
import {getSidebarInfo, setActiveGlobalName} from "../../store";
import {useParams} from "react-router-dom";


const ContentOfLecture = () => {
    const searchParams = useParams();

    const {sidebar_themes, active_global_name} = useSelector(( state => state.lectureReducer))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSidebarInfo({subject: searchParams.subject}))

    }, []);

    useEffect(() => {
        if (sidebar_themes.length !== 0 && active_global_name.length === 0) {
            dispatch(setActiveGlobalName(sidebar_themes[0]["name"]))
        }

    }, [sidebar_themes.length !== 0]);

    const ukr_name_subjects = {
        ukr_mova: 'Українська мова'
    }
    return (
        <div className={'content-of-lecture'}>
            <h3>{ukr_name_subjects[searchParams.subject]}</h3>
            {sidebar_themes&&sidebar_themes.map((value, index) => (
                <SubjectChapterInfo
                    key={index}
                    ukr_name={value["name"][1]}
                    en_name={value["name"][0]}
                />
            ))}

        </div>
    );
};

export default ContentOfLecture;