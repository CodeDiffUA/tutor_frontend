import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom"
import {checkAuth} from "../store";

import HomePage from "../pages/HomePage/HomePage";
import Layout from "../pages/Layout/Layout";
import LectureLayout from "../pages/LectureLayout/LectureLayout";
import LectureItemContent from "../features/LectureItemContent/LectureItemContent";
import LectureContentPage from "../pages/LectureContentPage/LectureContentPage";
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";
import './App.css';
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PracticePage from "../pages/PracticePage/PracticePage";

function App() {

    const {isAuth} = useSelector(( state => state.authReducer))

    const dispatch = useDispatch();

    useEffect(() => {

        if (localStorage.getItem('token')) {
            dispatch(checkAuth())
        }
    }, [dispatch, isAuth])


    if (!isAuth) {
        return (
            <div className="App">
                <LoginRegisterPage />
            </div>
        );
    }

    return (
        <div className="App">
            {isAuth&&<Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>} />
                    <Route path={'subjects/:subject'} element={<LectureLayout/>}>
                        <Route index element={<LectureItemContent/>} />
                        <Route path={':lecture_name'} element={<LectureContentPage />}/>
                        <Route path={'practices/:practice_name'} element={<PracticePage/>}/>
                    </Route>
                        <Route path={'profile'} element={<ProfilePage/>}>
                    </Route>

                </Route>
            </Routes>}
        </div>
    );
}

export default App;