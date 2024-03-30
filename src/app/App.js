import './App.css';
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";
import HeaderNav from "../features/HeaderNav/HeaderNav";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

function App() {
    return (
        <div className="App">
            <HeaderNav />
            {/*<LoginRegisterPage />*/}
            <ProfilePage />

        </div>
    );
}

export default App;
