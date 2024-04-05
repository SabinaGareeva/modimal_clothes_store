import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainTitle from "../../UI/MainTitle";
import Cards from "../../cards/Cards";
import css from "./ContentMainPage.module.css";
import axios from "axios";


const ContentMainPage = () => {
  // Получение всех товаров для отображения на странице
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setDataProducts(response.data);
      } catch {
        console.log("Error loading products");
      }
    };
    fetchDataProducts();
  }, []);
  return (
    <>
      <section className="mb-24">
        <div className="container">
          <MainTitle
            tagTitle="h2"
            fontSize="text-[3.2rem]"
            fontWeight="font-semibold"
            marginBottom="2.4rem"
          >
            Best Sellers
          </MainTitle>
          <div className="flex justify-between">
            {dataProducts.slice(0, 3).map((element, index) => (
              <Cards productElement={{ element, index }} key={index}></Cards>
            ))}
          </div>
        </div>
      </section>
      {/* Секция коллекция */}
      <section className="container collection">
        <MainTitle
          tagTitle="h2"
          fontSize="text-[3.2rem]"
          fontWeight="font-semibold"
          marginBottom="2.4rem"
        >
          Collection
        </MainTitle>
        {/* grid-rows-10 */}
        <div className="grid grid-cols-2 gap-x-24 gap-y-16 ">
          <div className="relative row-start-1  row-span-4">
            <Image
              src="/main-1.png"
              width={400}
              height={553}
              alt=""
              className={`${css.main__collection_img} ${css.img__blouses}`}
            ></Image>
            <Link
              href="/Collection/BlousesAndTop"
              className={css.collection__main_subtitle}
            >
              Blouses
            </Link>
          </div>
          <div className="relative row-start-1  row-span-5">
            <Image
              src="/main-2.png"
              width={700}
              height={959}
              alt=""
              className={`${css.main__collection_img} ${css.img__pants}`}
            ></Image>
            <Link href="/" className={css.collection__main_subtitle}>
              Pants
            </Link>
          </div>
          <div className="relative row-start-5  row-span-6">
            <Image
              src="/main-3.png"
              width={700}
              height={959}
              alt=""
              className={`${css.main__collection_img} ${css.img__dresses}`}
            ></Image>
            <Link
              href="/Collection/DressesAndJumpsuits"
              className={css.collection__main_subtitle}
            >
              Dresses
            </Link>
          </div>
          <div className="relative row-start-6  row-span-5">
            <Image
              src="/main-4.jpg"
              width={1349}
              height={1687}
              alt=""
              className={`${css.main__collection_img} ${css.img__outwear}`}
            ></Image>
            <Link
              href="/Collection/OutwearAndJackets"
              className={css.collection__main_subtitle}
            >
              Outwear
            </Link>
          </div>
        </div>
      </section>
      <section className="container">
        <MainTitle
          tagTitle="h2"
          fontSize="text-[3.2rem]"
          fontWeight="font-semibold"
          marginBottom="2.4rem"
        >
          Modiweek
        </MainTitle>
      </section>
    </>
  );
};
export default ContentMainPage;
