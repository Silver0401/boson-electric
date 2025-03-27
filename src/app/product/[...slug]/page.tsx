import Image from "next/image";
import styles from "./page.module.css";
import { ProdsAndSols } from "@/scripts/constants";
import AddToCart from "@/libs/AddToCart";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  console.log(slug);

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
        <Image
          className={styles.ProductImg}
          src={filteredProductData.mainImg}
          alt={filteredProductData.title}
        />
        <h1>{filteredProductData.title}</h1>
        <AddToCart
          classname="IndividualProducButton"
          item={filteredProductData}
        />
        <p className={styles.tip}>
          {
            "Tip: Agrega los productos que te interesen al carrito para obtener tu cotización"
          }
        </p>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.overviewContainer}>
          <h2>{"Descripción del Producto"}</h2>
          <p>{filteredProductData.overview}</p>
        </div>
        {filteredProductData.features !== "NA" && (
          <div className={styles.featursContainer}>
            <h2>{"Especificaciones"}</h2>
            {filteredProductData.features
              .split(/\d+\.\s/)
              .filter(Boolean)
              .map((sentence, index) => {
                if (index !== 0) {
                  return (
                    <div className={styles.textBox} key={sentence}>
                      <p id={styles.numb}>{`${index}) `}</p>
                      <p>{sentence}</p>
                    </div>
                  );
                }
              })}
          </div>
        )}
      </div>
    </div>
  );
}
