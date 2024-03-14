import React, { useState, useEffect } from "react";
import SearchInput from "../components/searchInput/SearchInput";
import ContentProducts from "../components/layout/ContentProducts/ContentProducts";
import PageLayout from "../components/layout/Product/PageLayout";

const SearchPage = () => {
  const [searchName, setSearchName] = useState("");

  return (
    <PageLayout>
      <SearchInput setSearchName={setSearchName} />
      <ContentProducts searchName={searchName} />
    </PageLayout>
  );
};

export default SearchPage;
