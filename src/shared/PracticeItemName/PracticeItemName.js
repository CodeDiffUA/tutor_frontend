import React from 'react';

import './practice_item_name.scss'
import GreenButton from "../GreenButton/GreenButton";

const PracticeItemName = ({name, score}) => {
    return (
        <div className={'practice-item-name'}>
            <div className={'content'}>
                <h5>{name}</h5>


            </div>
            <div className={'vertical-line'}>
                {score!==-1&&<h5>{score}/12</h5>}
                {score===-1&&<h5>-/12</h5>}
                {score!==-1&&<GreenButton text={'Ще раз'}/>}
                {score===-1&&<GreenButton text={'Почати'}/>}

            </div>
        </div>
    );
};

export default PracticeItemName;