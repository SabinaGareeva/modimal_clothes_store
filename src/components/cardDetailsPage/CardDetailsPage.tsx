import React, { useState, useEffect } from "react";
import Image from "next/image";
import css from "./CardDetailsPage.module.css";
import MainButton from "../UI/Buttons/MainButton";
import WishlistIcon from "../Icons/WishlistIcon";
import Select from "../UI/Select";
import { Product } from "../../types/types";
import { fetchUser } from "../../../src/store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductInBasket,
  addProductInWishList,
} from "../../../src/store/ProductSlice";
interface CardDetailsPageProps {
  product: Product;
}

const CardDetailsPage: React.FC<CardDetailsPageProps> = ({ product }) => {
  // Состояние для выбранного размера, по умолчанию xs
  const [selectedSize, setSelectedSize] = useState("XS / US (0-4)");
  // Состояние для проверки присутствия товара в wishlist
  const [productInWishlist, setProductInWishlist] = useState(false);
  const { id, name, description, price, imgPath, category, size, fabric } =
    product;
  // Получение всех товаров от сервера из whishlist и отметки их красным сердечком (определение какие товары уже присутствуют в вишлисте)
  // @ts-ignore
  const wishlistProducts = useSelector((state) => state.user.user.wishlist);

  useEffect(() => {
    const fetchProductInWhishlist = async () => {
      const isInWhishlist = wishlistProducts?.some(
        (product: Product) => product.id === id
      );
      setProductInWishlist(isInWhishlist);
    };
    fetchProductInWhishlist();
  }, [id, wishlistProducts]);
  const dispatch = useDispatch();
  if (!product) {
    return <h3>No product data available</h3>;
  }
  // Добавляю товар в корзину и обновляю массив orderProducts
  const sendProductToServer = async () => {
    // @ts-ignore
    await dispatch(
      // @ts-ignore
      addProductInBasket({
        ...product,
        size: selectedSize,
        count: 1,
      })
    );
    // @ts-ignore
    dispatch(fetchUser());
  };

  // Функция для отправки товара на сервер в массив wishlist
  const sendProductToWishlist = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault(); // Предотвращаем переход по ссылке т.к кнопка обернута в ссылку
    // если товар нет в массиве wishlist то добавляем его, иначе удаляем
    if (!productInWishlist) {
      await dispatch(
        // @ts-ignore
        addProductInWishList(product)
      );
      // @ts-ignore
      dispatch(fetchUser());
    } else {
      await dispatch(
        // @ts-ignore
        deleteProductInWishlist(id)
      );
      // @ts-ignore
      dispatch(fetchUser());
    }
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
            <p className={css.product__characteristic}>Fabric: {fabric[0].toUpperCase()}{fabric.slice(1)}</p>
            <p className={css.product__characteristic}>Price: {price}$</p>
          </div>
          <Select options={size} setSelectedSize={setSelectedSize}></Select>
          <MainButton onClick={sendProductToServer}>Add To Card</MainButton>
          <button className="flex items-center" onClick={sendProductToWishlist}>
            <WishlistIcon productInWishlist={productInWishlist} />
            <p className="text-[1.4rem] ml-2">Add whishlist</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardDetailsPage;
