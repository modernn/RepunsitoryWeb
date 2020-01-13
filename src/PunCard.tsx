import './css/bootstrap4-hello-world.css'

import Like from './images/RepunsitoryIcons_Like-NoBorder-Light.svg'
import Dislike from './images/RepunsitoryIcons_Dislike-NoBorder-Light.svg'
import NewPun from './images/RepunsitoryIcons_NewPun-NoBorder-Light.svg'

import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// eslint-disable-next-line
import {PunApiService} from './PunApiService'


const Pun: React.FC = () => {
  // eslint-disable-next-line
  var thisPun = PunApiService.getNewRandomPun();
  return (
    <Container>
      <Card className='card'>
        <Row>
          <div className='card-body'>
              <p className='card-subtitle text-dark text-center '>
                Pun goes here
              </p>
          </div>
        </Row>
        <Row className='card-footer'>
          <Col>
            <ButtonGroup>
              <Button>
                <img src={Like} className='img-fluid-icon' alt='like'></img>
              </Button>
              <Button>
                <img src={Dislike} className='img-fluid-icon' alt='dislike'></img>
              </Button>
            </ButtonGroup>
          </Col>
          <Col> 
              <Button className='float-right '>
              <img src={NewPun} className='img-fluid-icon' alt='newpun'></img>
              </Button>
          </Col>
        </Row>
      </Card>
    </Container>

  );
}

export default Pun;