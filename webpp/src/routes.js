import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NewEvent from './Pages/NewEvent';
import UpdateEvent from './Pages/UpdateEvent';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/Home" exact element={<Home />} />
                <Route path="/NewEvent" exact element={<NewEvent />} />
                <Route path="/UpdateEvent" exact element={<UpdateEvent />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;