import React from 'react';
import {Form} from 'react-bootstrap';
export const FilterCheckbox = ({handleChange, filterValue, filterKey}) => {
  return (
    <Form.Check 
      type={"checkbox"}
      id={`checkbox-${filterKey}-${filterValue}`}
      label={filterValue}
      onChange={handleChange}
      name={filterKey}
      value={filterValue}
    />
  );
};
