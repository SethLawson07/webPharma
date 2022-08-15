import React, { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link ,Redirect} from "react-router-dom";
import logo from './logo.svg';
import { useHistory } from "react-router-dom"
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CCarousel from './components/carousel';
import Home from './components/home';
import Login from "./IHM/Login";
import Dashboard from "./IHM/Dashboard";
import ListAdmin from "./IHM/Dashboard/ListeAdmin";
import CreateAdmin from "./IHM/Dashboard/createAdmin";


function App() {
  return (
 
    <Routes>
      
        <Route path="/" element={ <Login/> } />
        <Route path="Dashboard/:id" element={<Dashboard/>}/>
        <Route path="Admin" element={<ListAdmin/>}/>
        <Route path="Create" element={<CreateAdmin/>}/>
        <Route path="*" element={<Login/>}/>


        
      </Routes>
      
  );
}


export default App;
