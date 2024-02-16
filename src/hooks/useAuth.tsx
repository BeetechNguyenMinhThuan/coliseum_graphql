import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getUserInfo } from "@/utils/localStorageHepler.ts";

const useAuth = () => {
  const location = useLocation();
  const USER = useMemo(() => {
    const user = getUserInfo();
    return { ...user };
    // return { ...user, role: user.role?.sort().filter((role) => !!role) || [] };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return {
    user: USER,
    userId: USER.id,
    type: USER.type,
    role: USER.role,
    recyclerId: USER.recycler_id,
    municipalityCode: USER.municipality_code,
    isAuth: !!USER.id,
  };
};
export default useAuth;
