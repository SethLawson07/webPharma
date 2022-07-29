import React,{useState,useEffect} from "react";
import {Button,Alert,Container,Table,Row,Col,Stack,Form} from  'react-bootstrap';
import { Link } from 'react-router-dom';
import  *  as Icon from "react-bootstrap-icons";
import  {db} from './firebase'
import {collection, query, orderBy, onSnapshot,doc,updateDoc} from "firebase/firestore"


export default function ListPharmacieGarde () {

  const [pharmacie, setPharmacie] = useState();
  let [counter, setcounter] = useState(1);

 
  const getPharmacy = () => {
    const q = query(collection(db, 'Pharmacie')//, orderBy('created', 'desc')
    )
    onSnapshot(q, (querySnapshot) => {
      setPharmacie(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }


  const updateTrue = async (id) => {
    try {

    const updateRef = doc(db, "Pharmacie",id);

    // Set the "Etat" field of the pharmacy
    await updateDoc(updateRef, {
      Degarde: true
     
  });
      alert(" succès! ✅")
      
    } catch (error) {
    //  console.log(error);
      alert(" Echec! ❌ Veuillez réessayer")
     
    }
    

    }

    const updateFalse = async (id) => {
      try {
  
      const updateRef = doc(db, "Pharmacie",id);
  
      // Set the "Etat" field of the pharmacy
      await updateDoc(updateRef, {
        Degarde: false
       
    });
        alert(" succès! ✅")
        
      } catch (error) {
      //  console.log(error);
        alert(" Echec! ❌ Veuillez réessayer")
       
      }
      
  
      }

    useEffect(() => {
      (getPharmacy)()
     // (UpdateTrue)()
    }, )
    

    return <>
    <br/>
      <Row>
    <Col xs={6} md={4}>
   
    </Col>
    <Col xs={6} md={4}>
    <p className="text-center"> Listes des Pharmacies de garde &nbsp;
    
  
    </p>
    </Col>
    <Col xs={6} md={3}>
    <Stack direction="horizontal" gap={1}>
  <Form.Control className="me-auto" placeholder="Search" />
  <Button variant="success">
  <Icon.Search color="white" size={20}/>
  </Button>
  
  
</Stack>

    </Col>
    <Col xs={6} md={1}></Col>
  </Row>
  <br/>
    <Container>
   
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Nom</th>
      <th>Tél</th>
     
    
      <th>Activer la garde</th>
      
    </tr>
  </thead>
  <tbody>
  {pharmacie?.map(({ id, data }) => (
            <tr >
              <td>{counter++}</td>
              <td>{data.Nom}</td>
              <td>{data.NumeroTel}</td>
              
              <td>{data.Degarde ? 
             <Button variant="danger"  className='text-right' onClick={() => updateFalse(id)}><Icon.HandThumbsDown color="white" size="25"/></Button>
              :              
              
              <Button variant="success"  className='text-right' onClick={() => updateTrue(id)} ><Icon.HandThumbsUp color="white" size="25"/></Button>
              }</td>
              
              
            </tr>
          ))}
   
  </tbody>
</Table>

</Container>


    </>
}