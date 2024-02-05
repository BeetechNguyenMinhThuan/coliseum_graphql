import React from "react";

interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
  isRequired?: boolean;
}

function LabelCommon(props: LabelProps) {
  const { children, htmlFor, isRequired, className = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`cursor-pointer font-medium ${className}`}
    >
      {children}
      {isRequired && <span className="font-bold text-red-700">*</span>}
    </label>
  );
}

export default LabelCommon;
