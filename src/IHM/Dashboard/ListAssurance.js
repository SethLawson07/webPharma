import React,{useState,useEffect} from "react";
import { Button,Modal,Form,Container, Table,InputGroup,FormControl ,Row,Col ,Stack} from "react-bootstrap";
import NavDash from "./components/Navbar";
import * as Icon from 'react-bootstrap-icons'
import { Link } from "react-router-dom";
import  {db} from './firebase'
import {collection, query, orderBy, onSnapshot,addDoc,deleteDoc,updateDoc,doc, Timestamp} from "firebase/firestore"

export default function ListAssurance () {
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nom, setNom] = useState('');
  const [nomUpdate, setNomUpdate] = useState();
  const [idUpdate, setIdUpdate] = useState();
  const [showUpdate, setShowUpdate] = useState(false);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (id,nom) => {
    setShowUpdate(true);
    setNomUpdate(nom)
    setIdUpdate(id)
  }
  const [assurance, setAssurance] = useState();
  let [counter, setCounter] = useState(1);
  
  const validateFormAdd = (e) => {
    //Variable Regex pour valider le champs nom de l'assurance   
    const re1 =/[^A-zÀ-ú 0-9\-(.,;:)]/g  

  
    if(!nom  || re1.test(nom)) alert("L' assurance n'est pas valide.🙂")
    else {handleSubmit(e)}
  
    
  }

  const validateFormUpdate = (e) => {
    //Variable Regex pour valider le champs nom de l'assurance   
    const re1 =/[^A-zÀ-ú 0-9\-(.,;:)]/g  

  
    if(!nomUpdate  || re1.test(nomUpdate)) alert("L' assurance n'est pas valide.🙂")
    else {handleUpdate(e)}
  
    
  }

  /* function to add new insurance to firestore */
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await addDoc(collection(db, 'Assurance'), {
      Nom: nom,
      created: Timestamp.now()
    });
  alert(" succès! ✅")
  handleClose()
  
  setNom('')
  } catch (err) {
    alert(" Echec! ❌ Veuillez réessayer")
  }
}

// function to update insurance in firestore 
const handleUpdate = async (e) => {
  e.preventDefault()
  const AssuranceDocRef = doc(db, 'Assurance', idUpdate)
  try{
    await updateDoc(AssuranceDocRef, {
      Nom: nomUpdate,
      
    })
    alert(" succès! ✅")
   handleCloseUpdate()
    

  } catch (err) {
    alert(" Echec! ❌ Veuillez réessayer")
  }
  
}
    

    
    //function to update insurance from firstore 
    const updateInsurance = async (id) => {
     // e.preventDefault()
        try {
    
        const updateRef = doc(db, "Assurance",id);
    
        // Set the "Etat" field of the pharmacy
        await updateDoc(updateRef, {
          Nom: nomUpdate
         
      });
          alert(" succès! ✅")
          
        } catch (error) {
        //  console.log(error);
          alert(" Echec! ❌ Veuillez réessayer")
         
        }
        
    
        }
 //function to delete insurance from firstore 
const handleDelete = async (id) => {
  const InsuranceDocRef = doc(db, 'Assurance', id)
  try{
    await deleteDoc(InsuranceDocRef)
    alert(" succès! ✅")
  } catch (err) {
    alert(" Echec! ❌ Veuillez réessayer")
  }
}


  useEffect(() => {
    const q = query(collection(db, 'Assurance')//, orderBy('created', 'desc')
    )
    onSnapshot(q, (querySnapshot) => {
      setAssurance(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    console.log({ assurance });
  }, [assurance]);
  
  

    return <>
   
    <br/>
   

    <Row>
    <Col xs={6} md={4}>
   
    </Col>
    <Col xs={6} md={3}>
    
    <Stack direction="horizontal" gap={1}>
  <Form.Control className="me-auto" placeholder="Search" />
  <Button variant="success">
  <Icon.Search color="white" size={20}/>
  </Button>
  
  
</Stack>
   
    </Col>
    <Col xs={6} md={3}></Col>
    <Col xs={6} md={1}>
   
<Button variant="success"  className='text-right' onClick={handleShow}>  <Icon.PlusSquareFill  color="white" size={25}/></Button>{' '}
  
    </Col>
    
  </Row>
    <br/>
    <Container>
   
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Nom</th>
      
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {assurance?.map(({ id, data }) => (
            <tr >
              <td>{counter++}</td>
              <td>{data.Nom}  </td>
              
              
             
            <td>
              
            <Icon.PencilSquare color="white" onClick={() => handleShowUpdate(id,data.Nom)}  size="25"/>
            </td>
            <td>
              <Button variant="Light" onClick={() => {handleDelete(id)}}>
              <Icon.Trash3 color="white" size="25"/>
              </Button>
             
            </td>
              
            </tr>
          ))}
    
        
       
  </tbody>
</Table>


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une assurance</Modal.Title>
        </Modal.Header>
        <Form onSubmit={validateFormAdd}>
        <Modal.Body>
         
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <InputGroup className="mb-4">
      <InputGroup.Text id="btnGroupAddon">
        <Icon.PencilSquare />
      </InputGroup.Text>
      <FormControl
        type="text"
        name="nom"
        placeholder="Nom"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
        onChange={(e) => setNom(e.target.value)} 
        value={nom}
      />
    </InputGroup> 
            </Form.Group>
           
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            
            Close
          </Button>
          <Button variant="success" type='submit' >
            Ajouter
          </Button>
        
        </Modal.Footer>
        </Form>
      </Modal>


      
<Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une assurance</Modal.Title>
        </Modal.Header>
        <Form onSubmit={validateFormUpdate}>
        <Modal.Body>
         
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <InputGroup className="mb-4">
      <InputGroup.Text id="btnGroupAddon">
        <Icon.PencilSquare />
      </InputGroup.Text>
      <FormControl
        type="text"
        name="nom"
        placeholder="Nom"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
        onChange={(e) => setNomUpdate(e.target.value)} 
        value={nomUpdate}
      />
    </InputGroup> 
            </Form.Group>
           
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            
            Close
          </Button>
          <Button variant="success" type='submit' >
            Modifier
          </Button>
        
        </Modal.Footer>
        </Form>
      </Modal>
      

</Container>
    </>
}