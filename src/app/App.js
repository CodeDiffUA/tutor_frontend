import './App.css';
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";
import HeaderNav from "../features/HeaderNav/HeaderNav";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ScrollSubjectsBar from "../features/ScrollSubjectsBar/ScrollSubjectsBar";
import HomePage from "../pages/HomePage/HomePage";
import {Form, Route, Routes} from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import LecturePage from "../pages/LectionPage/LecturePage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import RecoverPasswordPage from "../pages/RecoverPasswordPage/RecoverPasswordPage";
function App() {
    return (
        <div className="App">
            {/*<HeaderNav />*/}
            {/*<ScrollSubjectsBar />*/}
            {/*<HomePage />*/}
            {/*<LoginRegisterPage />*/}
            {/*<ProfilePage />*/}
            <RecoverPasswordPage />




            {/*<Routes>*/}
            {/*    <Route path={'/'} element={<Layout />}>*/}
            {/*        <Route index element={<HomePage />}/>*/}
            {/*        <Route path={'subjects/:id'} element={<LecturePage />}/>*/}

            {/*    </Route>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default App;