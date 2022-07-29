import { Container,Accordion } from "react-bootstrap"
import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function Acordion () {
    return <>
     <Container id="solution">
    
    <Accordion  >
    <Accordion.Item eventKey="0" class="bg-dark text-white " >
      <Accordion.Header  ><p className='fw-bold '>Notre vision <Icon.ArrowDownSquareFill color="#008065"/> </p></Accordion.Header>
      <Accordion.Body>
      Le problème qu’on veut résoudre c’est les pertes de temps inutiles dans la recherche d’une pharmacie
       ou d’un produit pharmaceutique
  
      </Accordion.Body>
    </Accordion.Item>  
    <Accordion.Item eventKey="1" class="bg-dark text-white">
      <Accordion.Header> <p className='fw-bold'>Qu'es-ce que nous faisons <Icon.ArrowDownSquareFill color="#008065"/></p> </Accordion.Header>
      <Accordion.Body>
      Nous donnons la possibilité à nos utilisateurs de rechercher les pharmacies 
      les plus proches, de rentrer en contact facilement avec 
      les pharmacies dans le but de vérifier la disponibilité d’un produit pharmaceutique
      </Accordion.Body>
    </Accordion.Item>
  
  </Accordion>
        
    </Container>
    
    </>
}