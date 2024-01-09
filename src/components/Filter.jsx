
import React, { useState, useEffect } from "react";

const Filter = (props) => {
  const { nameFilter, options, onChange } = props;
  
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  // Открытие фильтра по клику
  const toggleShowFilter = () => {
    setFilterIsOpen(!filterIsOpen);
  };
 
  // В фильтре `Sort By` можно выбрать только один checkbox,а в других несколько checkbox
  const [checkedOptions, setCheckedOptions] = useState([]);
 
  // console.log(checkedOptions);
  const handleNumberOfOption = (optionId) => {
    if (nameFilter === "Sort By") {
      setCheckedOptions((prevCheckedOptions) => {
        if (prevCheckedOptions.includes(optionId)) {
          // Если уже выбран, снимаем выбор
          return prevCheckedOptions.filter((id) => id !== optionId);
        } else {
          // Если не выбран, добавляем в выбранные
          return [optionId];
        }
      });
    } else {
      if (checkedOptions.includes(optionId)) {
        setCheckedOptions((prevCheckedOptions) =>
          prevCheckedOptions.filter((id) => id !== optionId)
        );
      } else {
        setCheckedOptions((prevCheckedOptions) => [
          ...prevCheckedOptions,
          optionId,
        ]);
      }
    }
  };

  useEffect(() => {
 
    if (onChange) {
      onChange(nameFilter, checkedOptions)
      
    }
      }
  
  , [checkedOptions, nameFilter, onChange]);

  return (
    <div className="filter-container">
      <div
        className={`flex items-center justify-between w-full p-[1.6rem] ${
          filterIsOpen ? "bg-inherit" : "bg-[#748C70]"
        }`}
        onClick={toggleShowFilter}
      >
        <p
          className={`filter-title  ${
            filterIsOpen ? "text-[#748C70]" : "text-white"
          }`}
        >
          {nameFilter}
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

      <div className={`p-[1.6rem] ${filterIsOpen ? "block" : "hidden"}`}>
        {options?.map((option) => (
          <div key={option?.id}>
            <input
              type="checkbox"
              id={`checkbox-filter${option?.id}`}
              className="checkbox-filter"
              onChange={() => {
                handleNumberOfOption(option.name);
              }}
              checked={checkedOptions.includes(option.name)}
            />
            <label
              htmlFor={`checkbox-filter${option?.id}`}
              className="label-filter"
            >
              {option?.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Filter;
