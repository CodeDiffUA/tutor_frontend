import React from 'react';

import './content_of_lecture.scss'
import SubjectChapterInfo from "../../entities/SubjectChapterInfo/SubjectChapterInfo";

const ContentOfLecture = () => {
    return (
        <div className={'content-of-lecture'}>
            <h3>Українська мова</h3>
            <SubjectChapterInfo />
            <SubjectChapterInfo />

        </div>
    );
};

export default ContentOfLecture;