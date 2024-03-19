import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import css from "./Cards.module.css";
import WishlistIcon from "../icons/WishlistIcon";
const Cards = ({ productElement, setWhishListProducts }) => {
  const [productInWishlist, setProductInWishlist] = useState(false);
  // Получение всех товаров от сервера из whishlist и отметки их красным сердечком (определение какие товары уже присутствуют в вишлисте)
  useEffect(() => {
    const fetchProductInWhishlist = async () => {
      try {
        const response = await fetch("http://localhost:3000/wishlist");
        const whishlistProducts = await response.json();
        const isInWhishlist = whishlistProducts.some(
          (product) => product.id === productElement.element.id
        );
        setProductInWishlist(isInWhishlist);
      } catch (error) {
        console.error("Error fetching wishlist products:", error);
      }
    };
    fetchProductInWhishlist();
  }, [productElement.element.id]);

  const sendProductToWishlist = async (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке т.к кнопка обернута в ссылку
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
      } catch {
        console.error("Error sending data:", error);
      }
    } else {
      const response = await fetch(
        `http://localhost:3000/wishlist/${productElement.element.id}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        setProductInWishlist(false);
        setWhishListProducts((prevProducts) =>
          prevProducts.filter(
            (product) => product.id !== productElement.element.id
          )
        );
        console.log("Successfully deleted in wishlist");
      } else {
        console.error("Error deleting in wishlist");
      }
    }
  };
  return (
    <Link href={`Collection/${productElement.element.id}`}>
      <div className="flex-col relative" id={productElement.element.id}>
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
