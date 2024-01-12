import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import { useState } from "react";

interface MyDatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export function MyDatePicker({ selectedDate, onDateChange }: MyDatePickerProps) {
  const { i18n } = useTranslation();
  const dateFormat = i18n.language === "ja" ? "yyyy年MM月dd日" : "dd/MM/yyyy";

  return (
    <DatePicker
      showIcon
      className="border-2 text-xl flex items-center"
      selected={selectedDate}
      locale={i18n.language}
      dateFormat={dateFormat}
      onKeyDown={(e) => e.preventDefault()}
      onChange={onDateChange}
    />
  );
}
