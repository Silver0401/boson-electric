"use client";

import React from "react";
import styles from "@/app/generic/[items]/page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface GenericCardProps {
  data: productItemProps;
  title: string;
}

const GenericCard: React.FC<GenericCardProps> = ({ title, data }) => {
  const router = useRouter();

  return (
    <div
      className={styles.GenericBox}
      onClick={() => {
        router.push(`/product/${title}/${data.title}`);
      }}
    >
      <h4>{data.title}</h4>
      <Image src={data.mainImg} alt={data.title} />
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
