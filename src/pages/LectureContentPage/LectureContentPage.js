import React, {useEffect} from 'react';
import './lecture_content_page.scss'

import LectureInfoBlock from "../../features/LectureInfoBlock/LectureInfoBlock";
import {useParams} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {getContentOfLecture, getSidebarInfo, setActiveGlobalName} from "../../store";


const LectureContentPage = () => {
    const searchParams = useParams();

    const {lecture_content} = useSelector(( state => state.lectureReducer))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContentOfLecture({themeName: searchParams['lecture_name']}))
    }, []);

    return (
        <div className={'lecture-content-page'}>
            {Object.keys(lecture_content).length !== 0&&lecture_content['lection'].map((lecture, index) => (
                <LectureInfoBlock key={index} lecture={lecture}/>
                )
            )}
        </div>
    );
};

export default LectureContentPage;