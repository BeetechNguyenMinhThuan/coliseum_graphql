import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

function Button({ children, className = "" }: ButtonProps) {
  return (
    <button className={twMerge("flex gap-x-2 border-2 px-5 py-1", className)}>
      {children}
    </button>
  );
}

export default Button;
