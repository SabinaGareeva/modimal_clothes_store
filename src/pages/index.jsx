import Head from "next/head";
import React from "react";
import Footer from "../components/layout/Footer/Footer";
import SliderMain from "../components/slider/SliderMain";
import Image from "next/image";
// import DropdownCollection from "../components/dropdown-menus/DropdownCollection";

import Cards from "../components/cards/Cards";
import Link from "next/link";
const response = await fetch("http://localhost:3000/products");
const data = await response.json();
/* Домашнаяя страница */
const Home = () => (
  <>
    <Head>
      <title>My first template</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <SliderMain></SliderMain>
      <section className="mb-24">
        <div className="container">
          <h2 className="main-title">Best Sellers</h2>
          <div className="flex justify-between">
            {data.slice(0, 3).map((element, index) => (
              <Cards prodactElement={{ element, index }} key={index}></Cards>
            ))}
          </div>
        </div>
      </section>
      {/* Секция коллекция */}
      <section className="container collection">
        <h2 className="main-title">Collection</h2>
        <div className="grid grid-cols-2 gap-x-24 gap-y-16 grid-rows-10">
          <div  className="relative row-start-1  row-span-4">
            <Image
              src="/main-1.png"
              width={400}
              height={553}
              alt=""
              className="main-collection-img img-blouses"
            ></Image>
            <Link href="/" className="collection-main-subtitle">Blouses</Link>
          </div>
          <div className="relative row-start-1  row-span-5">
            <Image
              src="/main-2.png"
              width={700}
              height={959}
              alt=""
              className="main-collection-img img-pants"
            ></Image>
            <Link href="/" className="collection-main-subtitle">Pants</Link>
          </div>
          <div  className="relative row-start-5  row-span-5">
            <Image
              src="/main-3.png"
              width={700}
              height={959}
              alt=""
              className="main-collection-img img-dresses"
            ></Image>
            <Link href="/" className="collection-main-subtitle">Dresses</Link>
          </div>
          <div  className="relative row-start-6  row-span-4">
            <Image
              src="/main-4.jpg"
              width={1349}
              height={1687}
              alt=""
              className="main-collection-img img-outwear"
            ></Image>
            <Link href="/" className="collection-main-subtitle">Outwear</Link>
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="main-title">Modiweek</h2>
      </section>
      <section>
        <div className="relative">
          <Image
            src="/main-sustainability.png"
            width={842}
            height={564}
            alt="Sustainability"
            className="w-full h-[52.6rem] object-cover"
          ></Image>
          <p className="stylish-sustainability">
            Stylish Sustainability In Clothing Promotes Eco-<br></br>Friendly
            Choices For A Greater Future
          </p>
          <Link href="/" className="sustainability-main-subtitle">
            Sustainability
          </Link>
        </div>
      </section>
    </main>

    <Footer></Footer>
  </>
);

export default Home;
