import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';

const Header = ({location}) => {
  return (
    <header className=" h-16 px-4 flex items-center justify-between  bg-gray-100">
    <div className='flex-1 text-xl pl-4'>
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

        <div className="flex items-center space-x-3 pr-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          {/* <ChevronDown size={16} className="text-gray-600" /> */}
          <p className='text-red-600'>LogOut</p>
        </div>
      </div>
    </header>
  );
};

export default Header;