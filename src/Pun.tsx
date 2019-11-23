import './css/bootstrap4-hello-world.css'

import React from 'react';
import Card from 'react-bootstrap/Card'

const Pun: React.FC = () => {
  return (
    <Card className='card'>
        <div className='card-body'>
            <h4 className='card-title'>
                Words go here
            </h4>
            <p className='card-text'>
                not important words here
            </p>
        </div>
        <div></div>
    </Card>
  );
}

export default Pun;