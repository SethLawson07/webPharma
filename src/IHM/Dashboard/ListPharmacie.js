import React,{useState,useEffect} from "react";
import {Button,Alert,Navbar,Nav,NavDropdown,Container,Table,Row,Col,Stack,Form} from  'react-bootstrap';
import { Link } from 'react-router-dom';
import  *  as Icon from "react-bootstrap-icons";
import  {db} from '../../config/firebase'
import {collection, query, orderBy, onSnapshot,doc,updateDoc,where} from "firebase/firestore"


export default function ListPharmacie () {

  const [pharmacie, setPharmacie] = useState();
  const [pharmacieSearch, setPharmaciesearch] = useState();
  let [counter, setcounter] = useState(1);
  const [search, setSearch] = useState('');


 
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

  const getPharmacySearch = () => {
    const q = query(collection(db, 'Pharmacie'),where('Nom','==',search)//, orderBy('created', 'desc')
    )
    onSnapshot(q, (querySnapshot) => {
      setPharmaciesearch(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }

  const test = () => {
    console.log('oklm');
  }

  const updateTrue = async (id) => {
    try {

    const updateRef = doc(db, "Pharmacie",id);

    // Set the "Etat" field of the pharmacy
    await updateDoc(updateRef, {
      Certificate: true
     
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
        Certificate: false
       
    });
        alert(" succès! ✅")
        
      } catch (error) {
      //  console.log(error);
        alert(" Echec! ❌ Veuillez réessayer")
       
      }
      
  
      }

     

  

    useEffect(() => {
      getPharmacy();
  getPharmacySearch();
      
     
    }, )
    

    return <>
    <br/>
      <Row>
    <Col xs={6} md={4}>
   
    </Col>
    <Col xs={6} md={4}>
    <p className="text-center"> Listes des Pharmacies &nbsp;
    
  
    </p>
    </Col>
    <Col xs={6} md={3}>
    <Stack direction="horizontal" gap={1}>
  <Form.Control className="me-auto" placeholder="Search..."
    onChange={(e) => setSearch(e.target.value)} 
    value={search}
  />
 
  
  
</Stack>

    </Col>
    <Col xs={6} md={1}></Col>
  </Row>
  <br/>
    <Container>
   {search ==''  ?
    <Table striped bordered hover variant="dark">

  <thead>
    <tr>
      <th>#</th>
      <th>Nom</th>
      <th>Tél</th>
      <th>Assurances</th>
      <th>Commune</th>
      <th>Localite</th>
    
      <th>Certification</th>
      
    </tr>
  </thead>
  <tbody>
  {pharmacie?.map(({ id, data }) => (
            <tr >
              <td>{counter++}</td>
              <td>{data.Nom}</td>
              <td>{data.NumeroTel}</td>
              <td>{data.Assurance}</td>
              <td>{data.Commune} </td>
              <td>{data.Localite} </td>
              <td>{data.Certificate ? 
               <Button variant="success"  className='text-right' onClick={() => updateFalse(id)}><Icon.CheckSquareFill color="white" size="25"/></Button>
              :              
              <Button variant="danger"  className='text-right'   onClick={() => {
                updateTrue(id);
              }}
               ><Icon.XSquareFill color="white" size="25"/></Button>
            
          
              }</td>
              
              
            </tr>
          ))}
   
  </tbody>
</Table> :
<Table striped bordered hover variant="dark">
      
  <thead>
    <tr>
      <th>#</th>
      <th>Nom</th>
      <th>Tél</th>
      <th>Assurances</th>
      <th>Commune</th>
      <th>Localite</th>
    
      <th>Certification</th>
      
    </tr>
  </thead>
  <tbody>
  {pharmacieSearch?.map(({ id, data }) => (
            <tr >
              <td>{counter++}</td>
              <td>{data.Nom}</td>
              <td>{data.NumeroTel}</td>
              <td>{data.Assurance}</td>
              <td>{data.Commune} </td>
              <td>{data.Localite} </td>
              <td>{data.Certificate ? 
               <Button variant="success"  className='text-right' onClick={() => updateFalse(id)}><Icon.CheckSquareFill color="white" size="25"/></Button>
              :              
              <Button variant="danger"  className='text-right'   onClick={() => {
                updateTrue(id);
              }}
               ><Icon.XSquareFill color="white" size="25"/></Button>
            
          
              }</td>
              
              
            </tr>
          ))}
   
  </tbody>
  </Table>
}
</Container>


    </>
}