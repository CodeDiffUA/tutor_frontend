import React from 'react';
import {Outlet} from "react-router-dom";
import ContentOfLecture from "../../features/ContentOfLecture/ContentOfLecture";

import './lecture_layout.scss'
const LectureLayout = () => {
    return (
        <div className={'lecture-layout'}>
            <ContentOfLecture />
            <Outlet />
        </div>
    );
};

export default LectureLayout;