import React,{useState,useEffect} from "react";
import { Button,Modal,Form,Container, Table,InputGroup,FormControl ,Row,Col } from "react-bootstrap";
import NavDash from "./components/Navbar";
import * as Icon from 'react-bootstrap-icons'
import { Link } from "react-router-dom";
import  {db} from './firebase'
import {collection, query, orderBy, onSnapshot,doc} from "firebase/firestore"


export default function Home () {

  const [assurance, setAssurance] = useState();
  let [counter, setCounter] = useState(1);

 

    return <>
   
    <br/>
   

    <Row>
    <Col xs={6} md={4}>
   
    </Col>
    <Col xs={6} md={4}>
    <p className="text-center">Statistiques &nbsp;
     
  
    </p>
    </Col>
    <Col xs={6} md={3}>
    

    </Col>
    <Col xs={6} md={1}></Col>
  </Row>
    
    <Container>
   
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Nombre de pharmacies</th>
      <th>Nombre de pharmacies</th>
      <th>Nombre d'admins</th>
      <th>Nombre d'assurances</th>
     
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
   
<td>4</td>
      <td>3</td>
      <td>5</td>
      <td>5</td>
      
      
      
    </tr>
   
    
  </tbody>
</Table>

</Container>
    </>
}