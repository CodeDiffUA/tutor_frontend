import React from 'react';

import './green_button.scss'
const GreenButton = ({text}) => {
    return (
        <div className={'green-button'}>
            {text}
        </div>
    );
};

export default GreenButton;