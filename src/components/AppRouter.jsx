import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buscar from "./Buscar";
import Listar from "./Listar";
import Navbar from "./Navbar";

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Listar />} />
            <Route path="/buscar" element={<Buscar />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouter;
