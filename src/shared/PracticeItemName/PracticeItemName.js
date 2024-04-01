import React from 'react';

import './practice_item_name.scss'
import GreenButton from "../GreenButton/GreenButton";
const PracticeItemName = ({name, score}) => {
    return (
        <div className={'practice-item-name'}>
            <div className={'content'}>
                <h5>{name}</h5>
                {score!==-1&&<GreenButton text={'спробувати ще раз'}/>}
                {score===-1&&<GreenButton text={'почати'}/>}

            </div>
            <div className={'vertical-line'}>
                {score!==-1&&<h5>{score}/12</h5>}
                {score===-1&&<h5>Не початий</h5>}

            </div>
        </div>
    );
};

export default PracticeItemName;