import React from "react";
import { useController } from "react-hook-form";
import "./custom-checkbox.scss";
import classNames from "@/utils/classNames.ts";

interface CheckboxCommon {
  name: string;
  control?: any;
  children: React.ReactNode;
}

function CheckboxCommon(props: CheckboxCommon) {
  const { children, control, name = "" } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: false,
  });
  return (
    <label className="custom-checkbox cursor-pointer">
      <input type="checkbox" {...field} className="hidden" />
      <div className="flex items-center gap-x-2">
        <div
          className={classNames(
            `custom-checkbox-square flex h-full w-full items-center justify-center rounded-md border-2`,
            field.value ? "bg-green-400" : "bg-white",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4 text-center text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        {children && (
          <div {...field} className="cursor-pointer font-medium">
            {children}
          </div>
        )}
      </div>
    </label>
  );
}

export default CheckboxCommon;
