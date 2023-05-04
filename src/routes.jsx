import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

export default function AppRoutes(){
  return(
    <BrowserRouter>
       <Routes>
         <Route element={<Home/>} path="/" exact/>
       </Routes>
    </BrowserRouter>
  )
}