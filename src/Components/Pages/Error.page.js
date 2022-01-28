//React
import React from 'react';
//Bootstrap
import { Card } from 'react-bootstrap';

export const ErrorPage = ({error}) => {
  return (
    <Card border="danger" style={{ width: '50rem' }} className="m-auto">
        <Card.Header><h1>Error</h1></Card.Header>
        <Card.Body>
        <Card.Text>
            {error.message}
        </Card.Text>
        </Card.Body>
  </Card>
  );
};
