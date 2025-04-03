import { ProdsAndSols } from "@/scripts/constants";
import styles from "./page.module.css";
import GenericCard from "@/libs/GenericCard";
// import { useRouter } from "next/navigation";

export default async function GenericsPage({
  params,
}: {
  params: Promise<{ items: string }>;
}) {
  const { items } = await params;
  const section = items.replace(/%20/g, " ") as solutions | products;

  const GenericPageData = ProdsAndSols[section];

  return (
    <div className={styles.Body}>
      <h1>{section}</h1>

      <p className={styles.des}>{GenericPageData.description}</p>

      <div className={styles.GenericsContainer}>
        {GenericPageData.itemsList.map((item) => {
          return <GenericCard data={item} title={section} />;
        })}
      </div>
    </div>
  );
}
