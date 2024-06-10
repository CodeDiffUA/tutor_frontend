import React from 'react';

import './practice_item_name.scss'
import GreenButton from "../GreenButton/GreenButton";
import {useNavigate, useParams} from "react-router-dom";

const PracticeItemName = ({ukr_name, en_name, score}) => {
    const navigate = useNavigate();
    const params = useParams()

    return (
        <div className={'practice-item-name'}>
            <div className={'content'}>
                <h5>{ukr_name}</h5>


            </div>
            <div className={'vertical-line'}>
                {score!==-1&&<h5>{score}/12</h5>}
                {score===-1&&<h5>-/12</h5>}
                {score!==-1&&<GreenButton text={'Ще раз'} onClick={() => navigate(`/subjects/${params.subject}/practices/${en_name}`)}/>}
                {score===-1&&<GreenButton text={'Почати'} onClick={() => navigate(`/subjects/${params.subject}/practices/${en_name}`)}/>}

            </div>
        </div>
    );
};

export default PracticeItemName;