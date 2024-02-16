import { ReactNode, useState } from "react";
import { useController } from "react-hook-form";
import classNames from "@/utils/classNames.ts";

interface TextAreaCommonProps {
  control: any;
  name: string;
  className?: string;
  error?: string;
  children?: ReactNode;
  placeholder?: string;
  maxLength?: number;
}

function TextAreaCommon(props: TextAreaCommonProps) {
  const { children, control, name, maxLength, className, error, ...rest } =
    props;
  const [charCount, setCharCount] = useState(0);
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    field.onChange(inputValue);
    setCharCount(inputValue.length);
  };
  return (
    <div className="relative">
      <textarea
        {...field}
        {...rest}
        maxLength={maxLength}
        onChange={handleChange}
        className={classNames(`h-[250px] w-full border-2 p-2 outline-none`)}
      ></textarea>

      {maxLength && (
        <div className="absolute bottom-[12px] right-[11px]">
          <span>
            {charCount}/{maxLength} 性ス
          </span>
        </div>
      )}
    </div>
  );
}

export default TextAreaCommon;
