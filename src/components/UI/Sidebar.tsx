import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Sidebar.module.scss";
import CardInBasket from "../cards/CardInBasket";
import CloseButton from "./Buttons/CloseButton";
import MainLink from "./MainLink";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/ProductSlice";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUser());
  }, [dispatch]);
  // @ts-ignore
  const orderProducts = useSelector((state) => state.user.user.orders);

  const renderOrderProducts =
    orderProducts?.length > 0 &&
    // @ts-ignore
    orderProducts.map((orderProduct, index) => (
      <CardInBasket productInBasket={{ orderProduct, index }} key={index} />
    ));

  //Закрытие Sidebar
  const handleClose = (): void => {
    onClose();
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      // Проверяем, был ли клик вне модального окна
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
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
      <div className={css.sidebar}>
        <div ref={modalRef} className={css.sidebar__container}>
          <CloseButton width="14" height="14" onClick={handleClose} />
          {renderOrderProducts ? (
            <div>
              <h3 className={css.sidebar__container_title}>Your Cart</h3>
              {renderOrderProducts}
              <MainLink href="/OrderPages/YourCard" onClick={handleClose}>
                Check out
              </MainLink>
            </div>
          ) : (
            <div className={css.sidebar__container_titles}>
              <h2 className={css.sidebar__container_title}>
                Your shopping bag is empty
              </h2>
              <p>
                Discover modimal and add products to your Bag
              </p>
              <MainLink href="/Collection" onClick={handleClose}>
                Collection
              </MainLink>
            </div>
          )}
        </div>
      </div>,
      document.body
    )
  );
};
export default Sidebar;
