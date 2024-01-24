import React from "react";
import Navigation from "../components/layout/Header/Navigation";

/* Обертка контента основной страницы */
const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="p-4 bg-slate-400">{children}</div>
    </>
  );
};

export default MainLayout;
