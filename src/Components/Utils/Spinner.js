//React
import React from 'react';
//Bootstrap
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

export const Spinner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <BootstrapSpinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
      </BootstrapSpinner>
    </div>
  );
};
