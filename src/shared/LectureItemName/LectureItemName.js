import React from 'react';
import {Link} from "react-router-dom";
import book from './images/book.svg'
import done_book from './images/done_book.svg'

import './lecture_item_name.scss';

const LectureItemName = ({text, learned, lecture_name}) => {
    return (
        <div className={'lecture-item-name'}>
            <div>
                {!learned&&<img src={book}/>}
                {learned&&<img src={done_book}/>}
            </div>
            <Link to={lecture_name}>{text}</Link>
        </div>
    );
};

export default LectureItemName;