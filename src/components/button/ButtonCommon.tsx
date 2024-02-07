import React from "react";
import classNames from "@/utils/classNames.ts";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
  href?: string;
  kind?: string;
}

function ButtonCommon(props: ButtonProps) {
  const {
    children,
    type = "button",
    isLoading,
    className = "",
    href,
    ...rest
  } = props;
  const child = isLoading ? (
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
  ) : (
    children
  );

  let defaultClass =
    "flex items-center justify-center gap-x-2 border-2 bg-primary px-5 py-1 font-semibold";

  switch (rest.kind) {
    case "primary":
      defaultClass += "bg-primary text-white";
      break;
    case "secondary":
      defaultClass += "bg-secondary text-white";
      break;
    default:
      break;
  }

  if (href) {
    return (
      <Link className={classNames(defaultClass, className)} to={href}></Link>
    );
  }

  return (
    <button
      type={type}
      {...rest}
      className={classNames(
        defaultClass,
        isLoading ? "pointer-events-none opacity-50" : "",
        className,
      )}
    >
      {child}
    </button>
  );
}

export default ButtonCommon;
