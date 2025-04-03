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
    </div>
  );
};

export default GenericCard;
