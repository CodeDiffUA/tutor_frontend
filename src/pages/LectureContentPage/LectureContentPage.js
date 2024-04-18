import React from 'react';
import './lecture_content_page.scss'

import data_json from "./alphabet_sounds_transcrioption.json"
import LectureInfoBlock from "../../features/LectureInfoBlock/LectureInfoBlock";
import {findNonSerializableValue} from "@reduxjs/toolkit";
const LectureContentPage = () => {
    console.log(data_json['lection'])
    return (
        <div className={'lecture-content-page'}>
            {data_json['lection'].map((lecture, index) => (
                <LectureInfoBlock key={index} lecture={lecture}/>
                )
            )}
        </div>
    );
};

export default LectureContentPage;