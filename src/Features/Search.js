//React
import React from 'react';
//Bootstrap
import { Form } from 'react-bootstrap';

export const Search = ({handleSearch}) => {
  return (
    <Form className='p-3' onSubmit={(event)=>event.preventDefault()}>
        <Form.Group className="mb-3 row d-flex justify-content-center align-items-center" controlId="search">
          <div className='col-sm-8 col-md-4'>
            <Form.Control type="text" placeholder="search for a character..." onChange={handleSearch}/>
          </div>
        </Form.Group>
  </Form>
  );
};

