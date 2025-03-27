"use client";

import { createContext, useEffect, useState } from "react";

type Basket = "Open" | "Closed";

interface GlobalContextProps {
  //  ------- App Color Schemas -------------
  basketItems: Array<productItemProps>;
  setBasketItems: React.Dispatch<React.SetStateAction<productItemProps[]>>;
  basketState: Basket;
  setBasketState: React.Dispatch<React.SetStateAction<Basket>>;
  navState: Basket;
  setNavState: React.Dispatch<React.SetStateAction<Basket>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  basketItems: [],
  setBasketItems: () => {},
  basketState: "Closed",
  setBasketState: () => {},
  navState: "Closed",
  setNavState: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [basketItems, setBasketItems] = useState<Array<productItemProps>>([]);
  const [basketState, setBasketState] = useState<Basket>("Closed");
  const [navState, setNavState] = useState<Basket>("Closed");

  useEffect(() => {
    if (basketItems.length > 0) {
      setBasketState("Open");
    }
  }, [basketItems]);

  return (
    <GlobalContext.Provider
      value={{
        basketItems,
        setBasketItems,
        basketState,
        setBasketState,
        navState,
        setNavState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
