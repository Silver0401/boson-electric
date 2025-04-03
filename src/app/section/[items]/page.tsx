import { Products, Solutions } from "@/scripts/constants";
import styles from "./page.module.css";
import ProductCard from "@/libs/ProductCard";

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

          return (
            <ProductCard
              key={key}
              title={
                key.includes("Maquina")
                  ? "Máquina de Herramientas CNC"
                  : key.includes("Grua")
                  ? "Grúa"
                  : key
              }
              route={key}
              data={value}
            />
          );
        }
      )}
    </div>
  );
}
