import {Carousel,Button} from 'react-bootstrap'
import ig1 from './assets/img/react_ig1.png';
import logo from '../logo.svg';
export default function CCarousel() {
    
    return (
        <div>
            <Carousel>
  <Carousel.Item>
  <img src={ig1} className="App-logo" alt="logo" width={1300} height={500} />

    <Carousel.Caption>
    <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src={ig1} className="App-logo" alt="logo" width={1300} height={500} />


    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src={ig1} className="App-logo" alt="logo" width={1300} height={500} />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
    }