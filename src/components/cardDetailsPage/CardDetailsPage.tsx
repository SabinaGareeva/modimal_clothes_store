import React, { useState } from "react";
import Image from "next/image";
import css from "./CardDetailsPage.module.css";
import MainButton from "../UI/Buttons/MainButton";
import WishlistIcon from "../Icons/WishlistIcon";
import Select from "../UI/Select";
import { Product } from "../../types/types";
import { fetchUser } from "../../components/store/ProductSlice";
import { useDispatch } from "react-redux";
import { addProductInBasket } from "../../components/store/ProductSlice";
interface CardDetailsPageProps {
  product: Product;
}

const CardDetailsPage: React.FC<CardDetailsPageProps> = ({ product }) => {
  // Состояние для выбранного размера, по умолчанию xs
  const [selectedSize, setSelectedSize] = useState("XS / US (0-4)");
  const { id, name, description, price, imgPath, category, size, fabric } =
    product;
  const dispatch = useDispatch();
  if (!product) {
    return <h3>No product data available</h3>;
  }
  // @ts-ignore

  // Добавляю товар в корзину и обновляю массив orderProducts
  const sendProductToServer =async () => {
    // @ts-ignore
    await dispatch(addProductInBasket({
        ...product,
        size: selectedSize,
       count: 1,
       }))
       // @ts-ignore
      dispatch(fetchUser())
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

export default CardDetailsPage;
