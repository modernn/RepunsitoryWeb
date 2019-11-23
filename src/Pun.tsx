import './css/bootstrap4-hello-world.css'

import Like from './images/like.svg'
import Dislike from './images/dislike.svg'

import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Pun: React.FC = () => {
  return (
    <Container>
      <Card className='card'>
        <Row>
          <div className='card-body'>
              <p className='card-text text-dark text-center'>
                  Punny things go here!!
              </p>
          </div>
        </Row>
        <Row className='card-footer'>
          <Col className='col-8'>
            <ButtonGroup className='span-2'>
              <Button>
                <img src={Like} className='img-fluid-icon' alt='Responsive Image'></img>
              </Button>
              <Button>
                <img src={Dislike} className='img-fluid-icon' alt='dislike'></img>
              </Button>
            </ButtonGroup>
          </Col>
          <Col> 
              <Button className='float-right'>Pun Me!</Button>
          </Col>
        </Row>
      </Card>
    </Container>

  );
}

export default Pun;