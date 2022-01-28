import React from 'react';
import { FilterDropdown } from './FilterDropdown';
export const Filters = ({initialFilters, handleChange}) => {
  return (
      <div className="d-flex justify-content-center align-items-center">
          {Object.keys(initialFilters).map(filterKey=><FilterDropdown handleChange={handleChange} filterKey={filterKey} filterValues={(initialFilters[filterKey])} key={filterKey}/>)}
      </div>
  );
};
