import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MainTitle from "../../components/UI/MainTitle";
import css from "./YourCart.module.css";
import CloseButton from "../../components/UI/CloseButton";
import OrderProductsStore from "../../components/store/OrderProductsStore";
import { observer } from "mobx-react-lite";
import CountProduct from "../../components/UI/CountProduct";

const YourCart = observer(() => {
  const orderTableHeaders = ["Order summary", "Price", "Quantity", "Total"];
  useEffect(() => {
    OrderProductsStore.getOrderProducts();
  }, []);
  console.log(OrderProductsStore.products);
  return (
    <main>
      <div className="container">
        <MainTitle
          tagTitle="h2"
          fontSize={3.2}
          fontWeight="font-semibold"
          marginBottom="2.4rem"
          className="text-[3.2rem]"
        >
          Your cart
        </MainTitle>
        {/* <Link>Continue shopping</Link>  */}
        <div>
          <table className={css.order__table}>
            <thead>
              <tr className="border-b border-solid border-[#DFDFDF]">
                {orderTableHeaders.map((element, index) => {
                  return <th key={`order-table-${index}`} className="text-[1.8rem] font-normal">{element}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {OrderProductsStore.products.map((product, index) => {
                return (
                  <tr key={`order-tableBody-${index}`}>
                    <td className="flex">
                      <Image
                        src={product.imgPath[0]}
                        alt={product.name}
                        width={130}
                        height={150}
                      ></Image>
                      <div>
                      <p>{product.name}</p>
                      <p>{product.size}</p>
                      <p>Color: {product.color}</p>
                      </div>
                      <CloseButton width={24} height={24} />
                    </td>
                    <td className="text-center">${product.price}</td>
                    <td >
                      <div className="flex justify-center">  <CountProduct
                        productId={product.id}
                        productCount={product.count}
                      /></div>
                    
                    </td>
                    <td className="text-center">${product.price * product.count}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
});

export default YourCart;
