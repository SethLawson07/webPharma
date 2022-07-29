import React, { Component } from 'react';
import ToastExemple from './Toast'
import Rejoindre from './rejoindre';
import Acordion from './Accordion';
import Navbar1 from './Navbar';
import Header from './header';
import Presentation from './presentation';
import * as Icon from 'react-bootstrap-icons';
import NavbarEnd from './navbarEnd';

export default function Home() {

    return (
    <>
    <div className="container1">
      <Navbar1/>
      <Header/>
      



  </div><br></br>
  <Presentation/><br></br>

  


  <Acordion/>
  <div>
 
  </div>

  <br></br><br></br>

  <div>
  <NavbarEnd/>
  </div>
  
  
</>
    )
}