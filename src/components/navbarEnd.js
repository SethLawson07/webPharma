import {Button,Alert,Navbar,Nav,NavDropdown,Container} from  'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function NavbarEnd() {

    return <>
      <Navbar className="Nav1 text1">
    <Container>
      <Navbar.Brand href="#home"><p className="text1">Copyright © 2022 Inpharma | <a href="http://www.globalsparkcorporation.com/"> Spark Corporation</a>, tous droits réservés.</p></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            <Icon.Facebook  color="black"/>&nbsp;
            <Icon.Youtube  color="black"/>&nbsp;
            <Icon.Tiktok  color="black"/>&nbsp;&nbsp;
            
            <Container id="header" >
              <Link to="/">
              <Button variant="outline-dark"  className='text'>  <Icon.ArrowBarUp  color="black"/></Button>{' '}
              </Link>
               &nbsp;</Container>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    </>
    
  }