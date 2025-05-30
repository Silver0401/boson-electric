import type { Metadata } from "next";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";
import { Footers } from "@/scripts/constants";
import { GlobalContextProvider } from "@/e2e/globalContext";
import Basket from "@/libs/Basket";
import Nav from "@/libs/Nav";
import { getDictionary } from "./dictionaries";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Boson",
  description: "Distribuidora de HNC",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "es" }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  if (process.env.NEXT_PUBLIC_PAGE_DISABLED === "true") {
    return (
      <html lang={lang}>
        <body>{"503 - Service Unavailable."}</body>
      </html>
    );
  } else {
    return (
      <html lang={(await params).lang}>
        <body>
          <GlobalContextProvider>
            <Nav lang={(await params).lang} />
            {children}
            <div className={styles.FooterSection}>
              {Object.entries(Footers).map((footerSection) => {
                const [key, value] = footerSection;

                return (
                  <div key={key} className={styles.column}>
                    {/* @ts-expect-error because ts is dumb */}
                    <h4>{dict.footer[key]}</h4>
                    {value.list.map((value) => {
                      return (
                        <Link
                          key={`${key} ${value.name}`}
                          href={
                            value.route
                              ? `/${lang}/${value.route}`
                              : `/${lang}/generic/${value.name}`
                          }
                        >
                          {/* @ts-expect-error ts doesnt check the keys with the dictionary */}
                          <p>{`${dict.main[value.name]}`}</p>
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <Basket
              title={dict.footer["BasketTitle"]}
              subtitle={dict.footer["BasketSubtitle"]}
              btn={dict.footer["BasketButton"]}
              btn2={dict.footer["CotizarButton"]}
            />
          </GlobalContextProvider>
        </body>
      </html>
    );
  }
}
