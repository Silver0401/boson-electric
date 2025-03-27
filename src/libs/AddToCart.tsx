"use client";

import { GlobalContext } from "@/e2e/globalContext";
import React, { useContext } from "react";

interface AddToCartProps {
  item: productItemProps;
  classname: string;
}

const AddToCart: React.FC<AddToCartProps> = ({ item, classname }) => {
  const { setBasketItems } = useContext(GlobalContext);

  return (
    <button
      key={classname}
      className={classname}
      onClick={() => setBasketItems((prevItems) => [...prevItems, item])}
    >
      <p>{"Agregar al Carrito"}</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
      </svg>
    </button>
  );
};

export default AddToCart;
