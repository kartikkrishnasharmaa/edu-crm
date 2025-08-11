import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Salondashboard from "../pages/sinfodeadmin/dashboard";
const SalonAdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/sinfodeadmin/dashboard"
        element={
          // <ProtectedRoute>
            <Salondashboard />
          // </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default SalonAdminRoutes;
