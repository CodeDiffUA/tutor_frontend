import React from 'react';

import './lecture_item_info.scss'
import LectureItemName from "../../shared/LectureItemName/LectureItemName";
import PracticeItemName from "../../shared/PracticeItemName/PracticeItemName";

const LectureItemInfo = ({lectures, practices}) => {
    // console.log(lectures)
    // console.log(practices)
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
                    {/*<PracticeItemName name={'Дзвінкі звуки'} score={5}/>*/}
                    {/*<PracticeItemName name={'Глухі звуки'} score={9}/>*/}
                    {/*<PracticeItemName name={'Дзвінкі звуки'} score={-1}/>*/}

                </div>
            </div>

        </div>
    );
};

export default LectureItemInfo;