import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import css from "./DropdownMenu.module.css";
// import SliderMain from '../slider/SliderMain'

const DropdownMenu = ({
  isOpen,
  setIsOpen,
  buttonsHeader,
  itemName,
  headerLinkClass,
}) => {
  // const [isOpen,setIsOpen]=useState("false")
  // const toggleDropdown=()=>{setIsOpen(!isOpen);}
  // const sliderRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
      // buttonsHeader.current &&
      // !buttonsHeader.current.contains(event.currentTarget)
      // &&
      // sliderRef.current &&
      // !sliderRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };
  // Закрытие меню при клике на ссылку внутри меню
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Для перехода по страницам
  const router = useRouter();
  const collection = [
    // { name: "Home", path: "/" },
    { name: "Shop all", path: "/Collection" },
    { name: "Blouses & top", path: "/Collection/BlousesAndTop" },
    { name: "Pants", path: "/Collection/Pants" },
    { name: "Dresses & jumpsuits", path: "/Collection/DressesAndJumpsuits" },
    { name: "Outwear & jackets", path: "/Collection/OutwearAndJackets" },
    { name: "Pullovers ", path: "/Collection/Pullovers" },
    { name: "Tees", path: "/Collection/Tees" },
    { name: "Shorts & skirts", path: "/Collection/ShortsAndSkirts" },
  ];
  const featured = [
    { name: "New In", path: "/NewIn" },
    { name: "Modiweek", path: "/Modiweek" },
    { name: "Plus Size", path: "/Plussize" },
    { name: "Best Seller", path: "/Sustainability" },
  ];
  const more = [
    { name: "Bundles", path: "/NewIn" },
    { name: "Occasion wear", path: "/Modiweek" },
    { name: "Matching set", path: "/Plussize" },
    { name: "Suiting", path: "/Sustainability" },
  ];
  const trending = [
    { name: "Plus size", path: "/Plussize" },
    { name: "Fall collection", path: "/Modiweek" },
    { name: "Modiweek", path: "/Modiweek" },
  ];
  const sustainability = [
    { name: "Mission", path: "/Mission" },
    { name: "Processing", path: "/Processing" },
    { name: "Materials", path: "/Materials" },
    { name: "Packaging", path: "/Packaging" },
    { name: "Product care", path: "/ProductCare" },
    { name: "Our suppliers", path: "/ur suppliers" },
  ];

  //Меняем верстку dropdown в зависимости от выбранной кнопки
  let content;
  switch (itemName) {
    case "Collection":
      content = (
        <div
          className={`${css.dropdown__collection} ${
            isOpen ? css["dropdown__show"] : ""
          }`}
          ref={dropdownRef}
        >
          {isOpen && (
            <div className="container">
              <nav className="flex justify-between">
                <div className="flex flex-col justify-start">
                  <h2 className={css.dropdown__title}>Category</h2>
                  {collection.map((item, index) => (
                    <Link
                      href={item.path}
                      className={`${css.dropdown__links}  ${
                        item.path === router.pathname ? "text-sky-500" : ""
                      }`}
                      key={index}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col justify-start">
                  <h2 className={css.dropdown__title}>Featured </h2>
                  {featured.map((item, index) => (
                    <Link
                      href={item.path}
                      className={`${css.dropdown__links}  ${
                        item.path === router.pathname ? "text-sky-500" : ""
                      }`}
                      key={index}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col justify-start">
                  <h2 className={css.dropdown__title}>More</h2>
                  {more.map((item, index) => (
                    <Link
                      href={item.path}
                      className={`${css.dropdown__links} ${
                        item.path === router.pathname ? "text-sky-500" : ""
                      }`}
                      key={index}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link href={collection[1].path} className={css.dropdown__image_link}>
                  <Image
                    alt="Blouses"
                    src="/dropdown/dropdown-1.png"
                    width={1400}
                    height={1799}
                    className={css.dropdown__image}
                  ></Image>
                  <h2>Blouses</h2>
                </Link>
                <Link href={featured[2].path} className={css.dropdown__image_link}>
                  <Image
                    alt="Plus size"
                    src="/dropdown/dropdown-2.png"
                    width={1400}
                    height={1799}
                    className={css.dropdown__image}
                  ></Image>
                  <h2>Plus size</h2>
                </Link>
              </nav>
            </div>
          )}
        </div>
      );
      break;
    // New In меню
    case "New In":
      content = (
        <div
          className={`${css.dropdown__collection} ${
            isOpen ? css.dropdown__show : ""
          }`}
          ref={dropdownRef}
        >
          {isOpen && (
            <div className="container">
              <nav className="flex justify-between">
                <div className="flex flex-col justify-start">
                  <h2 className={css.dropdown__title}>Category</h2>
                  {collection.map((item, index) => (
                    <Link
                      href={item.path}
                      className={`${css.dropdown__links}  ${
                        item.path === router.pathname ? "text-sky-500" : ""
                      }`}
                      key={index}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col justify-start">
                  <h2 className={css.dropdown__title}>Trending </h2>
                  {trending.map((item, index) => (
                    <Link
                      href={item.path}
                      className={`${css.dropdown__links}  ${
                        item.path === router.pathname ? "text-sky-500" : ""
                      }`}
                      key={index}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Link href={trending[1].path} className={css.dropdown__image_link}>
                  <Image
                    alt="Fall collection"
                    src="/dropdown/dropdown-3.png"
                    width={424}
                    height={582}
                    className={css.dropdown__image_new}
                  ></Image>
                  <h2>Fall Collection</h2>
                </Link>
                <Link href={collection[1].path} className={css.dropdown__image_link}>
                  <Image
                    alt="Blouses"
                    src="/dropdown/dropdown-4.png"
                    width={720}
                    height={925}
                    className={css.dropdown__image_new}
                  ></Image>
                  <h2>Blouses</h2>
                </Link>
                <Link href={collection[3].path} className={css.dropdown__image_link}>
                  <Image
                    alt="Dresses"
                    src="/dropdown/dropdown-5.png"
                    width={1400}
                    height={1799}
                    className={css.dropdown__image_new}
                  ></Image>
                  <h2>Dresses</h2>
                </Link>
              </nav>
            </div>
          )}
        </div>
      );
      break;
    case "Plus Size":
      content = (
        <div
          className={`${css.dropdown__collection} ${isOpen ? css.dropdown__show : ""}`}
          ref={dropdownRef}
        >
          {isOpen && (
            <div className="container">
              <nav className="flex justify-between">
                <div className="flex flex-col justify-start">
                  <h2 className={css.dropdown__title}>Category</h2>
                  {collection.map((item, index) => (
                    <Link
                      href={item.path}
                      className={`${css.dropdown__links}  ${
                        item.path === router.pathname ? "text-sky-500" : ""
                      }`}
                      key={index}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Link href={trending[2].path} className={css.dropdown__image_link}>
                  <Image
                    alt="Pants"
                    src="/dropdown/dropdown-6.jpg"
                    width={424}
                    height={582}
                    className={css.dropdown__image_new}
                  ></Image>
                  <h2>Fall Collection</h2>
                </Link>
                <Link href={collection[3].path} className={css.dropdown__image_link}>
                  <Image
                    alt="Dresses"
                    src="/dropdown/dropdown-7.png"
                    width={720}
                    height={925}
                    className={css.dropdown__image_new}
                  ></Image>
                  <h2>Blouses</h2>
                </Link>
                <Link href={collection[1].path} className={css.dropdown__image_link}>
                  <Image
                    alt="Blouses"
                    src="/dropdown/dropdown-8.jpg"
                    width={1400}
                    height={1799}
                    className={css.dropdown__image_new}
                  ></Image>
                  <h2>Dresses</h2>
                </Link>
              </nav>
            </div>
          )}
        </div>
      );
      break;
    case "Sustainability":
      content = (
        <div
          className={`${css.dropdown__collection} ${isOpen ? css.dropdown__show : ""}`}
          ref={dropdownRef}
        >
          {isOpen && (
            <div className="container">
              <nav className="flex justify-between">
                <div className="flex flex-col justify-start">
                  <h2 className={css.dropdown__title}>Category</h2>
                  {sustainability.map((item, index) => (
                    <Link
                      href={item.path}
                      className={`${css.dropdown__links}  ${
                        item.path === router.pathname ? "text-sky-500" : ""
                      }`}
                      key={index}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Link href={trending[2].path}>
                  <Image
                    alt="Pants"
                    src="/dropdown/dropdown-9.jpg"
                    width={392}
                    height={428}
                    className="w-[39.2rem] h-[43.8rem] object-cover"
                  ></Image>
                </Link>
                <Link href={collection[3].path}>
                  <Image
                    alt="Dresses"
                    src="/dropdown/dropdown-10.jpg"
                    width={392}
                    height={428}
                    className="w-[39.2rem] h-[43.8rem] object-cover"
                  ></Image>
                </Link>
              </nav>
            </div>
          )}
        </div>
      );
      break;
  }
  return <div>{content}</div>;
};
export default DropdownMenu;
