import { getDictionary } from "../dictionaries";
import styles from "./page.module.css";
import GMaps from "@/libs/GoogleMaps";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className={styles.Body} id="BasePage">
      <h3>{dict.footer.EP}</h3>
      <p>{dict.footer.EPdes}</p>

      <h3>{dict.footer.MV}</h3>
      <p>{dict.footer.MVdes}</p>
    </div>
  );
}
