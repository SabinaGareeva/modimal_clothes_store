import React from "react";
import Cards from "./Cards";
import { Product } from "@/types/types";
import css from "./ProductElement.module.scss"
interface productsProps{
  products: Product[]
}
const ProductElements:React.FC<productsProps> = ({ products }) => {
  return (
    <div
      className=
      {css.productElements}
   
    >
      {products.map((element, index) => (
        <Cards productElement={{ element, index }} key={index}></Cards>
      ))}
    </div>
  );
};
export default ProductElements;
