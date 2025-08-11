import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/homepage/home";
import SalonadminLogin from "../pages/auth/SALogin";



const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* salon admin routes */}
      <Route path="/salon-admin/login" element={<SalonadminLogin />} />

    </Routes>
  );
};

export default PublicRoutes;
