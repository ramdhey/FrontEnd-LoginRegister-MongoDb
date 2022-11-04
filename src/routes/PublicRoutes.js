import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Login } from '../Screen/Login';
import Register from './../Screen/Register';


const PublicRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route path='/' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </Router>
    );
};

export default PublicRoutes;