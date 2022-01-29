//React
import React from 'react';
//Bootstrap
import {Form} from 'react-bootstrap';

export const FilterCheckbox = ({handleChange, filterValue, filterKey, filterQuery}) => {
  return (
    <Form.Check 
      type="radio"
      id={`radio-${filterKey}-${filterValue}`}
      label={filterValue}
      onChange={handleChange}
      name={filterKey}
      value={filterValue}
      checked={filterQuery[filterKey]===filterValue || (filterQuery[filterKey]==="" && filterValue==="All")}
    />
  );
};
