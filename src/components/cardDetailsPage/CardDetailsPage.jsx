import React from "react";
import Image from "next/image";
import Footer from "../layout/Footer/Footer";
import css from "./CardDetailsPage.module.css";
{
  /* Отображение детальной информации о карточке */
}
const CardDetailsPage = ({ product }) => {
  if (!product) {
    return <h3>No product data available</h3>;
  }

  const { id, name, description, price, imgPath, category, size, fabric } =
    product;

  return (
    <>
      <div className="container">
        <div className="mt-5 flex mb-9">
          <div className="flex w-7/12 flex-wrap">
            {imgPath.map((item, index) => (
              <Image
                key={`detail-picture-${id}${index}`}
                alt={name}
                src={item}
                width={350}
                height={438}
                className="card-image"
              ></Image>
            ))}
          </div>
          <div className="pl-3 pt-9">
            <h2 className={css.product__name}>Name product: {name}</h2>
            <p className={css.product__characteristic}>
              Description: {description}
            </p>
            <p className={css.product__characteristic}>Category: {category}</p>
            <p className={css.product__characteristic}>Fabric: {fabric}</p>
            <p className={css.product__characteristic}>Price: {price}$</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CardDetailsPage;
