import { Products, Solutions } from "@/scripts/constants";
import styles from "./page.module.css";
import ProductCard from "@/libs/ProductCard";
import { getDictionary } from "../../dictionaries";

export default async function ItemsPage({
  params,
}: {
  params: Promise<{ items: string; lang: "en" | "es" }>;
}) {
  const { items, lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <h1 className={styles.title}>
        {items === "products" ? dict.main.CenterProd : dict.main.CenterSol}
      </h1>
      <div className={styles.Body}>
        {Object.entries(items === "products" ? Products : Solutions).map(
          (entry) => {
            const [key, value] = entry;
            const newList = value.itemsList.map((it) => {
              console.log(`${key}, ${it.title}`);

              return {
                route2: it.title,
                // @ts-expect-error
                title:
                  // @ts-expect-error
                  dict.products[key] && dict.products[key][it.title]
                    ? // @ts-expect-error
                      dict.products[key][it.title].n
                    : it.title,
              };
            });
            // console.log(newList);

            return (
              <ProductCard
                key={key}
                title={
                  // @ts-expect-error
                  dict.products[key] ? dict.products[key].n : key
                }
                currentLang={lang}
                route={key}
                data={value}
                listOfItems={newList}
              />
            );
          }
        )}
      </div>
    </>
  );
}
