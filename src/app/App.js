import './App.css';
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";
import HeaderNav from "../features/HeaderNav/HeaderNav";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ScrollSubjectsBar from "../features/ScrollSubjectsBar/ScrollSubjectsBar";
import HomePage from "../pages/HomePage/HomePage";

function App() {
    return (
        <div className="App">
            <HeaderNav />
            <ScrollSubjectsBar />
            <HomePage />
            {/*<LoginRegisterPage />*/}
            {/*<ProfilePage />*/}

        </div>
    );
}

export default App;
