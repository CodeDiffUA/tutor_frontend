import React from 'react';

import book from './images/book.svg'
import done_book from './images/done_book.svg'

import './lecture_item_name.scss';
const LectureItemName = ({text, learned}) => {
    return (
        <div className={'lecture-item-name'}>
            {!learned&&<img src={book}/>}
            {learned&&<img src={done_book}/>}
            <h5>{text}</h5>
        </div>
    );
};

export default LectureItemName;