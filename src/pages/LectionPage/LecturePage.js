import React from 'react';

import './lecture_page.scss'
import ContentOfLecture from "../../features/ContentOfLecture/ContentOfLecture";
import LectureItemContent from "../../features/LectureItemContent/LectureItemContent";

const LecturePage = () => {
    return (
        <div className={'lecture-page'}>
            <ContentOfLecture />
            <LectureItemContent />

        </div>
    );
};

export default LecturePage;