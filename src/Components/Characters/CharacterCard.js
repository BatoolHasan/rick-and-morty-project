//React
import React from 'react';
//Utils
import { getStatusBadgeStyle } from '../../Utils/Characters/utils';
import { LazyImage } from '../Utils/LazyImage';
//Bootstrap
import { Card, Button, Badge} from 'react-bootstrap';
//Router
import { Link } from 'react-router-dom';

export const CharacterCard = ({details:{name, status, species, gender, image, id}}) => {

  const statusBadgeStyle=getStatusBadgeStyle(status);

  return(
    <Card style={{ width: '22rem' }}>
      <Card.Body>
        <div className="mb-3">
          <LazyImage src={image} alt={name}/>
        </div>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          {name} 
          <h6 className='mb-0'><Badge bg={statusBadgeStyle}>{status}</Badge></h6>
        </Card.Title>
        <div className='d-flex justify-content-between align-items-center'>
          <Card.Text>
            {species}
          </Card.Text>
          <Card.Text>
            {gender}
          </Card.Text>
        </div>
        <Link to={`/${id}`}>
          <Button variant="primary">More Details</Button>
        </Link>
      </Card.Body>
  </Card>
  );
};

