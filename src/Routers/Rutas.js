import { Routes, Route } from "react-router-dom";

import { Home } from "../Home/Home.js"

import { Menu } from "../Menu/Menu.js";

import { Habitaciones} from "../Habitaciones/Habitaciones.js"

export function Rutas(){

    return (
        <div className="App">
         
            <Menu />

            <Routes>

            <Route path="/" element={<Home />} />
            <Route path="habitaciones" element={<Habitaciones />} />
            
            
            </Routes>
        </div>
      );

}