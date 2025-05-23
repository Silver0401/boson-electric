"use client";

import React from "react";
import styles from "@/app/[lang]/section/[items]/page.module.css";
// import styles from "@/app/section/[items]/page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  title: string;
  data: productProps;
  route: string;
  description: string;
  currentLang: string;
  listOfItems: Array<{
    route2: string;
    title: string;
  }>;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  route,
  data,
  description,
  listOfItems,
  currentLang,
}) => {
  const router = useRouter();

  return (
    <div className={styles.ProductBox}>
      <div
        className={styles.TopSection}
        onClick={() => router.push(`/${currentLang}/generic/${route}`)}
      >
        <div className={styles.ImgContainer}>
          <Image
            className={styles.imgt}
            src={data.itemsList[0].mainImg}
            alt={data.route}
          />
        </div>
        <h5>{title}</h5>
        <p>{`${description.substring(0, 50)}...`}</p>
      </div>
      <div className={styles.BottomSection}>
        {listOfItems.map((item) => {
          return (
            <div
              key={item.route2}
              className={styles.listItem}
              onClick={() => {
                router.push(`/${currentLang}/product/${route}/${item.route2}`);
              }}
            >
              <p>{item.title}</p>
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
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
