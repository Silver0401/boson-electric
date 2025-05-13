import { getDictionary } from "../dictionaries";
import styles from "./page.module.css";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className={styles.Body} id="BasePage">
      <h3>{"FAQ"}</h3>

      {Array(7)
        .fill("faq")
        .map((str, index) => {
          return (
            <>
              {/* @ts-expect-error ts doesnt check the keys with the dictionary */}
              <h4>{dict.footer[`${str}${index + 1}`]}</h4>
              {/* @ts-expect-error ts doesnt check the keys with the dictionary */}
              <p>{dict.footer[`${str}${index + 1}des`]}</p>
            </>
          );
        })}
    </div>
  );
}
