import React, { useState, useEffect } from "react";
import MainTitle from "../components/UI/MainTitle";
import Cards from "../components/cards/Cards";

import PageLayout from "../components/layout/Product/PageLayout";


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

    // <section className="collection">
    //   <div className="mb-5">
    //     <div className="container">
    <PageLayout>
          <div className="flex justify-center">
            <div className="flex flex-col">
   
              <MainTitle
                tagTitle="h3"
                fontSize={2}
                fontWeight="font-bold"
                marginBottom="1.6rem"
                // className="text-[2rem]"
              >
                My Wish List
              </MainTitle>

              <p className="text-[1.6rem]">
                {wishlistProducts.length}{" "}
                {wishlistProducts.length === 0 || wishlistProducts.length === 1
                  ? "Item"
                  : "Items"}
              </p>
            </div>
          </div>
          <div
            className="grid  grid-cols-3 gap-y-16 gap-x-24"
            id="container-cards"
          >
            {wishlistProducts.map((element, index) => (
              <Cards
                prodactElement={{ element, index }}
                setWhishListProducts={setWishListProducts}
                key={index}
              ></Cards>
            ))}
          </div>
          </PageLayout>
          
        // </div>
    //   </div>
    //   <Footer></Footer>
    // </section>
  );
};
export default Wishlist;
