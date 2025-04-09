import React, { useState } from "react";
import LeftSide from "../components/AuthComp/LeftSide";
import RightSide from "../components/AuthComp/RightSide";

function Create_Account() {
  return (
    <div className="flex min-h-screen bg-gray-50 ">
      <LeftSide />

      {/* Right side - Form */}
      <RightSide />
    </div>
  );
}

export default Create_Account;
