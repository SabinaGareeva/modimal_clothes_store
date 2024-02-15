import React from "react";
import Image from "next/image";
import CountProduct from "../UI/CountProduct";
import CloseButton from "../UI/CloseButton";
import css from "./CardsInBasket.module.css";

const CardsInBasket = ({ prodactInBasket, setOrderProducts }) => {
  function deleteProductBasket(productId) {
    fetch(`http://localhost:3000/orders/${productId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setOrderProducts((prevOrder) =>
            prevOrder.filter((order) => order.id !== productId)
          );
        }
      })
      .catch((error) => {
        console.error("Ошибка при выполнении запроса:", error);
      });
  }
  return (
    <div key={`orderProduct__${prodactInBasket.index}`} className="flex mb-3">
      <Image
        src={prodactInBasket.orderProduct.imgPath[0]}
        alt={prodactInBasket.orderProduct.name}
        className={css.basket__product_image}
        width={130}
        height={150}
        objectFit="cover"
      />
      <div className="p-5 w-full">
        <div className="flex justify-between items-center">
          <h3 className={css.basket__product_title}>
            {prodactInBasket.orderProduct.name}
          </h3>
          <CloseButton
            width="10"
            height="10"
            onClick={() => deleteProductBasket(prodactInBasket.orderProduct.id)}
          />
        </div>

        <p className={css.basket__product_subtitle}>Size: {prodactInBasket.orderProduct.size}</p>
        <p className={css.basket__product_subtitle}>
          Color: {prodactInBasket.orderProduct.color}
        </p>
        <div className="flex justify-between items-center">
          <CountProduct />
          <p className={css.basket__product_price}>
            {prodactInBasket.orderProduct.price}$
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardsInBasket;
