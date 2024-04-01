import React from 'react';
import './search_bar.scss'
import search from './images/search.svg'
const SearchBar = () => {
    return (
        <div className={'search-bar'}>
            <h3>Знайти те, що тобі потрібно</h3>
            <div>
                <input type='text' placeholder={'Text'}/>
                <div>
                    <img src={search} alt={"search"}/>
                </div>
            </div>
            <h5>Не знаєш, з чого почати?</h5>
        </div>

    );
};

export default SearchBar;