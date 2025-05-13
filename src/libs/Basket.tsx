"use client";

import { GlobalContext } from "@/e2e/globalContext";
import React, { useContext, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BasketLottie from "@/assets/Lotties/Basket.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("@/components/Lottie"), { ssr: false });

interface BasketProps {
  title: string;
  subtitle: string;
  btn: string;
}

const Basket: React.FC<BasketProps> = ({ title, subtitle, btn }) => {
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
      <h2>{title}</h2>
      {/* <h2>{"Mi Carrito"}</h2> */}
      <div className="BasketInnerContainer">
        {basketItems.length === 0 ? (
          <div className="noItems">
            <p>{subtitle}</p>
            {/* <p>{"Tu carrito esta vacío. Agrégale productos"}</p> */}

            <div className="lottieContainer">
              <Lottie json={BasketLottie} />
            </div>

            <button
              onClick={() => {
                router.push("/section/products");
                setBasketState("Closed");
              }}
            >
              <p>{btn}</p>
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
      {basketItems.length > 0 ? (
        <div className="BottomButton">
          <button
            onClick={() => {
              window.open(
                `https://wa.me/+524721330869?text=${encodeURIComponent(
                  `Me gustaría saber la cotización de los siguientes productos: ${basketItemsFilteredMessage}`
                )}`,
                "_blank"
              );
            }}
          >
            <p>{"Cotizar los Productos"}</p>
          </button>
        </div>
      ) : null}
      <svg
        onClick={() => setBasketState("Closed")}
        className="XButton"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Basket;
