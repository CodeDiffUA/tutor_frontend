import React from 'react';

import './lecture_item_content.scss'
import Progress from "../../shared/Progress/Progress";
import LectureItemInfo from "../../entities/LectureItemInfo/LectureItemInfo";
const LectureItemContent = () => {
    return (
        <div className={'lecture-item-content'}>
            <div className={'lecture-item-content__description'}>
                <h3>Тема 1: Фонетика</h3>
                <div>
                    <h4>курсу пройдено: 40%</h4>
                    <div className={'vertical-line'} />
                    <h4>32 / 80  Points</h4>
                    <Progress current_value={40} max_value={100}></Progress>
                </div>
            </div>
            <LectureItemInfo />
        </div>
    );
};

export default LectureItemContent;