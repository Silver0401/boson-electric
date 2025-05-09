// "use client";

import styles from "./page.module.css";
import { Products } from "@/scripts/constants";
import { Solutions } from "@/scripts/constants";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import MachinesLottie from "@/assets/Lotties/MachinesIso.json";
import { getDictionary } from "./dictionaries";
// import { usePathname } from "next/navigation";

import LogoWhite from "@/assets/BosonLogoWhite.png";
import CLottie from "@/components/CLottie";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className={styles.HomeSection}>
      <div className={styles.BodySection}>
        <div className={styles.InitContainer}>
          <div className={styles.Left}>
            <div className={styles.bg} />
            <Image
              className={styles.bgImg}
              src={LogoWhite}
              alt={`WhiteBosonLogo`}
            />
            <h4>{dict.main.title}</h4>
            <p>{dict.main.subtitle}</p>
          </div>
          <div className={styles.Right}>
            <div className={styles.LottCont}>
              <CLottie json={MachinesLottie} />
            </div>
            <div className={styles.chooseBox}>
              <Link
                className={styles.innercb}
                href={`${lang}/section/products`}
              >
                <div className={styles.iconBox}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
                  </svg>
                </div>
                <p>{dict.main.products}</p>
              </Link>
              <Link
                className={styles.innercb}
                href={`${lang}/section/solutions`}
              >
                <div className={styles.iconBox}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                    <path
                      fillRule="evenodd"
                      d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p>{dict.main.solutions}</p>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.ProductsCenter}>
          <h2>{`${dict.main.CenterProd}`}</h2>

          {Object.entries(Products).map((product) => {
            const [key, value] = product;

            return (
              <div key={key} className={styles.Box}>
                <div className={styles.iconBox}>{value.icon}</div>
                <Link className={styles.ProductLink} href={`/generic/${key}`}>
                  {/* @ts-expect-error */}
                  {dict.products[key].n}
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.arrow}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            );
          })}
        </div>
        <div className={styles.SolutionsCenter}>
          <h2>{`${dict.main.CenterSol}`}</h2>
          {Object.entries(Solutions).map((solution) => {
            const [key, value] = solution;

            return (
              <Link
                key={key}
                className={styles.Box}
                href={`${lang}/generic/${key}`}
              >
                <Image src={value.img} alt={`${key}`} />
                {/* @ts-expect-error */}
                <p>{dict.main[key]}</p>
                <div className={styles.svgBox}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
