import React,{useState,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom'
import {Button,Alert,Navbar,Form,Nav,NavDropdown,Container,InputGroup,FormControl ,Modal} from  'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'
import  {db} from '../config/firebase'
import {collection, query, orderBy, onSnapshot,addDoc,deleteDoc,updateDoc,doc,setDoc,getDoc, Timestamp} from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Navbar1() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  let navigate = useNavigate();
  const [admin,setAdmin] = useState([]);
  const [verify, setVerify] = useState();

  


  const Validation = (e) =>{
 
    const re = /\S+@\S+\.\S+/
  
   if (!email || !re.test(email)) alert("Oups ! Nous avons besoin d\'une adresse e-mail valide.🙂")
   else if (!password || password.length < 6) alert("Le mot de passe doit comporter au moins 6 caractères et au maximum 12.🙂 "); 
   else {handleLogin(e)}

   
  }

  
    //Fonction pour connecter un utilisateur
    const handleLogin = (e) => {
      e.preventDefault();
    
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
       
          
          alert(" succès! ✅")
          navigate('/Dashboard/'+user.uid, { state: { email : user.email } })          
        })
        .catch((error) => {
          alert("Informations incorrectes, veuillez remplir vos informations de connexion")
          setEmail('');setPassword('')
        
        });
   }
   
   const getAdmin = async (e) => {
    try {

      const colRef = doc(db, 'Administrateur',email);
      const docSnap = await getDoc(colRef);
      if (docSnap.exists()) {

        //console.log(docSnap.data());
        const userDoc = [];
        const {Nom,Prenom,NumeroTel} = docSnap.data()
        userDoc.push({
            id: email,
            Nom,
            Prenom,
            NumeroTel,
            
          })
        setAdmin(userDoc)
       // handleLogin(e)
  
      }else {
        
      
     
      }

    } catch (error) {
     // console.log(error);
   //  navigate('/')
  
    }
     
   }

  


    return <>
    <Navbar  className='Nav fixed-top navbar-expand-lg'  expand="lg" id='home'>
  <Container className='text'>
    <a href=''></a>
    <Navbar.Brand href="#header" >Inpharma</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#solution">Notre Solution</Nav.Link>
      
       
      <Button variant="outline-dark" className='text' onClick={handleShow}> &nbsp; Login  &nbsp;</Button>{''} &nbsp;  
      
        <a href="https://wa.me/+22897997966">
      <Button variant="outline-dark" className='text align-items-center '> &nbsp; Nous Rejoindre &nbsp;</Button>{' '}
      </a>

      
     
      </Nav>
    </Navbar.Collapse>

    
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Se connecter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={Validation}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

           

   
      
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
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="success" onClick={handleClose} type='submit'>
            Se connecter
          </Button>
          
        </Modal.Footer>
          </Form>
        </Modal.Body>
       
      </Modal>
  </Container>
</Navbar>
    </>
}

