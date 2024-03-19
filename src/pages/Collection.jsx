import React from "react";
import ContentProducts from "../components/layout/ContentProducts/ContentProducts";
import MainLayout from "../components/layout/MainLayout/MainLayout";

const Collection = () => {
  return (
    <MainLayout srcForBanner={"/collection-banner.png"}>
      <ContentProducts />
    </MainLayout>
  );
};

export default Collection;
