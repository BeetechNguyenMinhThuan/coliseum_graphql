import { useTranslation } from "react-i18next";
import { SideBarTournament } from "@/components/SideBar/SideBarTournament.tsx";
import { MyDatePicker } from "@/components/DatePicker/MyDatePicker.tsx";

export function Test() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SideBarTournament />
      <div className="content flex-1">
        <MyDatePicker />
      </div>
    </>
  );
}
