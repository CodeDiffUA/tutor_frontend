import React from 'react';
import './wave_item.scss'

const WaveItem = () => {
    return (
        <div className={'wave-item'}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id={"wavepath"} d="M0,0 L110,0C35,150 35,0 0,100z"></path>
            </svg>
        </div>
    );
};

export default WaveItem;