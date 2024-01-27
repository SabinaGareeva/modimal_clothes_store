import React from "react";
import css from './Pagination.module.css'

const Pagination = ({
  productsPerPage,
  totalProducts,
  handlePageChange,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {/* <div className="pagination-centre"> */}
        <div className="flex">
          {pageNumbers.map((number) => (
            <button
              className={
                currentPage === number
                  ? `${css.pagination__button} ${css.pagination__button_active}`
                  : `${css.pagination__button}`
              }
              key={number}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
};
export default Pagination;
