import React from "react";
import css from './MainButton.module.css'
const MainButton = ({ children }) => {
  return <button className={css.main__button}>{children}</button>;
};
export default MainButton;
