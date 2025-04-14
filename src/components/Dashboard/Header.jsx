import React, { useState, useEffect } from "react";
import { Bell, Search, ChevronDown, Menu } from "lucide-react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import MobileSidebar from "./MobileSidebar/MobileSidebar";

const Header = ({ location }) => {
  const [isToggled, setisToggled] = useState(false);

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
    <>
    

    <header className=" h-16 px-5 flex items-center justify-between shadow-sm ">
    
      <div className="flex-1 text-sm flex gap-2 justify-start items-center">
      <div className="sm:hidden ">
        <Menu size={20} className="text-gray-600" onClick={() => setisToggled(true)} />
      </div>
        <h2 className="text-[#222]">{location}Dashboard</h2>
      </div>
      <div className="fixed left-0 top-0 z-50">
      {isToggled ? <MobileSidebar/> : ''} 
      </div>

      <div className="flex items-center space-x-6 ">
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
    </>
  );
};

export default Header;
