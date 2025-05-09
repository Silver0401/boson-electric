import Image from "next/image";
import styles from "./page.module.css";
import { ProdsAndSols } from "@/scripts/constants";
import AddToCart from "@/libs/AddToCart";
import { getDictionary } from "../../dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[]; lang: "en" | "es" }>;
}) {
  const { slug, lang } = await params;
  const dict = await getDictionary(lang);

  const filteredSlugSection = slug[0].replace(/%20/g, " ") as
    | products
    | solutions;
  const filteredSlugProduct = slug[1].replace(/%20/g, " ");
  const filteredProductData: productItemProps = ProdsAndSols[
    filteredSlugSection
  ].itemsList.filter(
    (item: productItemProps) => item.title === filteredSlugProduct
  )[0];

  return (
    <div className={styles.productDisplayContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.leftInnerCont}>
          <h1>
            {/* @ts-ignore */}
            {dict.products[filteredSlugSection]
              ? /* @ts-ignore */
                dict.products[filteredSlugSection][filteredSlugProduct].n
              : filteredProductData.title}
          </h1>

          {/* @ts-ignore */}
          {dict.products[filteredSlugSection] &&
            // @ts-ignore
            dict.products[filteredSlugSection][filteredSlugProduct].des.length >
              0 && (
              <p className={styles.DesCont}>
                {
                  /* @ts-ignore */
                  dict.products[filteredSlugSection]
                    ? /* @ts-ignore */
                      dict.products[filteredSlugSection][filteredSlugProduct]
                        .des
                    : filteredProductData.overview
                }
              </p>
            )}

          <AddToCart
            classname={styles.IndividualProducButton}
            item={filteredProductData}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.ProductImg}
            src={filteredProductData.mainImg}
            alt={filteredProductData.title}
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        {filteredProductData.features !== "NA" && (
          <div className={styles.featursContainer}>
            <h2>{"Especificaciones"}</h2>
            {
              Array(filteredProductData.numberOfDes)
                .fill("0")
                .map((_i, index) => {
                  return (
                    <div className={styles.textBox} key={`${index + 1}`}>
                      <p id={styles.numb}>{`${index + 1}) `}</p>
                      <p>
                        {
                          /* @ts-ignore */
                          dict.products[filteredSlugSection]
                            ? /* @ts-ignore */
                              dict.products[filteredSlugSection][
                                filteredSlugProduct
                              ][`d${index + 1}`]
                            : ""
                        }
                      </p>
                    </div>
                  );
                })
              // filteredProductData.features
              //   .split(/\d+\.\s/)
              //   .filter(Boolean)
              //   .map((sentence, index) => {
              //     if (index !== 0) {

              //     }
              //   })
            }
          </div>
        )}
      </div>
    </div>
  );
}
