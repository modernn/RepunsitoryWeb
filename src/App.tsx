//import the style sheets
import './css/bootstrap4-hello-world.css'
import './css/App.css'

//import images
//import Logo from './images/Repunsitory-Logo.svg'
import Banner from './images/Repunsitory-Banner.svg'

//import components from libraries
import React from 'react';
import PunCard from './PunCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const App: React.FC = () => {
  return (
    <body className='App'>
      <div className="body navbar-dark text-white pt-5">
      <Container>
        <Row>
          <Col>
            <img src={Banner} className='img-fluid' alt='banner'></img>
          </Col>
        </Row>
        <Row>
          <div><br></br></div>
        </Row>
        <Row>
          <Col lg={2} sm={0}/>
          <Col className='col'>
            <PunCard />
          </Col>
          <Col lg={2} sm={0}/>
        </Row>
        <Row>
          <Col>
          <div></div>
          </Col>
        </Row>
      </Container>
      </div>
    </body>
  );
}

export default App;
