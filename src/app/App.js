import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";
import HeaderNav from "../features/HeaderNav/HeaderNav";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import './App.css';
import LecturePage from "../pages/LectionPage/LecturePage";

function App() {
    return (
        <div className="App">
            <HeaderNav />
            {/*<LoginRegisterPage />*/}
            {/*<ProfilePage />*/}
            <LecturePage />

        </div>
    );
}

export default App;
