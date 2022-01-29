//React
import React from 'react';
//Bootstrap
import { Dropdown} from 'react-bootstrap';
//Components
import { FilterCheckbox } from './FilterCheckbox';

export const FilterDropdown = ({handleChange, filterValues, filterKey, filterQuery}) => {
  return (
    <Dropdown className="m-4 mt-0">    
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        {filterKey}
      </Dropdown.Toggle>
    <Dropdown.Menu>
      <div className="p-2">
        {filterValues.map(fv=>{
          return <FilterCheckbox 
            handleChange={handleChange} 
            filterKey={filterKey} 
            filterValue={fv} 
            key={fv}
            filterQuery={filterQuery}
            />
          }
        )}
      </div>
    </Dropdown.Menu>
  </Dropdown>
  );
};
