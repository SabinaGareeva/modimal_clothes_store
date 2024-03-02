import React, { useState, useEffect } from "react";

import Cards from "../components/cards/Cards";
import Footer from "../components/layout/Footer/Footer";

const Wishlist = () => {
  // получение данных с сервера с whishlist
  const [whishlistProducts, setWhishListProducts] = useState([]);
  useEffect(() => {
    const fetchDataWishlist = async () => {
      try {
        const response = await fetch("http://localhost:3000/wishlist");
        const result = await response.json();
        setWhishListProducts(result);
      } catch {
        console.log("Error", error);
      }
    };
    fetchDataWishlist();
  }, []);

  return (
    <section className="collection">
      <div className="mb-5">
        <div className="container">
          <h2>My Wish List</h2>
          <div
            className="grid  grid-cols-3 gap-y-16 gap-x-24"
            id="container-cards"
          >
            {whishlistProducts.map((element, index) => (
              <Cards
                prodactElement={{ element, index }}
                setWhishListProducts={setWhishListProducts}
                key={index}
              ></Cards>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Wishlist;
