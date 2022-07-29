import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import logo from './logo.svg';
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
        <Route path="/" element={ <Home/> } />
        <Route path="Login" element={ <Login/> } />
        <Route path="Dashboard" element={<Dashboard/>}/>
        <Route path="Admin" element={<ListAdmin/>}/>
        <Route path="Create" element={<CreateAdmin/>}/>
        <Route path="*" element={<Home/>}/>
        
      </Routes>
  );
}

export default App;
