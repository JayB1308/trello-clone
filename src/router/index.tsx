import { Routes, Route } from "react-router-dom";
import { pathConstants } from "./pathConstants";
import { Dashboard } from "../pages/Dashboard";
import { Project } from "../pages/Project";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route path={pathConstants.LOGIN} element={<Login />} />
      <Route path={pathConstants.REGISTER} element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path={pathConstants.HOME} element={<Dashboard />} />
        <Route
          path={`${pathConstants.PROJECT}/:projectId`}
          element={<Project />}
        />
      </Route>
    </Routes>
  );
};
