import React from 'react';
import './home_page.scss'
import SubjectsItemOverview from "../../features/SubjectsItemOverview/SubjectsItemOverview";
import SearchBar from "../../features/SearchBar/SearchBar";
import WaveItem from "../../features/WaveItem/WaveItem";

const HomePage = () => {
    return (
        <div className={'home-page'}>
            <SearchBar />
            <WaveItem />
            <SubjectsItemOverview text={"Українська мова"} bg_color={'rgb(105, 107, 135)'}/>
            <SubjectsItemOverview text={"Математика"} bg_color={'rgb(255, 235, 126)'}/>
            <SubjectsItemOverview text={"Історія України"} bg_color={'rgb(148, 223, 102)'}/>
        </div>
    );
}

export default HomePage;