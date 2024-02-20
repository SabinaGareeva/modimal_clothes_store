import { React, useState } from "react";
import Image from "next/image";
import Footer from "../layout/Footer/Footer";
import css from "./CardDetailsPage.module.css";
import MainButton from "../UI/MainButton";
import WishlistButton from "../UI/WishlistButton";
import Select from "../UI/Select";
import { useOrderContext } from "../../providers/OrderProvider";

const CardDetailsPage = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("XS / US (0-4)");

  const { orderProducts, updateOrderProducts } = useOrderContext();

  if (!product) {
    return <h3>No product data available</h3>;
  }
  const { id, name, description, price, imgPath, category, size, fabric } =
    product;

  const sendProductToServer = async () => {
    try {
      const productToSend = { ...product, size: selectedSize };
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productToSend),
      });
      if (response.ok) {
        const updatedProducts = [...orderProducts, productToSend];
        updateOrderProducts(updatedProducts);

        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

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
            <Select
              options={size}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            ></Select>
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
