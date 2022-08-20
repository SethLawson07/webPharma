import React, { useEffect,useState } from 'react';
import NavDash from "./components/Navbar";
import { Container, Table,Button,Tab,Tabs,InputGroup,FormControl,Modal,Form } from "react-bootstrap";
import { Link ,useNavigate,useLocation} from "react-router-dom";
import  *  as Icon from "react-bootstrap-icons";
import ListAdmin from "./ListeAdmin";
import ListPharmacie from "./ListPharmacie";
import ListCompte from "./ListCompte";
import ListAssurance from "./ListAssurance";
import Home from "./Home";
import ListPharmacieGarde from "./ListePharmacieGarde";
import { getAuth, signOut , sendPasswordResetEmail} from "firebase/auth";
import  {db} from '../../config/firebase'
import {collection, query, getDoc,doc,onSnapshot} from "firebase/firestore"
import ListCommune from './ListCommune';



export default function Dashboard () {

  //https://thewebdev.info/2022/03/08/how-to-pass-data-when-navigating-programmatically-with-react-router/
  const navigate = useNavigate();
  const { state } = useLocation();
  const {email} = state

  const [emailUser, setEmailUser] = useState('');
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [userDoc,setUserDoc] = useState();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [Niveau,setNiveau] = useState();
  const [Etat,setEtat] = useState();
  const [verify, setVerify] = useState();

  const validateFormAdd = (e) => {
    //Variable Regex pour valider les champs    
    const re = /\S+@\S+\.\S+/
    if (!email || !re.test(email) ) alert('Oups ! Nous avons besoin d\'une adresse e-mail valide.🙂')   
    else {reset(e)}
  
    
  }

    // function to update admin in firestore 
    const reset = async (e) => {
       e.preventDefault()
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
      .then(() => {
          // Password reset email sent!
          // ..
          
          alert('E-mail de réinitialisation du mot de passe envoyé ! ✅')
          handleClose()
      })
      .catch((error) => {
          alert('E-mail de réinitialisation du mot de passe non envoyé ! ❌ Réessayer')
      });
  }
  

  const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert('Sign-out successful.')
      setNom('');setPrenom('')
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }


  
  

    useEffect(() => {
     const unsub = onSnapshot(doc(db, "Administrateur", email), (doc) => {
        console.log("Current data: ", doc.data());
        setNom(doc.data().Nom)
        setPrenom(doc.data().Prenom)
        setNiveau(doc.data().Niveau)
        setEtat(doc.data().Etat)
      
        
    },
    //setUserDoc(doc.data()) prenom ? '' :navigate('/');
    );
   
    }, [prenom])
  


    return <> &nbsp; 
   <div>
   &nbsp;  <Button variant="outline-success" onClick={logOut}><Icon.ArrowLeftSquareFill color="#008065"  size={30}/> {prenom+nom} </Button> 
   &nbsp; <Button variant="outline-success" onClick={handleShow} ><Icon.PencilSquare color="#008065"  size={30}/> </Button> 
    </div>  

    {Etat ? 

    
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3" >
      
      <Tab eventKey="home" title="Home">
        <Home/>
      </Tab>
      <Tab eventKey="Pharma" title="Pharmacies" >
      <ListPharmacie/>
      </Tab>
      
      <Tab eventKey="Assurance" title="Assurances" >
      <ListAssurance/>
      </Tab>
      <Tab eventKey="Commune" title="Communes" >
      <ListCommune/>
      </Tab>
      {Niveau ? 
        <Tab eventKey="Admin" title="Administrateurs" >
        <ListAdmin/>
        </Tab>
        :
        ''
        
        }
      
     
    
      
      
    </Tabs>
    : navigate('/')
      }
     


   
   
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier mon mot de passe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={validateFormAdd}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">  

                 <InputGroup className="mb-4">
      <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Email"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
        onChange={(e) => setEmailUser(e.target.value)} 
        value={emailUser}
      />
    </InputGroup>

  

    
            </Form.Group>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" type='submit'>
            Valider
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
       
      </Modal>
    </>
}