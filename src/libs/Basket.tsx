"use client";

import { GlobalContext } from "@/e2e/globalContext";
import React, { useContext, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Basket: React.FC = () => {
  const router = useRouter();
  const { basketItems, setBasketItems, basketState, setBasketState } =
    useContext(GlobalContext);

  const basketItemsFilteredMessage = useMemo(() => {
    if (basketItems.length > 0) {
      const finalArray: string[] = [];
      const uniqueArray = basketItems.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      });

      uniqueArray.map((item) => {
        const numberOfTimesInArray = basketItems.filter(
          (i) => i.title === item.title
        ).length;
        finalArray.push(`${numberOfTimesInArray} ${item.title}`);
      });

      return finalArray.join(", ");
    } else return "none";
  }, [basketItems]);

  return (
    <div className="BasketContainer" id={`Basket${basketState}`}>
      <h2>{"Mi Carrito"}</h2>
      <div className="BasketInnerContainer">
        {basketItems.length === 0 ? (
          <div className="noItems">
            <p>{"Tu carrito esta vacio. Agregale productos"}</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
            </svg>
            <button
              onClick={() => {
                router.push("/section/products");
                setBasketState("Closed");
              }}
            >
              <p>{"Ver Productos"}</p>
            </button>
          </div>
        ) : (
          basketItems.map((item, index) => {
            const numberOfItems: Array<boolean> = basketItems.map((i) => {
              if (i.title === item.title) {
                return true;
              } else return false;
            });

            if (
              numberOfItems.filter((item) => item).length > 1 &&
              index !== numberOfItems.indexOf(true)
            ) {
            } else {
              return (
                <div className="basketItem" key={`${item.title}${index}`}>
                  <p className="coso">{item.title}</p>
                  <div className="cont">
                    <div className="imgContainer">
                      <Image
                        src={item.mainImg}
                        alt={item.title}
                        key={item.title}
                      />
                    </div>
                    <div className="pContainer">
                      <p>{`Cant: ${
                        numberOfItems.filter((item) => item).length
                      }`}</p>
                      <div className="buttonContainer">
                        <span
                          className="btn"
                          onClick={() =>
                            setBasketItems((prevItems) => {
                              return [...prevItems, item];
                            })
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                          </svg>
                        </span>
                        {numberOfItems.filter((item) => item).length > 1 ? (
                          <span
                            className="btn"
                            onClick={() =>
                              setBasketItems((prevItems) => {
                                const newItems = [...prevItems];
                                newItems.splice(index, 1);

                                return newItems;
                              })
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                            </svg>
                          </span>
                        ) : (
                          <span
                            className="btn"
                            onClick={() =>
                              setBasketItems((prevItems) =>
                                [...prevItems].filter(
                                  (it) => it.title !== item.title
                                )
                              )
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>

      <div className="BottomButton">
        <button
          onClick={() => {
            window.open(
              `https://wa.me/+524721330869?text=${encodeURIComponent(
                `Hola, entre a su página y quiero saber la cotización de los siguientes productos: ${basketItemsFilteredMessage}`
              )}`,
              "_blank"
            );
          }}
        >
          <p>{"Cotizar los Productos"}</p>
        </button>
      </div>

      <svg
        onClick={() => setBasketState("Closed")}
        className="XButton"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
      </svg>
    </div>
  );
};

export default Basket;
