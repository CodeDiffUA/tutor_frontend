import React from 'react';
import './scroll_subjects_bar.scss'
const ScrollSubjectsBar = () => {
    return (
        <div className={'scroll-subjects-bar'}>
            <div className={'scroll-subjects-bar__subjects'}>
                <a>Англійська мова</a>
                <a>Українська мова</a>
                <a>Математика</a>
                <a>Історія України</a>
            </div>
        </div>
    );
};

export default ScrollSubjectsBar;