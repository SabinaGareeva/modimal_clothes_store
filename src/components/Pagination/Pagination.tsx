import React from "react";
import css from "./Pagination.module.css";
interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  handlePageChange: (number: number) => void;
  currentPage: number;
  prevPage: () => void;
  nextPage: () => void;
}

const Pagination:React.FC<PaginationProps> = ({
  productsPerPage,
  totalProducts,
  handlePageChange,
  currentPage,
  prevPage,
  nextPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={css.pagination__centre}>
      <div className={css.pagination__container}>
        <button className={css.pagination__button} onClick={prevPage}>
          &lt;
        </button>
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
        <button className={css.pagination__button} onClick={nextPage}>
          &gt;
        </button>
      </div>
    </div>
  );
};
export default Pagination;
