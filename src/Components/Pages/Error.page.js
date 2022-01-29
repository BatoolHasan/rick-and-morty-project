//React
import React from 'react';
//Bootstrap
import { Card } from 'react-bootstrap';

export const ErrorPage = () => {
  return (
    <Card border="danger" style={{ width: '50rem' }} className="m-auto">
        <Card.Header><h1>Could not be found</h1></Card.Header>
        <Card.Body>
        <Card.Text>
            The requested page could not be found
        </Card.Text>
        </Card.Body>
  </Card>
  );
};
