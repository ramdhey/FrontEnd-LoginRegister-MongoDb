import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Beranda } from '../Screen/Beranda';


const PrivateRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/beranda' element={<Beranda/>}/>
            </Routes>
        </Router>
    );
};

export default PrivateRoutes;