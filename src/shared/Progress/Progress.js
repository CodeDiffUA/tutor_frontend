import React from 'react';

import './progress.scss'

const Progress = ({current_value, max_value}) => {
    return (
        <progress
            className={'study-progress'}
            value={current_value}
            max={max_value}
        >

        </progress>
    );
};

export default Progress;