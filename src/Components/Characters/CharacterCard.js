import React from 'react';
import { Card, Button, Badge} from 'react-bootstrap';
import { LazyImage } from '../Utils/LazyImage';
export const CharacterCard = ({details:{name, status, species, image}}) => {
  let statusBadge="";
  switch(status.toLowerCase()){
    case("alive"):
      statusBadge="success";
      break;
      case("dead"):
      statusBadge="danger";
      break;
      case("unknown"):
      default:
      statusBadge="dark";
      break;
  }

  return(
    <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <LazyImage src={image} alt={name}/>
      <Card.Title className='d-flex justify-content-between align-items-center'>
        {name} 
        <h6 className='mb-0'><Badge bg={statusBadge}>{status}</Badge></h6>
      </Card.Title>
      <Card.Text>
        {species}
      </Card.Text>
      <Button variant="primary">More Details</Button>
    </Card.Body>
  </Card>
  );
};

