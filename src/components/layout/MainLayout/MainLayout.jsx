import React from "react";
import Navigation from "../Header/Navigation";
import Footer from "../Footer/Footer";
import PageBanner from "../Banners/PageBanner";
const MainLayout = ({ children, srcForBanner }) => {
  return (
    <div>
      <Navigation />
      {srcForBanner && <PageBanner src={srcForBanner} />}
      <main className="container">{children}</main>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;
