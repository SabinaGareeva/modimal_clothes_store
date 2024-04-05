import React from "react";
import MainTitle from "../components/UI/MainTitle";
import Cards from "../components/cards/Cards";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import { useSelector } from "react-redux";

const Wishlist = () => {
  // получение продуктов в  whishlist авторизованного пользователя из store

// @ts-ignore
  const wishlistProducts = useSelector((state) => state.user.user.wishlist);

  return (
    <MainLayout>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <MainTitle
            tagTitle="h3"
            fontSize="text-[2rem]"
            fontWeight="font-bold"
            marginBottom="1.6rem"
          >
            My Wish List
          </MainTitle>

          <p className="text-[1.6rem]">
            {wishlistProducts?.length}
            {wishlistProducts?.length === 0 || wishlistProducts?.length === 1
              ? " Item"
              : " Items"}
          </p>
        </div>
      </div>
      <div className="grid  grid-cols-3 gap-y-16 gap-x-24" id="container-cards">
        {/* @ts-ignore */}
        {wishlistProducts?.map((element, index) => (
          <Cards productElement={{ element, index }} key={index}></Cards>
        ))}
      </div>
    </MainLayout>
  );
};
export default Wishlist;
