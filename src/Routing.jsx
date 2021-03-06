import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';

const Routing = () =>{
    return(
        <BrowserRouter basename='/'>
            <Routes>
                <Route path="/" element={<Home />}/>   
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;