import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index';
import Login from './Pages/Login/index';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/Home" exact element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;