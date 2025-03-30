import React from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import Header from '../../components/Dashboard/Header'
import Welcome_Section from '../../components/HomeDashboardComp/Welcome_Section'


const profile_dashboard = () => {
  return (
    <div className="flex">
    <Sidebar />
    <main className="flex-1 overflow-y-auto ">
      <Header location = 'Profile '/>
      <Welcome_Section />
    </main>
  </div>
  )
}

export default profile_dashboard
