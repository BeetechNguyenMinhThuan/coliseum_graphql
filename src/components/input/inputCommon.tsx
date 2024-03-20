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
    <>
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
      {children && <>{children}</>}
    </div>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}

export default InputCommon;
