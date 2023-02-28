import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../Home";
import Servico from "../Servico";


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="servicos" element={<Servico />}></Route>
            </Routes>
        </BrowserRouter>

    )
}