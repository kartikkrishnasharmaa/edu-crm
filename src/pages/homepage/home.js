import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaUserGraduate,
  FaMoneyBillWave,
  FaClipboardList,
  FaUsersCog,
  FaFileInvoice,
  FaChartBar,
  FaChalkboardTeacher,
  FaSms,
  FaRobot,
  FaDatabase,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-6 px-12 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1
            className="text-3xl font-extrabold tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sinfode CRM
          </motion.h1>
          <nav className="hidden md:flex space-x-8 text-lg font-semibold">
            <a href="#about" className="hover:text-gray-200">
              About
            </a>
            <a href="#modules" className="hover:text-gray-200">
              Modules
            </a>
            <a href="#reports" className="hover:text-gray-200">
              Reports
            </a>
            <a href="#pricing" className="hover:text-gray-200">
              Pricing
            </a>
            <a href="#contact" className="hover:text-gray-200">
              Contact
            </a>
          </nav>
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
        {menuOpen && (
          <ul className="md:hidden bg-blue-800 p-6 shadow-lg text-center space-y-4 text-lg font-semibold">
            <li>
              <a href="#about" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#modules" className="text-white">
                Modules
              </a>
            </li>
            <li>
              <a href="#reports" className="text-white">
                Reports
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('school-management.png')" }}
      ></section>
      <section
        className="bg-center mt-14 flex items-center justify-center text-center px-4"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="relative z-10 text-black max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            The Complete CRM for Multi-Institute Management
          </h2>
          <p className="text-lg mb-6">
            From admissions to analytics — manage your entire education business
            with Sinfode CRM.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/salon-admin/login"
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold"
            >
              SUPER ADMIN LOGIN
            </a>
            <a
              href="/branch-manager/login"
              className="px-6 py-3 bg-green-500 rounded-lg text-white font-semibold"
            >
              BRANCH MANAGER LOGIN
            </a>
            <a
              href="/custom-user/login"
              className="px-6 py-3 bg-indigo-500 rounded-lg text-white font-semibold"
            >
              CUSTOM USER LOGIN
            </a>
          </div>
        </motion.div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "120+", label: "Branches Managed" },
            { value: "25K+", label: "Students Enrolled" },
            { value: "50K+", label: "Leads Captured" },
            { value: "₹5Cr+", label: "Fees Collected" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="p-6 bg-white shadow rounded-lg"
            >
              <h3 className="text-3xl font-bold text-blue-700">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-6 bg-white text-center max-w-5xl mx-auto"
      >
        <h3 className="text-3xl font-bold mb-6">Why Choose Sinfode CRM?</h3>
        <p className="text-gray-700 leading-relaxed">
          Sinfode Multi-Institute CRM is a centralized cloud-based platform
          designed to manage all operations of multiple institutes — from
          admission, fee tracking, attendance, and leads to expense management,
          salaries, campaigns, reporting, and analytics.
        </p>
      </section>

      {/* Core Modules Section */}
      <section id="modules" className="py-16 px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Core Modules</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaUniversity size={40} />,
              title: "Branch Management",
              desc: "Create and manage multiple branches with access control.",
            },
            {
              icon: <FaUserGraduate size={40} />,
              title: "Student Management",
              desc: "Full student lifecycle — admission to graduation.",
            },
            {
              icon: <FaMoneyBillWave size={40} />,
              title: "Fee Management",
              desc: "Track payments, discounts, and generate invoices.",
            },
            {
              icon: <FaClipboardList size={40} />,
              title: "Attendance",
              desc: "Manual or biometric attendance with alerts.",
            },
            {
              icon: <FaUsersCog size={40} />,
              title: "Lead Management",
              desc: "Capture, tag, and follow up on leads.",
            },
            {
              icon: <FaFileInvoice size={40} />,
              title: "Invoice Management",
              desc: "Auto-generate GST-compliant invoices.",
            },
            {
              icon: <FaChartBar size={40} />,
              title: "Reports & Analytics",
              desc: "Download all institute data in Excel.",
            },
            {
              icon: <FaChalkboardTeacher size={40} />,
              title: "Campaigns",
              desc: "Run WhatsApp & event notifications.",
            },
          ].map((mod, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg text-center shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="text-blue-600 mb-4">{mod.icon}</div>
              <h4 className="font-bold text-lg mb-2">{mod.title}</h4>
              <p className="text-gray-600 text-sm">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Basic",
              price: "₹999/mo",
              features: ["Up to 1 Branch", "500 Students", "Basic Reports"],
            },
            {
              name: "Pro",
              price: "₹2999/mo",
              features: ["Up to 5 Branches", "5000 Students", "Full Modules"],
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: [
                "Unlimited Branches",
                "Unlimited Students",
                "Dedicated Support",
              ],
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-bold mb-4">{plan.name}</h4>
              <p className="text-3xl text-blue-700 font-bold mb-6">
                {plan.price}
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="text-gray-700">
                    ✔ {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block bg-blue-600 text-white py-2 rounded-lg"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-10 px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">About Sinfode</h3>
            <p className="text-sm">
              A powerful platform for managing multiple educational institutes
              from one place.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-gray-300">
                  Modules
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gray-300">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm">Email: info@sinfode.com</p>
            <p className="text-sm">Phone: +91 9876543210</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-white pt-5">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sinfode CRM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
