import { React, useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import css from "./Sidebar.module.css";
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
          <button onClick={handleClose}>
            <svg
              width="14.000000"
              height="14.000000"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                id="Vector"
                d="M14 1.41016L12.5898 0L7 5.58984L1.41016 0L0 1.41016L5.58984 7L0 12.5898L1.41016 14L7 8.41016L12.5898 14L14 12.5898L8.41016 7L14 1.41016Z"
                fill="#202020"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </button>
          {orderProducts.length ? (
            orderProducts.map((orderProduct, index) => (
              <div key={`orderProduct__${index}`} className="flex mb-3">
                <Image
                  src={orderProduct.imgPath[0]}
                  alt={orderProduct.name}
                  width={130}
                  height={150}
                  objectFit="cover"
                />
                <div className="p-5">
                  <h3>{orderProduct.name}</h3>
                  <p>Size: </p>
                  <p>Color:{orderProduct.color}</p>

                  <p>{orderProduct.price}$</p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center">
              <h2 className={css.basket__empty_title}>
                Your shopping bag is empty
              </h2>
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
