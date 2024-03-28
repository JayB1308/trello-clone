import { Navigate, Outlet } from "react-router-dom";
import { pathConstants } from "./pathConstants";
import { useSelector } from "react-redux";

export const ProtectedRoutes = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return <>{isLoggedIn ? <Outlet /> : <Navigate to={pathConstants.LOGIN} />}</>;
};
