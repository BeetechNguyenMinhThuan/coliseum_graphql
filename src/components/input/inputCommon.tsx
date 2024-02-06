import { useController } from "react-hook-form";
import { ReactNode } from "react";
import classNames from "@/utils/classNames.ts";

interface InputCommonProps {
  control: any;
  name: string;
  type: string;
  className?: string;
  error?: string;
  children?: ReactNode;
  placeholder?: string;
  disabled?: boolean | (() => boolean);
}

function InputCommon(props: InputCommonProps) {
  const {
    children,
    control,
    name,
    type = "text",
    className,
    error,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        {...field}
        {...rest}
        type={type}
        id={name}
        className={classNames(
          `border border-black pl-2 outline-none`,
          error ? "border-red-500 text-red-500" : "",
          children ? "pr-10" : "",
          className,
        )}
      />
      {error && <p className="text-red-500">{error}</p>}

      {children && (
        <span className="absolute left-[63%] top-1.5 cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
}

export default InputCommon;
