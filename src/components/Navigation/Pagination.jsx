import React from "react";

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
        <div className="flex w-[16.5rem] justify-between">
          {pageNumbers.map((number) => (
            <button
              className={
                currentPage === number
                  ? "pagination-button pagination-button-active"
                  : "pagination-button"
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
