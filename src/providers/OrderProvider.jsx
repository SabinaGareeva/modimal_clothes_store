import React, { createContext, useContext, useEffect, useState } from "react";
// Не нужен, т. к. заменила на State из Mobx
const OrderContext = createContext();

export const useOrderContext = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orderProducts, setOrderProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/orders");
        const data = await response.json();
        setOrderProducts(data);
      } catch {
        console.log("Ошибка получение данных.");
      }
    };
    fetchData();
  }, []);

  const updateOrderProducts = (updatedProducts) => {
    setOrderProducts(updatedProducts);
  };

  return (
    <OrderContext.Provider value={{ orderProducts, updateOrderProducts }}>
      {children}
    </OrderContext.Provider>
  );
};
