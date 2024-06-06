import React, {useEffect} from 'react';

import './lecture_item_content.scss'
import Progress from "../../shared/Progress/Progress";
import LectureItemInfo from "../../entities/LectureItemInfo/LectureItemInfo";
import {useDispatch, useSelector} from "react-redux";
import {getContentOfGlobalName} from "../../store";


const LectureItemContent = () => {

    const {active_global_name, global_name_content} = useSelector(( state => state.lectureReducer))
    const dispatch = useDispatch();

    useEffect(() => {
        if (active_global_name.length !== 0) {
            dispatch(getContentOfGlobalName({globalName: active_global_name[0]}))
        }

    }, [JSON.stringify(active_global_name)]);


    return (
        <div className={'lecture-item-content'}>
            {Object.keys(global_name_content).length !== 0&&<div className={'lecture-item-content__description'}>
                <h3>{active_global_name[1]}</h3>
                <div>
                    <h4>Курсу пройдено: {global_name_content?.points[0] / global_name_content?.points[1]}%</h4>
                    <div className={'vertical-line'}/>
                    <h4>{global_name_content?.points[0]} / {global_name_content?.points[1]} Points</h4>
                    <Progress current_value={global_name_content?.points[0]}
                              max_value={global_name_content?.points[1]}></Progress>
                </div>
            </div>}
            {Object.keys(global_name_content).length !== 0&&<LectureItemInfo
                lectures={global_name_content.content.lectures}
                practices={global_name_content.content.practices}
            />}
        </div>
    );
};

export default LectureItemContent;