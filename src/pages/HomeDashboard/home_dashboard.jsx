import React from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import Header from '../../components/Dashboard/Header'
import Welcome_Section from '../../components/HomeDashboardComp/Welcome_Section'
import Sub_Tabs from '../../components/HomeDashboardComp/Sub_Tabs'

const home_dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ">
        <Header location = 'Home '/>
        <Welcome_Section />
        <Sub_Tabs />
      </main>
    </div>
  )
}

export default home_dashboard
