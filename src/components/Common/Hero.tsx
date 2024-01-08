import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="mx-auto w-[48%] pb-[50px] pt-[140px] text-center">
      <h1 className="mb-20 text-5xl font-bold">{title}</h1>
      <h4 className="text-2xl">{subtitle}</h4>
    </div>
  );
}

export default Hero;
