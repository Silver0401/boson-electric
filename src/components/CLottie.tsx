"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("@/components/Lottie"), { ssr: false });

interface LottieProps {
  json: object;
}

const CLottie: React.FC<LottieProps> = ({ json }) => {
  return <Lottie json={json} />;
};

export default CLottie;
