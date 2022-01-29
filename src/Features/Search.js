//React
import React from 'react';
//Bootstrap
import { Form, Button} from 'react-bootstrap';

export const Search = ({handleSearch, handleSubmit, value}) => {
  return (
    <Form className='p-3' onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex justify-content-center align-items-center" controlId="search">
            <Form.Control value={value} style={{maxWidth:"40rem", marginRight:"1em"}} type="text" placeholder="search for a character..." onChange={handleSearch}/>
            <Button variant="outline-dark" type="submit">Search</Button>
        </Form.Group>
  </Form>
  );
};

