"use client";
import Lottie from "lottie-react";
import LoginAnimationLottie from "@/public/animations/login.json";

const LoginAnimation = () => {
  return (
    <Lottie
      animationData={LoginAnimationLottie}
      loop={true}
      className="w-full"
    />
  );
};
export default LoginAnimation;
