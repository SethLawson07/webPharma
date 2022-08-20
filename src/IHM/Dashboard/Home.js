import React,{useState,useEffect} from "react";
import { Button,Modal,Form,Container, Table,InputGroup,FormControl ,Row,Col } from "react-bootstrap";
import NavDash from "./components/Navbar";
import * as Icon from 'react-bootstrap-icons'
import { Link,useNavigate } from "react-router-dom";
import  {db} from './firebase'
import {collection, query, orderBy, onSnapshot,doc,snapshot,where} from "firebase/firestore"


export default function Home () {

 
  let [nbAssurance, setnbAssurance] = useState(0);
  let [nbAdmin, setnbAdmin] = useState(0);
  let [nbPharmacie, setnbPharmacie] = useState(0);
  let [nbCommon, setnbCommon] = useState(0);
  const [assurance, setAssurance] = useState();
  let navigate = useNavigate();


  const getInsurance = () => {
    
    const q = query(collection(db, 'Assurance')
    )
    onSnapshot(q, (querySnapshot) => {
          setnbAssurance(querySnapshot.size)
    })
};

const getPharmacy = () => {
    
  const q = query(collection(db, 'Pharmacie')
  )
  onSnapshot(q, (querySnapshot) => {
        setnbPharmacie(querySnapshot.size)
  })
};

const getCommon = () => {
    
  const q = query(collection(db, 'Commune')
  )
  onSnapshot(q, (querySnapshot) => {
        setnbCommon(querySnapshot.size)
  })
};



const getAdmin = () => {
    
  const q = query(collection(db, 'Administrateur')
  )
  onSnapshot(q, (querySnapshot) => {
        setnbAdmin(querySnapshot.size)
  })
};

  

useEffect(() => {
  getInsurance();
  getPharmacy();
  getAdmin();
  getCommon();
}, []);


 

    return <>
   
    <br/>
   

    <Row>
    <Col xs={6} md={4}>
   
    </Col>
    <Col xs={6} md={4}>
    <p className="text-center">Statistiques  &nbsp;
     
  
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
      <th>Nombre d'assurances</th>
      <th>Nombre de communes</th>
      <th>Nombre d'administrateurs</th>
      
     
      
    </tr>
  </thead>
  <tbody>

    <tr>
      
   
      <td>{nbPharmacie} </td>
      <td>{nbAssurance} </td>
      <td>{nbCommon}</td>
      <td>{nbAdmin} </td>
      
      
      
      
      
    </tr>
    
   
    
  </tbody>
</Table>

</Container>
    </>
}