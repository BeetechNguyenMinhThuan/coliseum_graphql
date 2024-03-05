import { useTranslation } from "react-i18next";
import "./index.scss"

export function LoadingSpiner() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[300px] flex justify-center items-center">
    <span className="loader"></span>

    </div>
  );
}
