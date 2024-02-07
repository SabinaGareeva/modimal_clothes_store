import React from "react";
import css from './MainButton.module.css'
const MainButton = ({ children,onClick }) => {
  return <button onClick={onClick} className={css.main__button}>{children}</button>;
};
export default MainButton;
