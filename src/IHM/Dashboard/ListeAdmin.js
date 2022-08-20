import React,{useState,useEffect} from "react";
import { Button,Modal,Form,Container, Table,InputGroup,FormControl ,Row,Col,Stack } from "react-bootstrap";
import NavDash from "./components/Navbar";
import * as Icon from 'react-bootstrap-icons'
import { Link } from "react-router-dom";
import  {db} from '../../config/firebase'
import {collection, query, orderBy, onSnapshot,addDoc,deleteDoc,updateDoc,doc,setDoc,where, Timestamp} from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function ListAdmin () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numeroTel, setNumeroTel] = useState('')
  const [admin, setAdmin] = useState()
  let [counter, setCounter] = useState(1);


  const validateFormAdd = (e) => {
    //Variable Regex pour valider les champs   
   // const num = /^\+228\d{8}$/
    const re1 =/[^A-zÀ-ú 0-9\-(.,;:)]/g  
    const re = /\S+@\S+\.\S+/
    var num = /^\d+$/;

  
    if(!nom  || re1.test(nom)) alert("Le nom n'est pas valide.🙂")
   else if (!prenom  || re1.test(prenom)) alert("Le prenom n'est pas valide.🙂")
    else if(!numeroTel || numeroTel.length !=8  ) alert("Le numéro de téléphone n'est pas valide.🙂")
    else if(!num.test(numeroTel)   ) alert("Le numéro de téléphone est incorrect : Ex : +22897997966")
    else if (!email || !re.test(email) ) alert('Oups ! Nous avons besoin d\'une adresse e-mail valide.🙂')
    else if (!password || password.length < 6) alert("Le mot de passe doit comporter au moins 6 caractères et au maximum 12 🧐."); 
    else {handleSubmit(e)}
  
    
  }


   /* function to add new admin to firestore */

  /* function to add new insurance to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
  
    //Création d'un nouveau document dans Firebase
    const myDoc = doc(db, "Administrateur",email)
  
    const docData = {
      "Nom": nom,
        "Prenom" : prenom,
        "NumeroTel" : numeroTel,
        "Niveau" : false,
        "Etat" : true,          
        "created": Timestamp.now()
        
       
    }

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        //Message Succès
        handleSignUp()
        alert("Compte créé avec succès! ✅")
        handleClose();
        setNom('');setPrenom('');setNumeroTel('');setEmail('');
      })
      .catch((error) => {
        // Message Echec
        alert(" Echec! ❌ Veuillez réessayer")
      })
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
     // handleSubmit()           
     })
    .catch((error) => {             
    });}

    const updateTrue = async (id) => {
      try {
  
      const updateRef = doc(db, "Administrateur",id);
  
      // Set the "Etat" field of the pharmacy
      await updateDoc(updateRef, {
        Etat: true
       
    });
        alert(" succès! ✅")
        
      } catch (error) {
      //  console.log(error);
        alert(" Echec! ❌ Veuillez réessayer")
       
      }
      
  
      }
  
      const updateFalse = async (id) => {
        try {
    
        const updateRef = doc(db, "Administrateur",id);
    
        // Set the "Etat" field of the pharmacy
        await updateDoc(updateRef, {
          Etat: false
         
      });
          alert(" succès! ✅")
          
        } catch (error) {
        //  console.log(error);
          alert(" Echec! ❌ Veuillez réessayer")
         
        }
        
    
        }

    useEffect(() => {
      const q = query(collection(db, 'Administrateur'),where('Prenom','!=','seth')//, orderBy('created', 'desc')
     //("latesethlawsonhetchely@gmail.com")
      )
      onSnapshot(q, (querySnapshot) => {
        setAdmin(querySnapshot.docs.map(doc => ({
         id: doc.id,
          data: doc.data()
        })))
      })
     
    }, [admin]);
    
    /*const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
      console.log("Current data: ", doc.data());*/
  

    return <>
   
    <br/>
   

    <Row>
    <Col xs={6} md={4}>
   
    </Col>
   
    <Col xs={6} md={3}>
    

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
      <th>prenom </th>
      <th>Tél</th>
      <th>Email</th>
      <th></th>
    
    
    </tr>
  </thead>
  <tbody>
  {admin?.map(({ id, data }) => (  
    <tr>
      <td>{counter++}</td>
      <td>{data.Nom}</td>
      <td>{data.Prenom} </td>
      <td>{data.NumeroTel} </td>
      <td>{id}</td>
      <td>
        {data.Etat? <Button variant="outline-success" onClick={() => updateFalse(id)}><Icon.CheckSquareFill color="white" size="25"/></Button>  
        :
        <Button variant="outline-danger" onClick={() => updateTrue(id)}><Icon.XSquareFill color="white" size="25"/></Button>
  }
      </td>
      
    </tr>
   
   ))}
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
        maxLength="8"
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
        maxLength="12"
      />
    </InputGroup>

    
            </Form.Group>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" type='submit'>
            Ajouter
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
       
      </Modal>
</Container>
    </>
}