import React,{useState,useEffect} from "react";
import { Button,Modal,Form,Container, Table,InputGroup,FormControl ,Row,Col } from "react-bootstrap";
import NavDash from "./components/Navbar";
import * as Icon from 'react-bootstrap-icons'
import { Link,useParams  } from "react-router-dom";
import  {db} from '../../config/firebase'
import {collection, query, orderBy, onSnapshot,addDoc,deleteDoc,updateDoc,doc, Timestamp} from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function ListCompte () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [numeroTel, setNumeroTel] = useState()
  const [admin, setAdmin] = useState()
  const { id } = useParams()
  



  useEffect(() => {
    const q = query(collection(db, 'Administrateur')//, orderBy('created', 'desc')
    )
    onSnapshot(q, (querySnapshot) => {
      setAdmin(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
   
  }, [admin]);

  

    return <>
   
    <br/>
   

    <Row>
    <Col xs={6} md={4}>
   
    </Col>
    <Col xs={6} md={4}>
    <p className="text-center">Mes Informations {id} &nbsp;
     <Button variant="success"  className='text-right' >  <Icon.FileEarmarkPerson  color="white" size={25}/></Button>{' '}
  
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
      
      <th>Nom</th>
      <th>prenom</th>
      <th>Tél {email}</th>
 
      
      
    </tr>
  </thead>
  <tbody>
  {admin?.map(({ id, data }) => (  
    <tr>
      
      <td>{data.Nom}</td>
      <td>{data.Prenom} </td>
      <td>{data.NumeroTel} </td>
      
      
    </tr>
     ))}
    
  </tbody>
</Table>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier mes Informations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={{}}>
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
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>
</Container>
    </>
}