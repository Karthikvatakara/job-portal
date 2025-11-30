import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/ui/Header'

function AppLayout() {
  return (
    <div>
        <div className='grid-background' ></div>
        <main className='min-h-screen'>
            <Header/>
      <Outlet/>
        </main>
        <div className='p-10  bg-gray-800 text-center mt-10'>it is the fooeter </div>
    </div>
  )
}

export default AppLayout
