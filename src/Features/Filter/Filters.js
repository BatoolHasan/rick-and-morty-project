import React from 'react';
import { Dropdown} from 'react-bootstrap';
import { Filter } from './Filter';
export const Filters = ({handleChange, filterValues}) => {
  return (

    <Dropdown>
    <Dropdown.Toggle variant="dark" id="dropdown-basic">
      Status
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <div className="p-2">
        {filterValues.map(fv=><Filter handleChange={handleChange} filterKey="status" filterValue={fv} key={fv}/>)}
      </div>
    </Dropdown.Menu>
  </Dropdown>
  );
};
