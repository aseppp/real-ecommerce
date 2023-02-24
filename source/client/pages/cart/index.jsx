import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return <div>index</div>;
};

export default index;
