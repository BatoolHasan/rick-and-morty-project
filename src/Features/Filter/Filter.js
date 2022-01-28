import React from 'react';
import {Form} from 'react-bootstrap';
export const Filter = ({handleChange, filterValue, filterKey}) => {
  return (
    <Form.Check 
      type={"checkbox"}
      id={`default-${"checkbox"}`}
      label={filterValue}
      onChange={handleChange}
      name={filterKey}
      value={filterValue}
    />
  );
};
