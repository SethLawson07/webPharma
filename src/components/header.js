import {Container,Row,Col,ListGroup,Badge} from  'react-bootstrap';
import iphone from './assets/img/b1.png'
import andoird from './assets/img/b2.png'
import mobile from './assets/img/capture.png'
import * as Icon from 'react-bootstrap-icons';

export default function Header() {
    
    return <>
    <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
       
  <Container className='container1' id='header'>
    <Row>
      <Col>
      <br></br><br></br><br></br><br></br><br></br><br></br>
   
      <ListGroup as="ol" >
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className=""> Rechercher les Pharmacies les plus proches de vous</div>
   
    </div>
    <Badge bg="dark" pill>
      1
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="">Rechercher les Pharmacies de garde les plus proches de vous</div>
    
    </div>
    <Badge bg="dark" pill>
      2
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="">Et rentrer en contact avec eux</div>
      
    </div>
    <Badge bg="dark" pill>
      3
    </Badge>
  </ListGroup.Item>
  </ListGroup> 
  <br></br><p class="fw-bold"><Icon.Download color="white" /> &nbsp; Download the app</p> 
  
  <p class="fw-bold"><Icon.Search color="white" /> &nbsp;Find a pharmacy and follow it in real time with Inpharma.</p>
  
  <img src={iphone} className="App-logo" alt="logo" width={140} height={50} /> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={andoird} className="App-logo" alt="logo" width={140} height={50} />

      </Col>
      <Col>
      
      <br></br><p class="text-center"><img src={mobile} className="App-logo" alt="logo" width={300} height={581}  /></p>
      </Col>
    </Row>
   <br></br>
  </Container>
  
    </>
    }