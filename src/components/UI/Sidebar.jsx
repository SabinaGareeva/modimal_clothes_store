import { React, useRef, useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import css from "./Sidebar.module.css";
import CardsInBasket from "../cards/CardsInBasket";
import CloseButton from "./CloseButton";
const Sidebar = ({ isOpen, onClose }) => {
  const [orderProducts, setorderProducts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/orders");
      const result = await response.json();
      setorderProducts(result);
    };
    fetchData();
  }, [orderProducts]);

  const handleClose = () => onClose();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Проверяем, был ли клик вне модального окна
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Закрываем модалку
        onClose();
      }
    };

    // Если модально окно открыто и код выполняется на клиенте
    if (isOpen && typeof window !== "undefined") {
      // Добавляем слушатель события mousedown для закрытия модалки по клику вне
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // Очищаем слушатель события при размонтировании компонента или при закрытии
    return () => {
      // Если  модальное окно открыто и код выполняется на клиенте
      if (isOpen && typeof window !== "undefined") {
        // Добавляем слушатель события mousedown для закрытия модалки по клику вне
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    };
  }, [isOpen, onClose]);
  return (
    isOpen &&
    createPortal(
      <div className="fixed top-0 left-0 w-full h-full flex bg-opacity-50 bg-black">
        <div
          ref={modalRef}
          className="modal bg-white p-5  shadow-md w-[45rem] fixed top-0 right-0 bottom-0"
        >
          <CloseButton width="14" height="14" onClick={handleClose}/>
          <h3 className={css.basket__title}>Your Cart</h3>
          {orderProducts.length ? (
            orderProducts.map((orderProduct, index) => (
              <CardsInBasket
                prodactInBasket={{ orderProduct, index }}
                key={index}
              />
            ))
          ) : (
            <div className="flex flex-col items-center">
              <h2 className={css.basket__title}>Your shopping bag is empty</h2>
              <p className={css.basket__empty_subtitle}>
                Discover modimal and add products to your Bag
              </p>
              <Link
                href="/Collection"
                className={css.basket__empty_link}
                onClick={handleClose}
              >
                Collection
              </Link>
            </div>
          )}
        </div>
      </div>,
      document.body
    )
  );
};
export default Sidebar;
