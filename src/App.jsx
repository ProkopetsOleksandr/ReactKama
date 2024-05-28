import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Messages from "./components/Messages/Messages.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";

export default function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className='app-header'>
                    <Header />
                </div>
                <div className='app-nav'>
                    <Navbar />
                </div>
                <div className='app-content'>
                    <Routes>
                        <Route element={<Profile />} path='/profile' />
                        <Route element={<Messages />} path='/messages/*' />
                        <Route element={<UsersContainer />} path='/users/*' />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
