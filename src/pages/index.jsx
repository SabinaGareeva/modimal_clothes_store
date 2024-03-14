
import React from "react";
import Footer from "../components/layout/Footer/Footer";
import SliderMain from "../components/slider/SliderMain";
import Image from "next/image";


import Cards from "../components/cards/Cards";
import Link from "next/link";
import MainTitle from "../components/UI/MainTitle";
import DefaultLayout from "../components/layout/Default/DefaultLayout";
import MainLayout from "../components/layout/Default/MainLayout";
// const response = await fetch("http://localhost:3000/products");
// const data = await response.json();
/* Домашнаяя страница */
const Home = () => (
  // <>
  
  //   <main>
  //     <SliderMain></SliderMain>
  //     <section className="mb-24">
  //       <div className="container">
  //         <MainTitle tagTitle='h2' fontSize='3.2rem' fontWeight='font-semibold' marginBottom='2.4rem'>Best Sellers</MainTitle>
  //         {/* <h2 className="main-title">Best Sellers</h2> */}
  //         <div className="flex justify-between">
  //           {data.slice(0, 3).map((element, index) => (
  //             <Cards prodactElement={{ element, index }} key={index}></Cards>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //     {/* Секция коллекция */}
  //     <section className="container collection">
  //     <MainTitle tagTitle='h2' fontSize='3.2rem' fontWeight='font-semibold' marginBottom='2.4rem'>Collection</MainTitle>
  //       {/* <h2 className="main-title">Collection</h2> */}
  //       <div className="grid grid-cols-2 gap-x-24 gap-y-16 grid-rows-10">
  //         <div  className="relative row-start-1  row-span-4">
  //           <Image
  //             src="/main-1.png"
  //             width={400}
  //             height={553}
  //             alt=""
  //             className="main-collection-img img-blouses"
  //           ></Image>
  //           <Link href="/Collection/BlousesAndTop" className="collection-main-subtitle">Blouses</Link>
  //         </div>
  //         <div className="relative row-start-1  row-span-5">
  //           <Image
  //             src="/main-2.png"
  //             width={700}
  //             height={959}
  //             alt=""
  //             className="main-collection-img img-pants"
  //           ></Image>
  //           <Link href="/" className="collection-main-subtitle">Pants</Link>
  //         </div>
  //         <div  className="relative row-start-5  row-span-5">
  //           <Image
  //             src="/main-3.png"
  //             width={700}
  //             height={959}
  //             alt=""
  //             className="main-collection-img img-dresses"
  //           ></Image>
  //           <Link href="/Collection/DressesAndJumpsuits" className="collection-main-subtitle">Dresses</Link>
  //         </div>
  //         <div  className="relative row-start-6  row-span-4">
  //           <Image
  //             src="/main-4.jpg"
  //             width={1349}
  //             height={1687}
  //             alt=""
  //             className="main-collection-img img-outwear"
  //           ></Image>
  //           <Link href="/Collection/OutwearAndJackets" className="collection-main-subtitle">Outwear</Link>
  //         </div>
  //       </div>
  //     </section>
  //     <section className="container">
  //     <MainTitle tagTitle='h2' fontSize='3.2rem' fontWeight='font-semibold' marginBottom='2.4rem'>Modiweek</MainTitle>
  //       {/* <h2 className="main-title">Modiweek</h2> */}
  //     </section>
  //     <section>
  //       <div className="relative">
  //         <Image
  //           src="/main-sustainability.png"
  //           width={842}
  //           height={564}
  //           alt="Sustainability"
  //           className="w-full h-[52.6rem] object-cover"
  //         ></Image>
  //         <p className="stylish-sustainability">
  //           Stylish Sustainability In Clothing Promotes Eco-<br></br>Friendly
  //           Choices For A Greater Future
  //         </p>
  //         <Link href="/" className="sustainability-main-subtitle">
  //           Sustainability
  //         </Link>
  //       </div>
  //     </section>
  //   </main>

 
  // </>
  <DefaultLayout>
    <MainLayout/>
  </DefaultLayout>
);

export default Home;
