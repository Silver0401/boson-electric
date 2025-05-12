import { ProdsAndSols } from "@/scripts/constants";
import styles from "./page.module.css";
import GenericCard from "@/libs/GenericCard";
import { getDictionary } from "../../dictionaries";

export default async function GenericsPage({
  params,
}: {
  params: Promise<{ items: string; lang: "en" | "es" }>;
}) {
  const { items, lang } = await params;
  const dict = await getDictionary(lang);
  const section = items.replace(/%20/g, " ") as solutions | products;

  const GenericPageData = ProdsAndSols[section];

  return (
    <div className={styles.Body} id="BasePage">
      {/* @ts-expect-error ts doesnt check the keys with the dictionary */}
      <h1>{dict.products[section] ? dict.products[section].n : section}</h1>

      <p className={styles.des}>
        {/* @ts-expect-error ts doesnt check the keys with the dictionary */}
        {dict.products[section]
          ? // @ts-expect-error ts doesnt check the keys with the dictionary
            dict.products[section].des
          : GenericPageData.description}
      </p>

      <div className={styles.GenericsContainer}>
        {GenericPageData.itemsList.map((item) => {
          return (
            <GenericCard
              key={item.title}
              data={item}
              route={section}
              currentLang={lang}
              route2={item.title}
              realTitle={
                // @ts-expect-error ts doesnt check the keys with the dictionary
                dict.products[section]
                  ? // @ts-expect-error ts doesnt check the keys with the dictionary
                    dict.products[section][item.title].n
                  : item.title
              }
            />
          );
        })}
      </div>
    </div>
  );
}
