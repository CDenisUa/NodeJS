import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <App /> } />
            <Route path="login" element={ <Login /> }/>
            <Route path="register" element={ <Register /> } />
            <Route path="profile/:username" element={ <Profile /> } />
        </Routes>
    </BrowserRouter>,
document.getElementById('root')
);
