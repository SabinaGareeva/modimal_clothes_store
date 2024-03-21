import React, { useEffect } from "react";
import Image from "next/image";
import CountProduct from "../UI/CountProduct";
import CloseButton from "../UI/Buttons/CloseButton";
import css from "./CardsInBasket.module.css";
import OrderProductsStore from "../store/OrderProductsStore";
import { observer } from "mobx-react-lite";
import { OrderProduct } from "@/types/types";
interface ProductInBasketProps {
  productInBasket: {
    orderProduct: OrderProduct;
    index: number;
  };
}

const CardInBasket: React.FC<ProductInBasketProps> = observer(
  ({ productInBasket }) => {
    // функция удаления товаров из корзины
    const deleteProductBasket = (productId: string) => {
      OrderProductsStore.deleteOrderProduct(productId);
    };
    return (
      <div key={`orderProduct__${productInBasket.index}`} className="flex mb-3">
        <Image
          src={productInBasket.orderProduct.imgPath[0]}
          alt={productInBasket.orderProduct.name}
          className={css.basket__product_image}
          width={130}
          height={150}
          objectFit="cover"
        />
        <div className="p-5 w-full">
          <div className="flex justify-between items-center">
            <h3 className={css.basket__product_title}>
              {productInBasket.orderProduct.name}
            </h3>
            <CloseButton
              width="10"
              height="10"
              onClick={() =>
                deleteProductBasket(productInBasket.orderProduct.id)
              }
            />
          </div>

          <p className={css.basket__product_subtitle}>
            Size: {productInBasket.orderProduct.size}
          </p>
          <p className={css.basket__product_subtitle}>
            Color: {productInBasket.orderProduct.color}
          </p>
          <div className="flex justify-between items-center">
            <CountProduct
              productId={productInBasket.orderProduct.id}
              productCount={productInBasket.orderProduct.count}
            />
            <p className={css.basket__product_price}>
              {productInBasket.orderProduct.price}$
            </p>
          </div>
        </div>
      </div>
    );
  }
);
export default CardInBasket;
