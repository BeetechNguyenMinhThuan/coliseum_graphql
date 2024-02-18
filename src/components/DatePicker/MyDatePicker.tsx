import { useTranslation } from "react-i18next";
import ReactDatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { ja, vi } from "date-fns/locale";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ja", ja);
registerLocale("vi", vi);

export function MyDatePicker({ control, ...props }) {
  const { i18n } = useTranslation();
  const dateFormat = i18n.language === "ja" ? "yyyy年MM月dd日" : "dd/MM/yyyy";

  return (
    <Controller
      control={control}
      name={props.name}
      defaultValue={new Date()}
      render={({ field: { value, ...fieldProps } }) => (
        <ReactDatePicker
          showIcon
          {...fieldProps}
          selected={value}
          locale={i18n.language}
          dateFormat={dateFormat}
          className="h-full w-full border-2 text-xl"
          onKeyDown={(e) => {
            e.preventDefault();
          }}
        />
      )}
    />
  );
}
