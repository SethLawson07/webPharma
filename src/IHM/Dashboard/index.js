import NavDash from "./components/Navbar";
import { Container, Table,Button,Tab,Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import  *  as Icon from "react-bootstrap-icons";
import ListAdmin from "./ListeAdmin";
import ListPharmacie from "./ListPharmacie";
import ListCompte from "./ListCompte";
import ListAssurance from "./ListAssurance";
import Home from "./Home";
import ListPharmacieGarde from "./ListePharmacieGarde";

export default function Dashboard () {

    return <> &nbsp; 
   <div>
   &nbsp;  <Link to="/"> <Icon.ArrowLeftSquareFill color="#008065" size={30}/> </Link> 
    </div>  
    
     <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3" >
  <Tab eventKey="home" title="Home">
    <Home/>
  </Tab>
  <Tab eventKey="Pharma" title="Pharmacies" >
  <ListPharmacie/>
  </Tab>
  <Tab eventKey="PharmaGarde" title="Pharmacies de Garde" >
  <ListPharmacieGarde/>
  </Tab>
  <Tab eventKey="Assurance" title="Assurances" >
  <ListAssurance/>
  </Tab>
  <Tab eventKey="Admin" title="Administrateurs" >
  <ListAdmin/>
  </Tab>
 

  <Tab eventKey="Compte" title="Comptes" >
  <ListCompte/>
  </Tab>
  
</Tabs>


   
    
    </>
}