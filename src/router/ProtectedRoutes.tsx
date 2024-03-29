import { Navigate, Outlet } from "react-router-dom";
import { pathConstants } from "./pathConstants";
import { useSelector } from "react-redux";
import { RootState } from "../store/root-state.type";

export const ProtectedRoutes = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return <>{isLoggedIn ? <Outlet /> : <Navigate to={pathConstants.LOGIN} />}</>;
};
