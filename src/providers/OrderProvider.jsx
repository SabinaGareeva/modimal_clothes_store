import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrderContext = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orderProducts, setOrderProducts] = useState([]);

  const updateOrderProducts = (updatedProducts) => {
    setOrderProducts(updatedProducts);
  };

  return (
    <OrderContext.Provider value={{ orderProducts, updateOrderProducts }}>
      {children}
    </OrderContext.Provider>
  );
};