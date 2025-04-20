import React from "react";
import { useLottie } from "lottie-react";

interface LottieProps {
  json: any;
}

const Lottie: React.FC<LottieProps> = ({ json }) => {
  const options = {
    animationData: json,
    loop: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Lottie;
