import React, { useState, useContext } from "react";
import { BsSearch } from 'react-icons/bs';
import "./SearchBar.css";

//import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

function SearchBar() {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };
  
  return (
      <form typeclassName="searchBar" value={searchValue} onSubmit={handleSearch}>
      <input
        type="search"
        className="input"
        placeholder="Buscar produto com desconto"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className="searchButton">
          <BsSearch className="icon"/>
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="iconLupa"/> */}
      </button>
    </form>

  );
}

export default SearchBar;
