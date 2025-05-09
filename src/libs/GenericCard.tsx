"use client";

import React from "react";
import styles from "@/app/[lang]/generic/[items]/page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface GenericCardProps {
  data: productItemProps;
  route: string;
  route2: string;
  realTitle: string;
  currentLang: string;
}

const GenericCard: React.FC<GenericCardProps> = ({
  route,
  realTitle,
  data,
  currentLang,
  route2,
}) => {
  const router = useRouter();

  return (
    <div
      className={styles.GenericBox}
      onClick={() => {
        router.push(`/${currentLang}/product/${route}/${route2}`);
      }}
    >
      <div className={styles.bg} />
      <h4>{realTitle}</h4>
      <Image src={data.mainImg} alt={realTitle} />
      <div className="onStock"></div>
      <div className={styles.arrowContainer}>
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
    </div>
  );
};

export default GenericCard;
