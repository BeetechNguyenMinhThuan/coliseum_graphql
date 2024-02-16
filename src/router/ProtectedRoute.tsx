import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN, getItemStorage } from "@/utils/localStorageHepler.ts";
import useAuth from "@/hooks/useAuth";

const ProtectedRoute = ({
  children,
}: {
  children: JSX.Element;
  meta?: any;
}) => {
  const haveToken = !!getItemStorage(ACCESS_TOKEN);
  const { user } = useAuth();
  if (!haveToken || Object.keys(user).length === 0) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
