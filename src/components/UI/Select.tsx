import React from "react";
import css from "./Select.module.css";
interface Props {
  options: string[];
  setSelectedSize: (size: string) => void;
}
const Select: React.FC<Props> = ({ options, setSelectedSize }) => {
  return (
    <select
      name="sizes"
      id="sizes-select"
      className={css.select}
      onChange={(event) => setSelectedSize(event.target.value)}
    >
      {options.map((option, index) => (
        <option key={`${option}-${index}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default Select;
