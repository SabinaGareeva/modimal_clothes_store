import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Filter from "../../Filter/Filter";
import ProductElements from "../../cards/ProductElements";
import Pagination from "../../Pagination/Pagination";
import css from "./ContentProducts.module.css";
const ContentProducts = ({ searchName }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log("Ошибка загрузки данных");
      }
    };
    fetchData();
  }, []);

  // Объект всех фильтров
  const filters = {
    sort: [
      // "Featured",
      // "Best Seller",   возможно добавить позже
      "Price: Low To Hight",
      "Price: Hight To Low",
    ],
    color: [
      "black",
      "red",
      "green",
      "yellow",
      "dark Blue",
      "brown",
      "pink",
      "light blue",
      "orange",
      "white",
    ],
    fabric: ["cotton", "linen", "wool", "silk", "cashmere"],
    size: [
      "XS / US (0-4)",
      "S / US (4-6)",
      "M / US (6-10)",
      "L / US (10-14)",
      "XL / US (12-16)",
    ],
  };
 
  // const [products, setProducts] = useState([]);
  // Состояния для пагинации
  // Текущая страница
  const [currentPage, setCurrentPage] = useState(1);
  //количество товаров на одной странице
  const [productsPerPage] = useState(8);

  const [checkedOption, setCheckedOption] = useState({
    sort: [],
    fabric: [],
    color: [],
    size: [],
  });
  // console.log(searchName);

  const handleCheckboxChange = (filterType, value) => {
    setCheckedOption((prevFilter) => {
      if (filterType === "sort") {
        // проверка есть ли опция уже в массиве sortBy
        const isValueIncluded = prevFilter.sort.includes(value);

        //если значение уже есть то итеррируюсь по массиву опций
        const updatedSortBy = isValueIncluded
          ? prevFilter.sort.filter(
              (option) =>
                // option === value ? value : option
                option !== value
            )
          : [value];

        return {
          ...prevFilter,
          sort: updatedSortBy,
        };
      }

      // если массив категории уже имеет значение, то оно удаляется, иначе оно добавляется в массив
      const updatedOption = prevFilter[filterType].includes(value)
        ? prevFilter[filterType].filter((item) => item !== value)
        : [...prevFilter[filterType], value];
      // копируем старый массив и заменяем категорию новым значением
      return {
        ...prevFilter,
        [filterType]: updatedOption,
      };
    });
  };
  const sortByPrice = (products, arraySortBy) => {
    if (arraySortBy.includes("Price: Low To Hight")) {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (arraySortBy.includes("Price: Hight To Low")) {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  };

  const filteredProducts = products.filter((product) => {
    const colorMatch =
      checkedOption.color.length === 0 ||
      checkedOption.color.includes(product.color);
    const fabricMatch =
      checkedOption.fabric.length === 0 ||
      checkedOption.fabric.includes(product.fabric);
    const sizeMatch =
      checkedOption.size.length === 0 ||
      checkedOption.size.some((item) => product.size.includes(item));
    return colorMatch && fabricMatch && sizeMatch;
  });
  const searchFilteredProducts =
    searchName?.trim() ?? "" !== ""
      ? filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(searchName?.toLowerCase())
        )
      : filteredProducts;

  const sortedProducts = sortByPrice(
    searchFilteredProducts,
    checkedOption.sort
  );

  // Код для пагинации
  const lastProdactsIndex = currentPage * productsPerPage;
  const firstProdactsIndex = lastProdactsIndex - productsPerPage;
  const currentProducts = sortedProducts.slice(
    firstProdactsIndex,
    lastProdactsIndex
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePageChange = (number) => {
    paginate(number);
    throwingBeginingCards();
  };
  const throwingBeginingCards = () => {
    const containerCards = document.querySelector("#container-cards");
    if (containerCards) {
      containerCards.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Кнопка предыдущая страница
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => {
        return currentPage - 1;
      });
      throwingBeginingCards();
    }
  };
  // Кнопка следующая страница
  const nextPage = () => {
    if (currentPage < products.length / productsPerPage) {
      setCurrentPage((currentPage) => {
        return currentPage + 1;
      });
      throwingBeginingCards();
    }
  };
  return (
    <>
      <div className="container">
        <div className="flex mb-[4.8rem]">
          <div className="w-1/3">
            <h3 className="main-title">Filters</h3>
            {Object.keys(filters).map((keyFilters) => {
              return (
                <Filter
                  key={keyFilters}
                  nameFilter={keyFilters}
                  options={filters[keyFilters]}
                  checkedOption={checkedOption}
                  handleCheckboxChange={handleCheckboxChange}
                ></Filter>
              );
            })}
          </div>
          {/* Отрисовка карточек */}
          <ProductElements products={currentProducts}></ProductElements>
        </div>
        {/* Пагинация */}
        <div className={css.pagination__centre}>
          <div className={css.pagination__container}>
            <button className={css.pagination__button} onClick={prevPage}>
              &lt;
            </button>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={sortedProducts.length}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            ></Pagination>

            <button className={css.pagination__button} onClick={nextPage}>
              &gt;
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ContentProducts;
