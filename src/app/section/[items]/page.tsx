import { Products, Solutions } from "@/scripts/constants";
import styles from "./page.module.css";
import Image from "next/image";
import ProductCard from "@/libs/ProductCard";
// import { useRouter } from "next/navigation";

export default async function ItemsPage({
  params,
}: {
  params: Promise<{ items: string }>;
}) {
  const { items } = await params;

  return (
    <div className={styles.Body}>
      {Object.entries(items === "products" ? Products : Solutions).map(
        (entry) => {
          const [key, value] = entry;

          return <ProductCard key={key} title={key} data={value} />;
        }
      )}
    </div>
  );
}
