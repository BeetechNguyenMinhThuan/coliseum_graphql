import React from "react";
import { twMerge } from "tailwind-merge";
import classNames from "@/utils/classNames.ts";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
}

function ButtonCommon(props: ButtonProps) {
  const {
    children,
    type = "button",
    isLoading,
    className = "",
    ...rest
  } = props;
  const child = isLoading ? (
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      {...rest}
      className={classNames(
        `flex gap-x-2 border-2 bg-teal-300 px-5 py-1`,
        isLoading ? "pointer-events-none opacity-50" : "",
        className,
      )}
    >
      {child}
    </button>
  );
}

export default ButtonCommon;
