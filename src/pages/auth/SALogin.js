import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from '../../api/axiosConfig';
import logo from "../../assests/salon-logo.png";
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the styles for toast notifications

const Login = () => {
 

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1470617656/vector/ai-artificial-intelligence-chipset-on-circuit-board-in-futuristic-concept-suitable-for.jpg?s=612x612&w=0&k=20&c=_wC-pphyNI2muaUHG4N9JuYXxJEMDuzx56Dvzr8ZDUk=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for opacity effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative w-full max-w-md mt-6">
        <div className="bg-white shadow-lg p-8 rounded-md shadow-cyan-600 hover:shadow-indigo-700 transition duration-200">
          <div className="text-center mb-4">
            <img src={"https://www.sinfode.com/wp-content/uploads/2022/12/digital-marketing-institute-in-sikar.webp"} alt="Salon Logo" className="w-[200px] mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-6">SINFODE SUPER ADMIN</h2>
          <div className="space-y-9">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your mail"
                className="border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your Password"
                className="border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          {/* Submit Button */}
          <a href='/sinfodeadmin/dashboard'>
          <button className="w-full bg-cyan-600 text-white text-xl p-2 mt-4 rounded-md hover:bg-indigo-600 transition duration-200">
            Login
          </button>
          </a>
        </div>
      </div>

      {/* ToastContainer component to display toast notifications */}
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default Login;
