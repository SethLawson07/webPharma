import {Button,Alert,Navbar,Nav,NavDropdown,Container} from  'react-bootstrap';
import { Link } from 'react-router-dom';
import  *  as Icon from "react-bootstrap-icons";

export default function NavDash() {

    return <>
    <>
  

  <br />
  <Navbar bg="light" variant="light" >
    <Container >
    <Link to="/"> <Icon.ArrowLeftSquareFill color="#008065" size={30}/> </Link>  &nbsp;  
    <Navbar.Brand href="/Dashboard">Pharmacies</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/Admin">Adminstrateurs</Nav.Link>
      <Nav.Link href="/Admin">Statistiques</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
</>
    
    </>
}