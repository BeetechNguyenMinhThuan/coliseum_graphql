import { useTranslation } from "react-i18next";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Controller } from "react-hook-form";

export function MyDatePicker({ control, onInputChangeDate, ...props }) {
  const { i18n } = useTranslation();
  const [startDate, setStartDate] = useState(new Date());
  const dateFormat = i18n.language === "ja" ? "yyyy年MM月dd日" : "dd/MM/yyyy";
  const handleDateChange = (date) => {
    setStartDate(date);
    onInputChangeDate("round_start_at", date);
    // const formattedDate = date.toISOString().split("T")[0]; //Y-m-d
    // const formattedDate = date.toISOString().split(".")[0].replace("T", " "); //Y-m-d H:i:s
    // const formattedDate = date.getTime(); //timestamp
  };
  return (
    // <DatePicker
    //   showIcon
    //   className="h-full w-full border-2 text-xl"
    //   selected={startDate}
    //   locale={i18n.language}
    //   dateFormat={dateFormat}
    //   onKeyDown={(e) => {
    //     e.preventDefault();
    //   }}
    //   onChange={handleDateChange}
    // />
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
