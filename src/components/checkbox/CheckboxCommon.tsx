import React from "react";

interface CheckboxCommon {
  checked: boolean;
  onClick: () => void;
  name: string;
  children: React.ReactNode;
}

function CheckboxCommon(props: CheckboxCommon) {
  const { children, checked = false, name = "", onClick } = props;
  return (
    <div className="flex gap-x-2">
      <div
        onClick={onClick}
        className={`inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded border-2 text-white ${checked ? "border-green-600 bg-green-400" : ""}`}
      >
        <input name={name} type="checkbox" className="hidden" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4 text-center"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </div>
      {children && (
        <div onClick={onClick} className="cursor-pointer font-medium">
          {children}
        </div>
      )}
    </div>
  );
}

export default CheckboxCommon;
