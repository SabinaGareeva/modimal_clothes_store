import React from "react";
import Image from "next/image";
import CountProduct from "../UI/CountProduct";
import CloseButton from "../UI/CloseButton";
const CardsInBasket = ({ prodactInBasket}) => {
  return (
    <div key={`orderProduct__${prodactInBasket.index}`} className="flex mb-3">
                <Image
                  src={prodactInBasket.orderProduct.imgPath[0]}
                  alt={prodactInBasket.orderProduct.name}
                  width={130}
                  height={150}
                  objectFit="cover"
                />
                <div className="p-5">
                  <h3>{prodactInBasket.orderProduct.name}</h3>

                  {/* <CardsInBasket width='10' height='10' /> */}
                  <p>Size: </p>
                  <p>Color:{prodactInBasket.orderProduct.color}</p>
                  <div className="flex justify-between items-center">
                    <CountProduct />
                    <p>{prodactInBasket.orderProduct.price}$</p>
                  </div>
                </div>
              </div>
  );
};
export default CardsInBasket;
