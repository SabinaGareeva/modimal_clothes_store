import React, { ReactNode } from "react";
import Navigation from "../Header/Navigation";
import Footer from "../Footer/Footer";
import PageBanner from "../Banners/PageBanner";

const MainLayout = ({ children, srcForBanner }:{children:ReactNode,srcForBanner?:string}) => {
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
