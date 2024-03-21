import React, { useState } from "react";
import Image from "next/image";
import css from "./CardDetailsPage.module.css";
import MainButton from "../UI/Buttons/MainButton";
import WishlistIcon from "../icons/WishlistIcon";
import Select from "../UI/Select";
import OrderProductsStore from "../store/OrderProductsStore";
import { observer } from "mobx-react-lite";
import { Product } from "../../types/types";
interface CardDetailsPageProps {
  product: Product;
}

const CardDetailsPage: React.FC<CardDetailsPageProps> = ({ product }) => {
  // Состояние для выбранного размера, по умолчанию xs
  const [selectedSize, setSelectedSize] = useState("XS / US (0-4)");
  const { id, name, description, price, imgPath, category, size, fabric } =
    product;

  if (!product) {
    return <h3>No product data available</h3>;
  }

  // Добавляю товар в корзину и обновляю массив orderProducts
  const sendProductToServer = () => {
    OrderProductsStore.addOrderProduct({
      ...product,
      size: selectedSize,
      count: 1,
    });
  };

  return (
    <>
      <div className="mt-5 flex mb-9">
        <div className="flex w-7/12 flex-wrap gap-1">
          {imgPath.map((item: string, index: number) => (
            <Image
              key={`detail-picture-${id}${index}`}
              alt={name}
              src={item}
              width={350}
              height={438}
              className="card-image"
            ></Image>
          ))}
        </div>
        <div className="pl-3 pt-9">
          <div className="mb-4">
            <h2 className={css.product__name}>Name product: {name}</h2>
            <p className={css.product__characteristic}>
              Description: {description}
            </p>
            <p className={css.product__characteristic}>Category: {category}</p>
            <p className={css.product__characteristic}>Fabric: {fabric}</p>
            <p className={css.product__characteristic}>Price: {price}$</p>
          </div>
          <Select options={size} setSelectedSize={setSelectedSize}></Select>
          <MainButton onClick={sendProductToServer}>Add To Card</MainButton>
          <button>
            <WishlistIcon />
            <p>Add whishlist</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default observer(CardDetailsPage);
