// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import {
  FaUserGraduate,
  FaBook,
  FaRupeeSign,
  FaMoneyBillWave,
  FaTasks,
  FaUsers,
  FaCalendarAlt,
  FaClipboardList,
  FaPlusCircle,
} from "react-icons/fa";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import SAAdminLayout from "../../layouts/Salonadmin";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("daily");
  const [branch, setBranch] = useState("All");
  const [course, setCourse] = useState("All");
  const [batch, setBatch] = useState("All");
  const [stats, setStats] = useState({});

  // Dummy Data Simulation
  const fetchData = () => {
    const dummy = {
      daily: {
        pendingFees: 25000,
        upcomingBatches: 3,
        activeLeads: 12,
        pendingTasks: 5,
        totalStudents: 120,
        totalCourses: 8,
        monthlyRevenue: 85000,
        totalExpenses: 42000,
      },
      weekly: {
        pendingFees: 150000,
        upcomingBatches: 10,
        activeLeads: 35,
        pendingTasks: 18,
        totalStudents: 120,
        totalCourses: 8,
        monthlyRevenue: 510000,
        totalExpenses: 210000,
      },
      monthly: {
        pendingFees: 400000,
        upcomingBatches: 25,
        activeLeads: 80,
        pendingTasks: 40,
        totalStudents: 120,
        totalCourses: 8,
        monthlyRevenue: 1500000,
        totalExpenses: 720000,
      },
    };
    setStats(dummy[timeRange]);
  };

  useEffect(() => {
    fetchData();
  }, [timeRange, branch, course, batch]);

  const kpiCards = [
    {
      label: "Pending Fees",
      value: `₹${stats.pendingFees || 0}`,
      icon: <FaMoneyBillWave />,
    },
    {
      label: "Upcoming Batches",
      value: stats.upcomingBatches || 0,
      icon: <FaCalendarAlt />,
    },
    { label: "Active Leads", value: stats.activeLeads || 0, icon: <FaUsers /> },
    {
      label: "Pending Tasks",
      value: stats.pendingTasks || 0,
      icon: <FaTasks />,
    },
    {
      label: "Total Students",
      value: stats.totalStudents || 0,
      icon: <FaUserGraduate />,
    },
    {
      label: "Total Courses",
      value: stats.totalCourses || 0,
      icon: <FaBook />,
    },
    {
      label: "Monthly Revenue",
      value: `₹${stats.monthlyRevenue || 0}`,
      icon: <FaRupeeSign />,
    },
    {
      label: "Total Expenses",
      value: `₹${stats.totalExpenses || 0}`,
      icon: <FaClipboardList />,
    },
  ];

  const feeCollectionData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Fee Collection",
        data: [20000, 40000, 30000, 50000],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  const leadConversionData = {
    labels: ["Enquiries", "Leads", "Admissions"],
    datasets: [
      {
        label: "Lead Conversion",
        data: [50, 30, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const attendanceData = {
    labels: ["Present", "Absent", "On Leave"],
    datasets: [
      {
        label: "Attendance",
        data: [85, 10, 5],
        backgroundColor: ["#4CAF50", "#F44336", "#FFC107"],
      },
    ],
  };

  return (
    <SAAdminLayout>
      {" "}
      <div className="p-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            className="border p-2"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option>All Branches</option>
            <option>Branch 1</option>
            <option>Branch 2</option>
          </select>
          <select
            className="border p-2"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option>All Courses</option>
            <option>Course A</option>
            <option>Course B</option>
          </select>
          <select
            className="border p-2"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          >
            <option>All Batches</option>
            <option>Batch 1</option>
            <option>Batch 2</option>
          </select>
          <div className="ml-auto flex gap-2">
            {["daily", "weekly", "monthly"].map((range) => (
              <button
                key={range}
                className={`px-4 py-2 rounded ${
                  timeRange === range ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => setTimeRange(range)}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {kpiCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded shadow flex items-center gap-4"
            >
              <div className="text-3xl text-blue-500">{card.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{card.label}</p>
                <h2 className="text-xl font-bold">{card.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 mb-6">
          <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
            <FaPlusCircle /> Add Student
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
            <FaPlusCircle /> Add Lead
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center gap-2">
            <FaPlusCircle /> Record Expense
          </button>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">Fee Collection Trend</h3>
            <Line data={feeCollectionData} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">Lead Conversion</h3>
            <Bar data={leadConversionData} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">Attendance Overview</h3>
            <Doughnut data={attendanceData} />
          </div>
        </div>
      </div>
    </SAAdminLayout>
  );
}
