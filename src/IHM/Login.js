import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Form,Button,Container, Row, Col,InputGroup,FormControl } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

export default function Login () {

   return (


    <Container >
   
   <br/>
  
    <Form class="offset-md-4 ">
   
    <div>
    <Link to="/"> <Icon.ArrowLeftSquareFill color="#008065" size={30}/> </Link> 
    </div><br/>
    <InputGroup className="mb-4">
      <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Input group example"
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
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>
    <Link to="/Dashboard">
    <div className="d-grid gap-2">
    
    <Button variant="success" type="submit" size="lg" >
      Submit
    </Button>
   
    </div>
    </Link>
  </Form>
    
    
  

        
           


           
    </Container>

    
   
   )

}