import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import css from "./Cards.module.css";
import WishlistIcon from "../Icons/WishlistIcon";
import { Product } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductInWishList,
  deleteProductInWishlist,
  fetchUser,
} from "@/store/ProductSlice";

interface productElementProps {
  element: Product;
  index: number;
}
interface CardProps {
  productElement: productElementProps;
}

const Cards: React.FC<CardProps> = ({ productElement }) => {
  const dispatch = useDispatch();
  // Состояние для проверки присутствия товара в wishlist
  const [productInWishlist, setProductInWishlist] = useState(false);
  // Получение всех товаров от сервера из whishlist и отметки их красным сердечком (определение какие товары уже присутствуют в вишлисте)
  // @ts-ignore
  const wishlistProducts = useSelector((state) => state.user.user.wishlist);

  useEffect(() => {
    const fetchProductInWhishlist = async () => {
      const isInWhishlist = wishlistProducts?.some(
        (product: Product) => product.id === productElement.element.id
      );
      setProductInWishlist(isInWhishlist);
    };
    fetchProductInWhishlist();
  }, [productElement.element.id, wishlistProducts]);
  // Функция для отправки товара на сервер в массив wishlist
  const sendProductToWishlist = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault(); // Предотвращаем переход по ссылке т.к кнопка обернута в ссылку
    // если товар нет в массиве wishlist то добавляем его, иначе удаляем
    if (!productInWishlist) {
      await dispatch(
        // @ts-ignore
        addProductInWishList(productElement.element)
      );
      // @ts-ignore
      dispatch(fetchUser());
    } else {
      await dispatch(
        // @ts-ignore
        deleteProductInWishlist(productElement.element.id)
      );
      // @ts-ignore
      dispatch(fetchUser());
    }
  };

  return (
    <Link href={`Collection/${productElement.element.id}`}>
      <div className="flex-col relative" id={`${productElement.element.id}`}>
        <button className={css.wishlist__heart} onClick={sendProductToWishlist}>
          <WishlistIcon productInWishlist={productInWishlist} />
        </button>
        <Image
          alt={productElement.element.name}
          src={productElement.element.imgPath[0]}
          width={392}
          height={438}
          className={css.card__image}
        ></Image>
        <h2 className={css.card__title}>{productElement.element.name}</h2>
        <div className="flex justify-between items-center">
          <p className={css.card__subtitle}>
            {productElement.element.description}
          </p>
          <p className={css.card__price}>${productElement.element.price}</p>
        </div>
      </div>
    </Link>
  );
};
export default Cards;
