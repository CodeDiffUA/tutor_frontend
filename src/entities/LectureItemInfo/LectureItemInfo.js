import React from 'react';

import './lecture_item_info.scss'
import LectureItemName from "../../shared/LectureItemName/LectureItemName";
import GreenButton from "../../shared/GreenButton/GreenButton";
import PracticeItemName from "../../shared/PracticeItemName/PracticeItemName";
const LectureItemInfo = () => {
    return (
        <div className={'lecture-item-info'}>
            <div className={'section'}>
                <h3>Лекції</h3>
                <div>
                    <LectureItemName
                        text={'Співвідношення звуків і літер'}
                        learned={true}
                    />
                    <LectureItemName
                        text={'Правила транскрипції'}
                        learned={false}
                    />
                    <LectureItemName
                        text={'Особливості вимови звуків'}
                        learned={false}
                    />
                </div>
            </div>
            <div className={'section'}>
                <h3>Практика</h3>
                <div>
                    <PracticeItemName name={'Дзвінкі звуки'} score={5}/>
                    <PracticeItemName name={'Глухі звуки'} score={9}/>
                    <PracticeItemName name={'Дзвінкі звуки'} score={-1}/>

                </div>
            </div>

        </div>
    );
};

export default LectureItemInfo;