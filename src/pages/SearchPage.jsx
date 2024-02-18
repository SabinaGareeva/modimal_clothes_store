import React, { useState, useEffect } from "react";
import SearchInput from "../components/searchInput/SearchInput";
import ContentProducts from "../components/layout/ContentProducts/ContentProducts";

const SearchPage = () => {
const [searchName,setSearchName]=useState('')

  return (
    <div>
      
      <SearchInput setSearchName={setSearchName}/>
      
      <ContentProducts searchName={searchName}/>
    </div>
  );
};

export default SearchPage;
