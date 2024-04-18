import React from 'react';
import './lecture_info_block.scss'

const LectureInfoBlock = ({lecture}) => {
    const {text, table: {name, content}, prepared_question} = lecture
    console.log(content!=="")
    console.log(typeof content)
    return (
        <div className={'lecture-info-block'}>
            <pidaras>pidatas</pidaras>
            <p dangerouslySetInnerHTML={{ __html: text }} />
            <div>
                <h5 dangerouslySetInnerHTML={{__html: name}}/>
                {content !== "" && <img src={content} alt={'table-with-info'}/>}
            </div>
        </div>
    );
};

export default LectureInfoBlock;