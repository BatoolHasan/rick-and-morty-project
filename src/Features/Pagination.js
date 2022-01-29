//React
import React from 'react';
//Bootstrap
import { Pagination as BootstrapPagination} from 'react-bootstrap';

export const Pagination = ({handlePage, prev, next, pages, page}) => {
  return (
    <div className='d-flex justify-content-center align-items-center mt-4'>
    <BootstrapPagination>
      <BootstrapPagination.First onClick={()=>handlePage(1)}/>
      <BootstrapPagination.Prev onClick={()=>handlePage(prev)}/>
      {prev>0 && <BootstrapPagination.Item onClick={()=>handlePage(1)}>{1}</BootstrapPagination.Item>}
      {prev>2 && <BootstrapPagination.Ellipsis />}
      {prev>2 && <BootstrapPagination.Item onClick={()=>handlePage(prev)}>{prev}</BootstrapPagination.Item>}
      <BootstrapPagination.Item active onClick={()=>handlePage(page)}>{page}</BootstrapPagination.Item>
      {next && next<=pages && <BootstrapPagination.Item onClick={()=>handlePage(next)}>{next}</BootstrapPagination.Item>}
      {next && next<pages-1 && <BootstrapPagination.Ellipsis />}
      {next && next<=pages-1 &&<BootstrapPagination.Item onClick={()=>handlePage(pages)}>{pages}</BootstrapPagination.Item>}
      <BootstrapPagination.Next onClick={()=>handlePage(next)}/>
      <BootstrapPagination.Last onClick={()=>handlePage(pages)}/>
  </BootstrapPagination>
  </div>
  );
};
