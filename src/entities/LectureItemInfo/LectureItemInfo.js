import React from 'react';

import './lecture_item_info.scss'
import LectureItemName from "../../shared/LectureItemName/LectureItemName";
import PracticeItemName from "../../shared/PracticeItemName/PracticeItemName";

const LectureItemInfo = ({lectures, practices}) => {
    return (
        <div className={'lecture-item-info'}>
            <div className={'section'}>
                <h3>Лекції</h3>
                <div>
                    {lectures.map((value, index) => (
                        <LectureItemName
                            key={index}
                            text={value['theme_names'][1]}
                            learned={value['theme_names'][2]}
                            lecture_name={value['theme_names'][0]}
                        />
                    ))}
                </div>
            </div>
            <div className={'section'}>
                <h3>Практика</h3>
                <div>
                    {practices.map((value, index) => (
                        <PracticeItemName key={index} en_name={value[0]} ukr_name={value[1]} score={-1}/>
                    ))}

                </div>
            </div>

        </div>
    );
};

export default LectureItemInfo;