import Home from "./pages/home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import React, {useContext} from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
    const { user } = useContext(AuthContext);
    return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ user ? <Home/> : <Login /> } />
                    <Route path="login" element={ user ? <Navigate to="/" /> : <Login /> }/>
                    <Route path="register" element={ user ? <Navigate to="/" /> : <Register /> } />
                    <Route path="profile/:username" element={ <Profile /> } />
                </Routes>
            </BrowserRouter>
        )
};

export default App;
