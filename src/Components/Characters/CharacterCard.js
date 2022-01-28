import React from 'react';
import { getStatusBadgeStyle } from '../../Utils/Characters/utils';
import { Card, Button, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LazyImage } from '../Utils/LazyImage';
export const CharacterCard = ({details:{name, status, species, image, id}}) => {
  const statusBadgeStyle=getStatusBadgeStyle(status);

  return(
    <Card style={{ width: '22rem' }}>
    
    <Card.Body>
      <LazyImage src={image} alt={name}/>
      <Card.Title className='d-flex justify-content-between align-items-center'>
        {name} 
        <h6 className='mb-0'><Badge bg={statusBadgeStyle}>{status}</Badge></h6>
      </Card.Title>
      <Card.Text>
        {species}
      </Card.Text>
      <Link to={`/${id}`}>
        <Button variant="primary">More Details</Button>
      </Link>
    </Card.Body>
  </Card>
  );
};

