import React from "react";
import Cards from "./Cards";

const ProductElements = ({ products }) => {
  return (
    <div
      className="w-2/3 grid  grid-cols-2 gap-y-16 gap-x-24"
      id="container-cards"
    >
      {products.map((element, index) => (
        <Cards dataelement={{ element, index }} key={index}></Cards>
      ))}
    </div>
  );
};
export default ProductElements;
