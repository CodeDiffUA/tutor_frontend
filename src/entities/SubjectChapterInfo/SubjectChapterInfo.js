import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import './subject_chapter_info.scss'
import {setActiveGlobalName} from "../../store";
import {useNavigate, useParams} from "react-router-dom";

const SubjectChapterInfo = ({ukr_name, en_name}) => {
    const dispatch = useDispatch();
    const searchParams = useParams();
    const navigate = useNavigate();
    // console.log(searchParams)


    return (
        <button className={'subject-chapter-info'}>
            <h5
                onClick={() => {
                    navigate(`/subjects/${searchParams.subject}`)
                    dispatch(setActiveGlobalName([en_name, ukr_name]))
                }}
            >● {ukr_name}</h5>
            {/*<h6>| 32/80</h6>*/}
        </button>
    );
};

export default SubjectChapterInfo;