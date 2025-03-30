import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "../../components/Dashboard/Header";
import Welcome_Section from "../../components/HomeDashboardComp/Welcome_Section";

const learning_dashboard = () => {
  return (
    <>
      <div className="hidden md:flex">
        <Sidebar />
        <main className="flex-1 overflow-y-auto ">
          <Header location="Learning " />
          <Welcome_Section />
        </main>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen sm:hidden">
        <p>Not available on mobile screens</p>
        <p>Kindly view on a tablet or laptop</p>
      </div>
    </>
  );
};

export default learning_dashboard;
