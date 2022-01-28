import React from 'react';
import { Form, Button } from 'react-bootstrap';
export const Search = ({handleSearch}) => {

  return (
    <Form className='p-3'>
        <Form.Group className="mb-3 row d-flex justify-content-center align-items-center" controlId="search">
        <div className='col-sm-8 col-md-4'>
            <Form.Control type="text" placeholder="search for a character..." onChange={handleSearch}/>
        </div>
        </Form.Group>
  </Form>
  );
};

