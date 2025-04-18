import React, { useState } from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import Header from '../../components/Dashboard/Header'
import Welcome_Section from '../../components/HomeDashboardComp/Welcome_Section'
import Sub_Tabs from '../../components/HomeDashboardComp/Sub_Tabs'
import Learning_Track from '../../components/HomeDashboardComp/Learning_Track'

const home_dashboard = () => {
  
  return (
    <>
    <div className="flex ">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ">
        <Header location = 'Home '/>
        <Welcome_Section />
        <Sub_Tabs />
        <div className='flex flex-col lg:flex-row justify-center lg:gap-5 mx-6'>
          <div className='flex-1'>
          <Learning_Track />
          </div>
          <div className='flex-1'>
          <Learning_Track />
          </div>
      
        </div>
      </main>
    </div>
    </>
  )
}

export default home_dashboard
