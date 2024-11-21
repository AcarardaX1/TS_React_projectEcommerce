import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "../pages/LoginPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";
import HomePage from "../pages/HomePage.tsx";

function RouterConfig(props) {
    return (

            <Routes>
                <Route path= '/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />

            </Routes>

    );
}

export default RouterConfig;