import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from '../pages/Home';
import Summoner from '../pages/Summoner';

export default function Paths() {
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" exact element={<Home />}/>
                <Route  path="/summoner/:id" element={<Summoner />}/>
            </Routes>
        </BrowserRouter>
    );
}