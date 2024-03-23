import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import css from "./Cards.module.css";
import WishlistIcon from "../Icons/WishlistIcon";
import { Product } from "@/types/types";

interface productElementProps {
  element: Product;
  index: number;
}
interface CardProps {
  productElement: productElementProps;
  setWhishListProducts?: React.Dispatch<React.SetStateAction<Product[]|[]>>
}

const Cards: React.FC<CardProps> = ({
  productElement,
  setWhishListProducts,
}) => {
  // Состояние для проверки присутствия товара в wishlist 
  const [productInWishlist, setProductInWishlist] = useState(false);
  // Получение всех товаров от сервера из whishlist и отметки их красным сердечком (определение какие товары уже присутствуют в вишлисте)
  useEffect(() => {
    const fetchProductInWhishlist = async () => {
      try {
        const response = await fetch("http://localhost:3000/wishlist");
        const whishlistProducts = await response.json();
        const isInWhishlist = whishlistProducts.some(
          (product: Product) => product.id === productElement.element.id
        );
        setProductInWishlist(isInWhishlist);
      } catch (error) {
        console.error("Error fetching wishlist products:", error);
      }
    };
    fetchProductInWhishlist();
  }, [productElement.element.id]);
// Функция для отправки товара на сервер в массив wishlist
  const sendProductToWishlist = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault(); // Предотвращаем переход по ссылке т.к кнопка обернута в ссылку
    // если товар нет в массиве wishlist то добавляем его, иначе удаляем
    if (!productInWishlist) {
      try {
        const response = await fetch("http://localhost:3000/wishlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productElement.element),
        });
        if (response.ok) {
          console.log("Data sent successfully");
          setProductInWishlist(true);
        } else {
          console.error("Failed to send data");
        }
      } catch (error) {
        console.error("Error sending data:", error);
      }
    } else {
      deleteProductToWishlist()
    }
  };
  const  deleteProductToWishlist=async()=>{
    const response = await fetch(
      `http://localhost:3000/wishlist/${productElement.element.id}`,
      { method: "DELETE" }
    );
    if (response.ok) {
      setProductInWishlist(false);
     
        setWhishListProducts!((prevProducts: Product[]) =>
          prevProducts.filter(
            (product: Product) => product.id !== productElement.element.id
          )
        );
        console.log("Successfully deleted in wishlist");
      
    } else {
      console.error("Error deleting in wishlist");
    }
  }
  return (
    <Link href={`Collection/${productElement.element.id}`}>
      <div className="flex-col relative" 
      id={`${productElement.element.id}`}
      >
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
