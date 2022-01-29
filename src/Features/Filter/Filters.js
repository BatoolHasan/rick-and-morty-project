//React
import React from 'react';
//Components
import { FilterDropdown } from './FilterDropdown';

export const Filters = ({initialFilters, handleChange, filterQuery}) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
    {
      Object.keys(initialFilters).map(filterKey=>{
      return <FilterDropdown 
              handleChange={handleChange} 
              filterKey={filterKey} 
              filterValues={(initialFilters[filterKey])}
              key={filterKey}
              filterQuery={filterQuery}
              />
          })
      }
    </div>
  );
};
