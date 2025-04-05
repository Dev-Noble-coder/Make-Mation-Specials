import React, { useState, useEffect } from "react";
import { Bell, Search, ChevronDown } from "lucide-react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Header = ({ location }) => {
  const API_BASE_URL = import.meta.env.VITE_ERP_TURBO_API_BASE_URL;
  const [shouldNavigate, setShouldNavigate] = useState(false);

  const navigate = useNavigate();

  const logoutUser = async () => {
    toast.success("Logging User Out");
    try {
      const response = await axios.post(
        `${API_BASE_URL}api/auth/logout`,
        {},
        {
          withCredentials: true, // Required to send cookies (access_token)
        }
      );

      console.log("User logged out:");
      setShouldNavigate(true);
      localStorage.removeItem("loginStatus");
      localStorage.removeItem("userName");
      toast.success("User Logged Out");
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (shouldNavigate) {
      const timeout = setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [shouldNavigate, navigate]); // Runs when `shouldNavigate` changes

  return (
    <header className=" h-16 px-5 flex items-center justify-between shadow-sm">
      <div className="flex-1 text-sm ">
        <h2>{location}Dashboard</h2>
      </div>
      {/* <div className="flex-2 flex items-center">
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Search here"
            className="w-full h-10 pl-10 pr-4 text-sm text-gray-700 bg-gray-50 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <Search 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            size={18} 
          />
        </div>
      </div> */}

      <div className="flex items-center space-x-6">
        <button className="relative p-2">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-3 ">
          <img
            src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          {/* <ChevronDown size={16} className="text-gray-600" /> */}
          <p
            className="text-red-600 cursor-pointer"
            onClick={() => {
              logoutUser();
            }}
          >
            LogOut
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
