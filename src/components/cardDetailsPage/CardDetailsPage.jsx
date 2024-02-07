import React from "react";
import Image from "next/image";
import Footer from "../layout/Footer/Footer";
import css from "./CardDetailsPage.module.css";
import MainButton from "../UI/MainButton";
import WishlistButton from "../UI/WishlistButton";
import Select from "../UI/Select";
{
  /* Отображение детальной информации о карточке */
}
// export const getStaticProps = async () => {
//   const response = await fetch("http://localhost:3000/orders");
//   try {
//     const data = await response.json();
//     return {
//       props: { orderProdacts: data},
//     };

//   } catch (error) {
//     console.log(error);
//   }
// };

const CardDetailsPage = ({ product }) => {
  if (!product) {
    return <h3>No product data available</h3>;
  }
  const sendProductToServer = async () => {
    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const { id, name, description, price, imgPath, category, size, fabric } =
    product;


  return (
    <>
      <div className="container">
        <div className="mt-5 flex mb-9">
          <div className="flex w-7/12 flex-wrap gap-1">
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
            <div className="mb-4">
              <h2 className={css.product__name}>Name product: {name}</h2>
              <p className={css.product__characteristic}>
                Description: {description}
              </p>
              <p className={css.product__characteristic}>
                Category: {category}
              </p>
              <p className={css.product__characteristic}>Fabric: {fabric}</p>
              <p className={css.product__characteristic}>Price: {price}$</p>
            </div>
            <Select options={size}></Select>
            <MainButton onClick={sendProductToServer}>Add To Card</MainButton>
            <WishlistButton>Add To Whish List</WishlistButton>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CardDetailsPage;
