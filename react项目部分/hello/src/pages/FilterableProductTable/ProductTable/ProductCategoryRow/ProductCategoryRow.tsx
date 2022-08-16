import React, { FC } from "react";
import './index.css'

const ProductCategoryRow: FC<any> = (props) => {
  const { text } = props;

  return <div className="categoryRow">{text}</div>;
};

export default ProductCategoryRow;
