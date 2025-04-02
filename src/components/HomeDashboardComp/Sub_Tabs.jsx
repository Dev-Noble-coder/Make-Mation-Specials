import React from "react";

const Sub_Tabs = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-5 gap-3 text-[#494949]">
      <div className="bg-[#F7FDF1] shadow-sm rounded-sm px-4 ">
        <p className="text-sm py-3 font-semibold">Total Users</p>
        <p className="text-3xl  font-semibold pb-2">4000</p>
        <p className="text-[12px] pb-3 ">
          <span className="text-[#1DD75B]">+30%</span> from last month
        </p>
      </div>
      <div className="bg-[#F1F7FE] shadow-sm rounded-sm px-4 ">
        <p className="text-sm py-3 font-semibold">Current Learning Track</p>
        <p className="text-3xl  font-semibold pb-2">CSS</p>
        <p className="text-[12px] pb-3 ">
          <span className="text-[#1DD75B]">+30%</span> from last month
        </p>
      </div>
      <div className="bg-[#F2FDF5] shadow-sm rounded-sm px-4 py">
        <p className="text-sm py-3 font-semibold">Total Test Taken</p>
        <p className="text-3xl  font-semibold pb-2">400</p>
        <p className="text-[12px] pb-3 ">
          <span className="text-[#1DD75B]">+30%</span> from last month
        </p>
      </div>
      <div className="bg-[#FCF1FD] shadow-sm rounded-sm px-4 ">
        <p className="text-sm py-3 font-semibold">Current Score</p>
        <p className="text-3xl  font-semibold pb-2">100</p>
        <p className="text-[12px] pb-3 ">
          <span className="text-[#1DD75B]">+30%</span> from last month
        </p>
      </div>
    </div>
  );
};

export default Sub_Tabs;
