import React from 'react';

import './green_button.scss'

const GreenButton = ({text}) => {
    return (
        <div className={'green-button'}>
            <h5>{text}</h5>
        </div>
    );
};

export default GreenButton;