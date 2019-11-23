//import the style sheets
import './css/bootstrap4-hello-world.css'
import './css/App.css'

//import components from libraries
import React from 'react';
import Pun from './Pun'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const App: React.FC = () => {
  return (
    <body className='App'>
      <div className="App-header bg-dark navbar-dark text-white pt-5">
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col>
            <h1 className='display-2 text-light text-uppercase'>
              Repunsitory.com
            </h1>
          </Col>
        </Row>
        <Row>
          <div><br></br></div>
        </Row>
        <Row>
          <Col className='.col-8'>
            <Pun />
          </Col>
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
