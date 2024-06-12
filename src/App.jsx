import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Messages from "./components/Messages/Messages.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Login from "./components/Login/Login.jsx";
import { RequireAuth } from "./hoc/RequireAuth.jsx";

export default function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className='app-header'>
                    <HeaderContainer />
                </div>
                <div className='app-nav'>
                    <Navbar />
                </div>
                <div className='app-content'>
                    <Routes>
                        <Route element={<RequireAuth><ProfileContainer /></RequireAuth>} path='/profile/:userId?' />
                        <Route element={<RequireAuth><Messages /></RequireAuth>} path='/messages/*' />
                        <Route element={<RequireAuth><UsersContainer /></RequireAuth>} path='/users/*' />
                        <Route element={<Login />} path='/login' />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
