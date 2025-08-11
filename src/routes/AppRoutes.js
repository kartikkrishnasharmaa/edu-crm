import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import SalonAdminRoutes from "./SalonAdminRoutes"; // Assuming you have a separate file for salon admin routes

const AppRoutes = () => {
  return (
    <Router>
      <PublicRoutes />
      <SalonAdminRoutes />
    </Router>
  );
};

export default AppRoutes;