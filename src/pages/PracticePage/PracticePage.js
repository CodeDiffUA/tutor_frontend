import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import practices_list from '../../features/LectureItemContent/practices_list.json';
import './practice_page.scss'

function findKeyByValue(jsonObj, searchValue) {
    for (const key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
            const array = jsonObj[key];
            for (const pair of array) {
                if (pair.includes(searchValue)) {
                    return key;
                }
            }
        }
    }
    return null; // Return null if the value is not found
}

function shuffle(original_array) {
    let array = [...original_array]
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const PracticePage = () => {
    const {subject, practice_name} = useParams()
    const theme = findKeyByValue(practices_list, practice_name)

    const [tests, setTests] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch(
            `https://tutor-backend-k28m.onrender.com/api/v1/practice/${subject}/${theme}/${practice_name}?size=5`,
            {
                method: "GET",
            }
        ).then((res) => res.json()).then((data) => {
            console.log(data)
            setTests(data)


        })
    }, []);

    return (
        <div className={'tests'}>
            {tests.length !==0 && tests.map((value, index) => (
                <div key={index} className={'test'}>
                    <h3 style={{fontSize: '22px'}}>{index + 1}. {value.question}</h3>

                    <div className={'variants'}>
                        {shuffle([...value.wrong, ...value.correct]).map((v, i) => (
                            <div key={i} className={'variant'}>

                                <input type="radio" id="checkbox" name={`${index}`}/>

                                <h3>{v}</h3>
                            </div>

                        ))}
                    </div>

                </div>
            ))}

            <button className={'end-test'} onClick={() => navigate('/subjects/ukr_mova')}>Завершити</button>
        </div>
    );
};

export default PracticePage;