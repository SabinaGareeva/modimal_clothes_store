import React from "react";
import css from './Select.module.css'
const Select = ({ options }) => {
  return (
    <select name="sizes" id="sizes-select" className={css.select}>
      {options.map((option, index) => (
        <option key={`${option}-${index}`}>{option}</option>
      ))}
    </select>
  );
};
export default Select;
