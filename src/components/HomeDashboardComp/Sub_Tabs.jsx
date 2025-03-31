import React from 'react'

const Sub_Tabs = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 mx-5 gap-3'>
      <div className='bg-white shadow-sm rounded-sm px-4 py-10'>
        <p className='text-md '>Total Users</p>
      </div>
      <div className='bg-white shadow-sm rounded-sm px-4 py-10'>
        <p className='text-md '>Current Learning Track</p>
      </div>
      <div className='bg-white shadow-sm rounded-sm px-4 py-10'>
        <p className='text-md '>Tests Taken</p>
      </div>
      <div className='bg-white shadow-sm rounded-sm px-4 py-10'>
        <p className='text-md '>Current Score</p>
      </div>
    </div>
  )
}

export default Sub_Tabs
