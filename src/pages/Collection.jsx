import React from "react";
import ContentProducts from "../components/layout/ContentProducts/ContentProducts";
import ProductLayout from "../components/layout/Product/PageLayout";

const Collection = () => {
  return (
    <ProductLayout srcForBanner={"/collection-banner.png"}>
      <ContentProducts />
    </ProductLayout>
  );
};

export default Collection;
