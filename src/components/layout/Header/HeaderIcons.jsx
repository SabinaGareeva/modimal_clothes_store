import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import css from "./HeaderIcons.module.css";
import Sidebar from "../../UI/Sidebar";
import WishlistIcon from "../../icons/WishlistIcon";
import OrderProductsStore from "../../store/OrderProductsStore";
import { observer } from "mobx-react-lite";
const HeaderIcons = observer(() => {
  const router = useRouter();
  console.log(router.pathname);
  // Показ модального окна при клике на корзину
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={css.header__icons}>
      <Link href="/SearchPage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={
            router.pathname === "/SearchPage" ? "bg-[#CBCBCB]" : "#FFFFFF"
          }
        >
          <path
            d="M15.7549 14.2539H14.9649L14.6849 13.9839C15.6649 12.8439 16.2549 11.3639 16.2549 9.75391C16.2549 6.16391 13.3449 3.25391 9.75488 3.25391C6.16488 3.25391 3.25488 6.16391 3.25488 9.75391C3.25488 13.3439 6.16488 16.2539 9.75488 16.2539C11.3649 16.2539 12.8449 15.6639 13.9849 14.6839L14.2549 14.9639V15.7539L19.2549 20.7439L20.7449 19.2539L15.7549 14.2539ZM9.75488 14.2539C7.26488 14.2539 5.25488 12.2439 5.25488 9.75391C5.25488 7.26391 7.26488 5.25391 9.75488 5.25391C12.2449 5.25391 14.2549 7.26391 14.2549 9.75391C14.2549 12.2439 12.2449 14.2539 9.75488 14.2539Z"
            fill="#0C0C0C"
          />
        </svg>
      </Link>
      <Link href="/Registration">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={
            router.pathname === "/Registration" ? "bg-[#CBCBCB]" : "#FFFFFF"
          }
        >
          <path
            d="M18.39 15.06C16.71 14.2 14.53 13.5 12 13.5C9.47 13.5 7.29 14.2 5.61 15.06C4.61 15.57 4 16.6 4 17.72V20.5H20V17.72C20 16.6 19.39 15.57 18.39 15.06ZM18 18.5H6V17.72C6 17.34 6.2 17 6.52 16.84C7.71 16.23 9.63 15.5 12 15.5C14.37 15.5 16.29 16.23 17.48 16.84C17.8 17 18 17.34 18 17.72V18.5Z"
            fill="#202020"
          />
          <path
            d="M12 12.5C14.21 12.5 16 10.71 16 8.5C16 7.13 16 5 16 5C16 4.17 15.33 3.5 14.5 3.5C13.98 3.5 13.52 3.77 13.25 4.17C12.98 3.77 12.52 3.5 12 3.5C11.48 3.5 11.02 3.77 10.75 4.17C10.48 3.77 10.02 3.5 9.5 3.5C8.67 3.5 8 4.17 8 5C8 5 8 7.12 8 8.5C8 10.71 9.79 12.5 12 12.5ZM10 6H14V8.5C14 9.6 13.1 10.5 12 10.5C10.9 10.5 10 9.6 10 8.5V6Z"
            fill="#202020"
          />
        </svg>
      </Link>
      <Link href="/Wishlist">
        <WishlistIcon router={router} />
      </Link>
      <button onClick={() => setShowModal(true)} className={css.basket__button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
            fill="#202020"
          />
        </svg>
        <span className={css.basket__count}>
          {OrderProductsStore.products.length === 0
            ? null
            : OrderProductsStore.products.length}
        </span>
      </button>
      <Sidebar isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
});
export default HeaderIcons;
