import { BrowserRouter, Routes, Route, Link,useNavigate } from "react-router-dom";
import { Form,Button,Container, Row, Col,InputGroup,FormControl } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import React,{useState,useEffect} from 'react';
import  {db} from '../config/firebase'
import {collection, query, orderBy, onSnapshot,addDoc,deleteDoc,updateDoc,doc,setDoc,getDoc, Timestamp} from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import img from './Dashboard/assets/img/login.png'

export default function Login () {
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


   return (
    <>
    <Container>

      <Row>
        <Col></Col>
        <Col xs={5}>
        <img src={img} className="App-logo" alt="logo" width={370} height={250} />
        </Col>
        <Col></Col>
      </Row>
      </Container>
      <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>

        <br/>
  
  <Form class="offset-md-4 " onSubmit={Validation}>
 
  <div>
  
  </div><br/>
 
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
  
  <div className="d-grid gap-2">
  
  <Button variant="success" onClick={handleClose} type='submit'>
          Se connecter
        </Button>
 
  </div>

</Form>
  
  


      
         


        </Col>
        <Col></Col>
      </Row>
      
    </Container>


    </>
   
  

           
   
    
   
   )

}