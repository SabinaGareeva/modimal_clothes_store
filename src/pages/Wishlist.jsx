import React, { useState, useEffect } from "react";
import MainTitle from "../components/UI/MainTitle";
import Cards from "../components/cards/Cards";
import MainLayout from "../components/layout/MainLayout/MainLayout";

const Wishlist = () => {
  // получение данных с сервера с whishlist
  const [wishlistProducts, setWishListProducts] = useState([]);
  useEffect(() => {
    const fetchDataWishlist = async () => {
      try {
        const response = await fetch("http://localhost:3000/wishlist");
        const result = await response.json();
        setWishListProducts(result);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchDataWishlist();
  }, []);

  return (
    <MainLayout>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <MainTitle
            tagTitle="h3"
            fontSize={2}
            fontWeight="font-bold"
            marginBottom="1.6rem"
          >
            My Wish List
          </MainTitle>

          <p className="text-[1.6rem]">
            {wishlistProducts.length}
            {wishlistProducts.length === 0 || wishlistProducts.length === 1
              ? "Item"
              : "Items"}
          </p>
        </div>
      </div>
      <div className="grid  grid-cols-3 gap-y-16 gap-x-24" id="container-cards">
        {wishlistProducts.map((element, index) => (
          <Cards
            productElement={{ element, index }}
            setWhishListProducts={setWishListProducts}
            key={index}
          ></Cards>
        ))}
      </div>
    </MainLayout>
  );
};
export default Wishlist;
