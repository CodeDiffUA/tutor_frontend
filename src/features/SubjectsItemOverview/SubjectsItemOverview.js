import React from 'react';
import './subjects_item_overview.scss'
const SubjectsItemOverview = ({text, bg_color}) => {
    return (
        <div className={'subject-item-overview'} style={{backgroundColor: bg_color}}>
            <h4>{text}</h4>
            <div>

            </div>

        </div>
    );
};

export default SubjectsItemOverview;