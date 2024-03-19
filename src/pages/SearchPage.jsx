import React, { useState, useEffect } from "react";
import SearchInput from "../components/searchInput/SearchInput";
import ContentProducts from "../components/layout/ContentProducts/ContentProducts";
import MainLayout from "../components/layout/MainLayout/MainLayout";

const SearchPage = () => {
  //state для поиска среди продуктов 
  const [searchName, setSearchName] = useState("");

  return (
    <MainLayout>
      <SearchInput setSearchName={setSearchName} />
      <ContentProducts searchName={searchName} />
    </MainLayout>
  );
};

export default SearchPage;
