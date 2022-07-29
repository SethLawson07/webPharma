import React,{useState} from 'react';
import {Button,Alert,Navbar,Form,Nav,NavDropdown,Container,InputGroup,FormControl ,Modal} from  'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
export default function Navbar1() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

           

   
      
            <InputGroup className="mb-4">
      <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Email"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>

    <InputGroup className="mb-4">
      <InputGroup.Text id="btnGroupAddon">
        <Icon.FileEarmarkLockFill />
      </InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Mot de passe"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>

    
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/Dashboard">
          <Button variant="success" onClick={handleClose}>
            Se connecter
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
  </Container>
</Navbar>
    </>
}

