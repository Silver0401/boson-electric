import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";
import { Footers } from "@/scripts/constants";
import { GlobalContextProvider } from "@/e2e/globalContext";
import Basket from "@/libs/Basket";
import Nav from "@/libs/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boson",
  description: "Distribuidora de HNC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalContextProvider>
          <Nav />
          {children}
          <div className={styles.FooterSection}>
            {Object.entries(Footers).map((footerSection) => {
              const [key, value] = footerSection;

              return (
                <div key={key} className={styles.column}>
                  <h4>{key}</h4>
                  {value.list.map((value) => {
                    return (
                      <Link
                        key={`${key} ${value.name}`}
                        href={
                          value.route ? value.route : `/generic/${value.name}`
                        }
                      >
                        <p>{value.name}</p>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <Basket />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
