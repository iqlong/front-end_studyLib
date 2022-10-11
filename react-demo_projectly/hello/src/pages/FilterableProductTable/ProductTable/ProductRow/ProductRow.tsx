import React, { FC } from "react";

const ProductRow: FC<any> = (props) => {
  const {
    text: { name, price },
  } = props;
  
  return <div className="prodectRow">
    {name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {price}
  </div>;
};

export default ProductRow;
