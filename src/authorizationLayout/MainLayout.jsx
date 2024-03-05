import React from "react";
import Navigation from "../components/layout/Header/Navigation";

/* Обертка контента основной страницы */
const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="bg-slate-400">{children}</div>
    </>
  );
};

export default MainLayout;
