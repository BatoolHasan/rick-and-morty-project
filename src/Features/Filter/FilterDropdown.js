import React from 'react';
import { Dropdown} from 'react-bootstrap';
import { FilterCheckbox } from './FilterCheckbox';
export const FilterDropdown = ({handleChange, filterValues, filterKey}) => {
  return (
    <Dropdown className="m-4 mt-0">    
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
      {filterKey}
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <div className="p-2">
        {filterValues.map(fv=><FilterCheckbox handleChange={handleChange} filterKey={filterKey} filterValue={fv} key={fv}/>)}
      </div>
    </Dropdown.Menu>
  </Dropdown>
  );
};
