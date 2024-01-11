import { useTranslation } from "react-i18next";
import { useState } from "react";
import DatePicker from "react-datepicker";

export function MyDatePicker() {
  const { i18n } = useTranslation();

  const [startDate, setStartDate] = useState(new Date());
  const dateFormat = i18n.language === "ja" ? "yyyy年MM月dd日" : "dd/MM/yyyy";

  const handleDateChange = (date: any) => {
    setStartDate(date);
    // const formattedDate = date.toISOString().split("T")[0]; //Y-m-d
    // const formattedDate = date.toISOString().split(".")[0].replace("T", " "); //Y-m-d H:i:s
    // const formattedDate = date.getTime(); //timestamp
  };
  // @ts-ignore
  return (
    <DatePicker
      showIcon
      className="border-2 text-2xl"
      selected={startDate}
      locale={i18n.language}
      dateFormat={dateFormat}
      onKeyDown={(e) => {
        e.preventDefault();
      }}
      onChange={handleDateChange}
    />
  );
}
