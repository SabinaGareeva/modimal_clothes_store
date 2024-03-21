import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MainTitle from "../../components/UI/MainTitle";
import css from "./YourCart.module.css";
import CloseButton from "../../components/UI/Buttons/CloseButton";
import OrderProductsStore from "../../components/store/OrderProductsStore";
import { observer } from "mobx-react-lite";
import CountProduct from "../../components/UI/CountProduct";

const YourCart = observer(() => {
  const orderTableHeaders = ["Order summary", "Price", "Quantity", "Total"];
  const deleteProductBasket = (productId) => {
    OrderProductsStore.deleteOrderProduct(productId);
  };
  useEffect(() => {
    OrderProductsStore.getOrderProducts();
  }, []);
  console.log(OrderProductsStore.products);
  const priceAllProducts = OrderProductsStore.products.reduce(
    (prev, counter) => prev + counter.price * counter.count,
    0
  );
  const tax = ((priceAllProducts * 7) / 100).toFixed(2);
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

        <table className={css.order__table}>
          <thead>
            <tr className="border-b border-solid border-[#DFDFDF]  ">
              {orderTableHeaders.map((element, index) => {
                return (
                  <th
                    key={`order-table-${index}`}
                    className="text-[1.8rem] font-normal pb-[2.4rem]"
                  >
                    {element}
                  </th>
                );
              })}
            </tr>
            <tr>
              <td colSpan={4} className="pt-[3.2rem]"></td>
            </tr>
          </thead>
          <tbody>
            {OrderProductsStore.products.map((product, index) => {
              return (
                <tr key={`order-tableBody-${index}`} className="align-top ">
                  <td className="flex justify-between mb-[3.2rem] items-start">
                    <div className="flex">
                      <Image
                        src={product.imgPath[0]}
                        alt={product.name}
                        width={142}
                        height={150}
                        className="mr-[0.8rem]"
                      ></Image>
                      <div className="pt-[1rem]">
                        <p className="text-[1.6rem] font-bold mb-[0.8rem]">
                          {product.name}
                        </p>
                        <p className="text-[1.6rem] text-[#404040] mb-[0.8rem]">
                          {product.size}
                        </p>
                        <p className="text-[1.6rem] text-[#404040]">
                          Color: {product.color}
                        </p>
                      </div>
                    </div>
                    <div className="pt-[1rem]">
                      <CloseButton
                        width={14}
                        height={14}
                        onClick={() => deleteProductBasket(product.id)}
                      />
                    </div>
                  </td>
                  <td className="text-center text-[1.8rem] pt-[1rem]">
                    ${product.price}
                  </td>
                  <td>
                    <div className="flex justify-center pt-[1rem]">
                      <CountProduct
                        productId={product.id}
                        productCount={product.count}
                      />
                    </div>
                  </td>
                  <td className="text-center text-[1.8rem] pt-[1rem]">
                    ${product.price * product.count}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="float-right w-2/4 ">
          <div className="flex justify-between  text-[1.8rem] items-center mb-[0.8rem]">
            <div >
              <p className="mb-[0.8rem]">Subtotal ({OrderProductsStore.products.length})</p>
              <p className="mb-[0.8rem]">Tax</p>
              <p className="mb-[1.6rem]">Shipping</p>
              <p>Total Orders:</p>
            </div>
            <div >
              <p className="mb-[0.8rem]">${priceAllProducts}.00</p>
              <p className="mb-[0.8rem]">${tax}</p>
              <p className="mb-[1.6rem]">Free</p>
              <p>${Number(priceAllProducts) + Number(tax)}</p>
            </div>
           
          </div>
          <p className="text-[1.2rem] font-semibold">
            The total amount you pay includes all applicable customs duties &
            taxes. We guarantee no additional charges on delivery
          </p>  <Link href="/Collection">Next</Link>
        </div>
      
      </div>
    </main>
  );
});

export default YourCart;
