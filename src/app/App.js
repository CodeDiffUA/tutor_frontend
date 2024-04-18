import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";
import Layout from "../pages/Layout/Layout";
import './App.css';
import LectureLayout from "../pages/LectureLayout/LectureLayout";
import LectureItemContent from "../features/LectureItemContent/LectureItemContent";
import LectureContentPage from "../pages/LectureContentPage/LectureContentPage";

function App() {

    const {isAuth} = useSelector(( state => state.authReducer))

    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(isAuth)
    //
    //     if (localStorage.getItem('token')) {
    //         console.log('homepage')
    //         console.log(localStorage.getItem('token'));
    //         dispatch(checkAuth())
    //     }
    //     console.log(isAuth)
    // }, [])


    // if (!isAuth) {
    //     return (
    //         <div className="App">
    //             <LoginRegisterPage />
    //         </div>
    //     );
    // }

    return (
        <div className="App">
            {/*{!isAuth&&<LoginRegisterPage />}*/}
            {!isAuth&&<Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>} />
                    <Route path={'subjects/:id'} element={<LectureLayout/>}>
                        <Route index element={<LectureItemContent/>} />
                        <Route path={':lecture_name'} element={<LectureContentPage />}/>
                    </Route>
                </Route>
            </Routes>}
        </div>
    );
}

export default App;