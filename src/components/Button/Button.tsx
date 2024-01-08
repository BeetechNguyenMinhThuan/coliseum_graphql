import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ children, className = "", ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge("flex gap-x-2 border-2 px-5 py-1", className)}
    >
      {children}
    </button>
  );
}

export default Button;
