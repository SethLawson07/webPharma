import {Container,Row,Col} from  'react-bootstrap';
import img1 from './assets/img/search.svg'
import img2 from './assets/img/list.svg'
import img3 from './assets/img/chat.svg'
import img4 from './assets/img/pharmacy.svg'
import * as Icon from 'react-bootstrap-icons';

export default function Presentation() {

    return <>
    
    <Container className='container2' id="About">
  <Row>
   
    <div class="text-center fw-bold text-justify md-10"> InPharma au service de votre santé <Icon.Stars color="#008065" size={30}/>
    <p></p>
    </div>

    
    
  </Row>
  <Row>&nbsp;&nbsp;&nbsp;&nbsp;
  <Col><img src={img1} className="App-logo" alt="logo"  height={200}/></Col>&nbsp;
  
    <Col><img src={img2} className="App-logo" alt="logo"  height={200}/></Col>&nbsp;
    <Col><img src={img3} className="App-logo" alt="logo" height={200}/></Col>
  </Row>
  <Row className='text-center'>
  <Col ><em> &nbsp; &nbsp; Rechercher les plus proches de vous en un seul clic </em></Col>
  <Col><em>Accédez rapidement à la liste des pharmacies ouvertes en temps réels</em></Col>
  <Col><em>Rentrer en contact avec les pharmacies pour verifier la disponibilité de vos produits pharmaceutique</em></Col>
  </Row>
  <p class="text-center">
  <img src={img4} className="App-logo" alt="logo"  height={200}/>&nbsp;</p>
  
 
</Container>
    </>

}