import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaTools,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaGift,
  FaUsers,
  FaWallet,
  FaUserTie,
  FaMoneyBillWave,
  FaCashRegister,
  FaHome,
  FaPercent,
  FaReceipt,
  FaFileAlt,
  FaUserFriends,
  FaBriefcase,
  FaLayerGroup,
  FaCreditCard,
} from "react-icons/fa";

const Adminsidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const selectedBranch = useSelector((state) => state.branch.selectedBranch);

  const toggleSubCategory = (category) => {
    setOpenMenu(openMenu === category ? null : category);
  };

  const handleNavigation = (link, e) => {
    if (!link || link === "/") {
      e.preventDefault();
      alert("This page is under construction and will be available soon!");
      return;
    }
    toggleSidebar();
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      link: selectedBranch
        ? `/sinfodeadmin/dashboard?branchId=${selectedBranch}`
        : "/sinfodeadmin/dashboard",
    },
    {
      name: "Branch Management",
      icon: <FaHome />,
      link: "/sinfodeadmin/branch-management",
    },
    {
      name: "Student Management",
      icon: <FaUsers />,
      subMenu: [
        { name: "All Student", link: "/salonadmin/student-management/all" },
        { name: "Admission Process", link: "/salonadmin/student-management/admission" },
        { name:"ID Card", link: "/salonadmin/student-management/id-card" },
      ],
    },
    {
      name: "Courses & Batches",
      icon: <FaLayerGroup />,
       subMenu: [
        { name: "Courses", link: "/salonadmin/student-management/all" },
        { name: "Batches", link: "/salonadmin/student-management/admission" },
        { name:"Assign Student", link: "/salonadmin/student-management/id-card" },
      ],    },
    {
      name: "Fee Management",
      icon: <FaMoneyBillWave />,
      link: "/salonadmin/fee-management",
    },
    {
      name: "Attendance",
      icon: <FaUserFriends />,
      link: "/salonadmin/attendance",
    },
    {
      name: "Lead Management",
      icon: <FaUserTie />,
      link: "/salonadmin/lead-management",
    },
    {
      name: "Expense Management",
      icon: <FaReceipt />,
      link: "/salonadmin/expense-management",
    },
    {
      name: "Salary Management",
      icon: <FaWallet />,
      link: "/salonadmin/salary-management",
    },
    {
      name: "Invoice Management",
      icon: <FaFileAlt />,
      link: "/salonadmin/invoice-management",
    },
    {
      name: "Access Management",
      icon: <FaWallet />,
      link: "/salonadmin/access-management",
    },
    {
      name: "Campaigns",
      icon: <FaGift />,
      link: "/salonadmin/campaigns",
    },
    {
      name: "Reports & Analytics",
      icon: <FaFileAlt />,
      subMenu: [
        { name: "Fee Report", link: "/salonadmin/reports-analytics/fees" },
        {
          name: "Attendance Report",
          link: "/salonadmin/reports-analytics/attendance",
        },
      ],
    },
    {
      name: "Settings",
      icon: <FaTools />,
      link: "/salonadmin/settings",
    },
  ];

  return (
    <aside
      className={`fixed bg-black inset-y-0 text-white left-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out w-80 p-4 z-30 shadow-lg md:relative overflow-y-auto max-h-screen`}
    >
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.subMenu ? (
                <>
                  <div
                    className="flex items-center justify-between py-3 px-4 cursor-pointer hover:bg-gray-800 rounded-lg"
                    onClick={() => toggleSubCategory(item.name)}
                  >
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <span className="text-lg font-medium">{item.name}</span>
                    </div>
                    {openMenu === item.name ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>
                  {openMenu === item.name && (
                    <ul className="pl-8 space-y-2">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            to={subItem.link || "#"}
                            className={({ isActive }) =>
                              `flex items-center gap-4 py-2 px-4 rounded-lg transition-all duration-200 ease-in-out ${
                                isActive
                                  ? "bg-blue-500 text-white shadow-lg"
                                  : subItem.link && subItem.link !== "/"
                                  ? "hover:bg-blue-500 hover:text-white"
                                  : "opacity-50 cursor-not-allowed"
                              }`
                            }
                            onClick={(e) => handleNavigation(subItem.link, e)}
                          >
                            <span className="text-sm font-medium">
                              {subItem.name}
                            </span>
                            {(!subItem.link || subItem.link === "/") && (
                              <span className="text-xs ml-auto bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                Coming Soon
                              </span>
                            )}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.link || "#"}
                  className={({ isActive }) =>
                    `flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-200 ease-in-out ${
                      isActive
                        ? "bg-gray-600 border-1 border-white text-white shadow-2xl"
                        : item.link && item.link !== "/"
                        ? "hover:bg-gray-800 hover:text-white"
                        : "opacity-50 cursor-not-allowed"
                    }`
                  }
                  onClick={(e) => handleNavigation(item.link, e)}
                >
                  {item.icon}
                  <span className="text-lg font-medium">{item.name}</span>
                  {(!item.link || item.link === "/") && (
                    <span className="text-xs ml-auto bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  )}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Adminsidebar;
