import React, { useState } from "react";
import { Home, Users, MessageSquare, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import makemationLogo from '../../assets/img/makemationLogo.png'


function Sidebar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#1a1a1a] text-gray-300 flex flex-col">
        {/* Logo */}
        <div className="py-5 pl-8">
         <img src={makemationLogo} alt="" />
        </div>

        <hr className="mx-5 opacity-15" />

        {/* Sidebar Menu */}
        <div className="flex flex-col h-full">
          <nav className="flex flex-col flex-grow pt-5">
            {/* General Section */}
            <div className="mb-3">
              <p className="px-8 text-xs font-semibold text-[#CD950E] uppercase tracking-wider mb-2">
                GENERAL
              </p>
              <MenuItem
                icon={Home}
                name="Home Dashboard"
                active={location.pathname === "/home_dashboard"}
                to="/home_dashboard"
                onClick={setActiveItem}
              />
              <MenuItem
                icon={Users}
                name="My Profile"
                active={location.pathname === "/profile_dashboard"}
                to="/profile_dashboard"
                onClick={setActiveItem}
              />
            </div>

            <hr className="mx-5 opacity-15" />

            {/* Collaboration Section */}
            <div className="my-5">
              <p className="px-8 text-xs font-semibold text-[#CD950E] uppercase tracking-wider mb-2">
                DEVELOPMENT
              </p>
              <MenuItem
                icon={MessageSquare}
                name="Learning"
                active={location.pathname === "/learning_dashboard"}
                to="/learning_dashboard"
                onClick={setActiveItem}
              />
              <MenuItem
                icon={FileText}
                name="Test"
                active={location.pathname === "/test_dashboard"}
                to="/test_dashboard"
                onClick={setActiveItem}
              />
            </div>

            <hr className="mx-5 opacity-15" />

            {/* Rankings Section */}
            <div className="mt-5">
              <p className="px-8 text-xs font-semibold text-[#CD950E] uppercase tracking-wider mb-2">
                TOP RANKINGS
              </p>
              <MenuItem
                icon={Users}
                name="Leaderboard"
                active={location.pathname === "/leaderboard_dashboard"}
                to="/leaderboard_dashboard"
                onClick={setActiveItem}
              />
            </div>

            {/* Push Logout to Bottom */}
            <div className="mt-auto ">
              <MenuItem
                icon={Users}
                name="LogOut"
                active={location.pathname === "/logout_dashboard"}
                to="/logout_dashboard"
                onClick={setActiveItem}
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

// MenuItem Component
function MenuItem({ icon: Icon, name, to, active, onClick }) {
  return (
    <Link
      to={to}
      onClick={() => onClick(name)}
      className={`flex items-center px-7 py-4 text-sm cursor-pointer transition-all duration-200 relative
        ${
          active
            ? "bg-gray-800 text-white before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#CD950E]"
            : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
        }`}
    >
      <Icon className={`h-5 w-5 mr-3 ${active ? 'text-[#CD950E]' : ''
      }`} />
      <span>{name}</span>
    </Link>
  );
}

export default Sidebar;
