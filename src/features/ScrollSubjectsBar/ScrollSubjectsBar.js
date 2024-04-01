import React from 'react';
import './scroll_subjects_bar.scss'
import {Link} from "react-router-dom";
const ScrollSubjectsBar = () => {
    return (
        <div className={'scroll-subjects-bar'}>
            <div className={'scroll-subjects-bar__subjects'}>
                <Link to={'subjects/1'}>Англійська мова</Link>
                <Link to={'subjects/2'}>Українська мова</Link>
                <Link to={'subjects/3'}>Математика</Link>
                <Link to={'subjects/4'}>Історія України</Link>
            </div>
        </div>
    );
};

export default ScrollSubjectsBar;