import React from "react";
import Image from "next/image";
import CountProduct from "../UI/CountProduct";
import CloseButton from "../UI/Buttons/CloseButton";
import css from "./CardsInBasket.module.css";
import { OrderProduct } from "@/types/types";
import { useDispatch } from "react-redux";
import { deleteProductInBasket } from "../store/ProductSlice";
import { fetchUser } from "../store/ProductSlice";

interface ProductInBasketProps {
  productInBasket: {
    orderProduct: OrderProduct;
    index: number;
  };
}

const CardInBasket: React.FC<ProductInBasketProps> =

  ({ productInBasket }) => {
  
    const dispatch = useDispatch();
    // функция удаления товаров из корзины
    const deleteProductBasket= async (productId: number) => {

      // @ts-ignore
     await dispatch(deleteProductInBasket(productId))
       // @ts-ignore
      dispatch(fetchUser());
    }
  

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
  };

export default CardInBasket;
