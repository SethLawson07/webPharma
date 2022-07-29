import React,{useState} from "react";
import { Button,Modal,Form,Container, Table,InputGroup,FormControl ,Row,Col,Stack } from "react-bootstrap";
import NavDash from "./components/Navbar";
import * as Icon from 'react-bootstrap-icons'
import { Link } from "react-router-dom";
import  {db} from './firebase'
import {collection, query, orderBy, onSnapshot,addDoc,deleteDoc,updateDoc,doc, Timestamp} from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function ListAdmin () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [nom, setNom] = useState(null);
  const [prenom, setPrenom] = useState(null);
  const [numeroTel, setNumeroTel] = useState('+228')


  const validateFormAdd = (e) => {
    //Variable Regex pour valider les champs   
    const num = /^\+228\d{8}$/
    const re1 =/[^A-zÀ-ú 0-9\-(.,;:)]/g  

  
    if(!nom  || re1.test(nom)) alert("Le nom n'est pas valide.🙂")
    else if (!prenom  || re1.test(prenom)) alert("Le prenom n'est pas valide.🙂")
    else if(!numeroTel || numeroTel.length !=12  ) alert("Le numéro de téléphone n'est pas valide.🙂")
    else if(!numeroTel.test(numeroTel)  ) alert("Le numéro de téléphone est incorrect : Ex : +22897997966")
    else {handleSignUp(e)}
  
    
  }


   /* function to add new iadmin to firestore */
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await addDoc(collection(db, 'Administrateur'), {
      Nom: nom,
      Prenom : prenom,
      NumeroTel : numeroTel,
      Niveau : false,
      created: Timestamp.now()
    });
  alert(" succès! ✅")
  handleClose()
  
  setNom('')
  } catch (err) {
    alert(" Echec! ❌ Veuillez réessayer")
  }
}


         //Fonction pour créer un admin
    const handleSignUp = () => {
    const auth=getAuth();
  createUserWithEmailAndPassword(auth,email, password)
    .then((userCredential) => {
         // Signed in 
      const user = userCredential.user;
         // console.log('Registered with:', user.email);
         //console.log('Registered with oklm:', user.uid);      
      handleSubmit()           
     })
    .catch((error) => {             
    });}

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
      <th>prenom</th>
      <th>Niveau</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>1</td>
      <td>
        <Icon.Trash3 color="red" size="25"/>
      </td>
      <td>
      <Icon.PencilSquare color="blue" size="25"/>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>0</td>
      <td>
        
        <Icon.Trash3 color="red" size="25"/>
      </td>
      <td>
      <Icon.PencilSquare color="blue" size="25"/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>0</td>
      <td>
        <Icon.Trash3 color="red" size="25"/>
      </td>
      <td>
      <Icon.PencilSquare color="blue" size="25"/>
      </td>
    </tr>
  </tbody>
</Table>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Administrateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={validateFormAdd}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <InputGroup className="mb-4">
      <InputGroup.Text id="btnGroupAddon">
        <Icon.PencilSquare />
      </InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Nom"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
        onChange={(e) => setNom(e.target.value)} 
        value={nom}
      />
    </InputGroup>

    <InputGroup className="mb-4">
      <InputGroup.Text id="btnGroupAddon">
        <Icon.PencilSquare />
      </InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Prenom"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
        onChange={(e) => setPrenom(e.target.value)} 
        value={prenom}
      />
    </InputGroup>    

    <InputGroup className="mb-4">
      <InputGroup.Text id="btnGroupAddon">
        <Icon.PencilSquare />
      </InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Numéro de téléphone"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
        onChange={(e) => setNumeroTel(e.target.value)} 
        value={numeroTel}
      />
    </InputGroup>  

            <InputGroup className="mb-4">
      <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Email"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
      />
    </InputGroup>

    <InputGroup className="mb-4">
      <InputGroup.Text id="btnGroupAddon">
        <Icon.FileEarmarkLockFill />
      </InputGroup.Text>
      <FormControl
        type="password"
        placeholder="Mot de passe"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
      />
    </InputGroup>

    
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
</Container>
    </>
}