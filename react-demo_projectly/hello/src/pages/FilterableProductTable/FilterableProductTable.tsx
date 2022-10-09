import React, { FC, useContext, useState, useMemo } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ProductTable from "./ProductTable/ProductTable";
import StudnetMes from "./context";
import "./index.css";

const resData = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

type tableDataTemp = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

const FilterableProductTable: FC<any> = () => {
  const [ifStock, setIfStock] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [showData, setShowData] = useState<tableDataTemp[]>(resData);

  const compSearchData = useMemo(() => {
    const filterData = resData.filter((item) => {
      if (ifStock) {
        return item.name.search(searchText) !== -1 && item.stocked === true;
      } else {
        return item.name.search(searchText) !== -1;
      }
    });
    setShowData(filterData);
  }, [searchText, ifStock]);

  // const compIfStock = useMemo(() => {
  //   let filterData = showData;
  //   ifStock == true
  //     ? (filterData = showData.filter((item) => {
  //         return item.stocked === true;
  //       }))
  //     : "";
  //   setShowData(filterData);
  // }, [ifStock]);

  return (
    <div className="tableWrap">
      <div className="filterTable">
        <SearchBar setIfStock={setIfStock} setSearchText={setSearchText} />
        <StudnetMes.Provider value={{ name: "zhl", age: 12 }}>
          <ProductTable tableData={showData} />
        </StudnetMes.Provider>
      </div>
    </div>
  );
};

export default FilterableProductTable;
