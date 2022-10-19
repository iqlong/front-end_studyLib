import { Checkbox } from "antd";
import React, { FC } from "react";

const SearchBar: FC<any> = (props) => {
  const { setIfStock, setSearchText } = props;

  function input_searchText(text) {
    setSearchText(text)
  }

  function click_ifStock() {
    setIfStock((oldStatus) => {
      return !oldStatus;
    });
  }

  return (
    <div>
      <input
        type="text"
        onInput={(e) => {
          input_searchText(e.currentTarget.value);
        }}
        placeholder="Search..."
      />
      <br />
      <input onChange={click_ifStock} type="checkbox" id="cbox1" />
      <label htmlFor="cbox1">&nbsp;Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
