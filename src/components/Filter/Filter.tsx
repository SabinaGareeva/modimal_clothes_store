import React, { useState } from "react";
import css from "./Filter.module.scss";

type FiltersName = "sort" | "fabric" | "color" | "size";
type CheckedOptionProps = {
  sort: string[];
  fabric: string[];
  color: string[];
  size: string[];
};
interface FilterProps {
  nameFilter: FiltersName;
  options: string[];
  checkedOption: CheckedOptionProps;
  handleCheckboxChange: (filterType: string, value: string) => void;
}
const Filter: React.FC<FilterProps> = ({
  nameFilter,
  options,
  checkedOption,
  handleCheckboxChange,
}) => {
  // открытие и закрытие фильтра при клике
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  // функция изменения открытия и закрытия фильтра
  const toggleShowFilter = () => {
    setFilterIsOpen(!filterIsOpen);
  };

  return (
    <div className={css.filter}>
      <div
        className={`${css.filter__container} ${
          filterIsOpen ? `${css.filter__open}` : `${css.filter__close}`
        }`}
        onClick={toggleShowFilter}
      >
        <p
          className={`${css.filter__title}  ${
            filterIsOpen ? `${css.filter__title_open}`: `${css.filter__title_close}`
          }`}
        >
          {`${nameFilter[0].toUpperCase()}${nameFilter
            .slice(1, nameFilter.length)
            .toLowerCase()}`}
        </p>
        {filterIsOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M6 11H18V13H6V11Z" fill="#748C70" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
              fill="white"
            />
          </svg>
        )}
      </div>

      <div className={`${css.filter__menu} ${filterIsOpen ?`${css.filter__menu_open}` :`${css.filter__menu_close}`}`}>
        {options?.map((option) => (
          <div key={option}>
            <input
              type="checkbox"
              id={`${css.filter__menu_checkbox}${option}`}
              className={css.filter__menu_checkbox}
              checked={checkedOption[nameFilter].includes(option)}
              onChange={() => {
                handleCheckboxChange(nameFilter, option);
              }}
            />
            <label
              htmlFor={`${css.filter__menu_checkbox}${option}`}
              className={css.filter__menu_label}
            >
              {`${option[0].toUpperCase()}${option
                .slice(1, option.length)
                .toLowerCase()}`}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Filter;
