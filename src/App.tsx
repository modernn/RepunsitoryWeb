//import the style sheets
import './css/App.css';

//import components from libraries
import React from 'react';
import Pun from './Pun'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const App: React.FC = () => {
  return (
    <body>
      <div className="App">
      <Container>
        <Row>
          <Col lg={3}>1 of 2</Col>
          <Col>
            <h2>
              Repunsitory.com
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col lg={8} md={6}>
            <Pun />
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      </div>
    </body>
  );
}

export default App;
