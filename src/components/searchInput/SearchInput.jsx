import React from "react";
import css from './SearchInput.module.css'
const SearchInput = () => {
    return (
    <>
<label for="name">Введите название (от 4 до 8 символов):</label>

<input className={css.main__input}
  type="text"
  
  name="name"
  required
 
/></>
    )
}
export default SearchInput ;