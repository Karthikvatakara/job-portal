import React from 'react'

function LandingPage() {
  return (
    <main className='flex flex-col justify-center text-center items-center gap-10 sm:gap-20 py-2'>
        <section className=' '>
            <h1 className='p-2 flex flex-col items-center text-2xl sm:text-5xl font-extrabold lg:text-6xl'>FInd Your Dream Job <span className='flex items-center gap-4 sm:gap-6'> and Get <img src="/logo.png" alt="" class='h-28 sm:h-48 lg:h-32'  /> </span></h1>
            <p className='block justify-center'>Explore thousands of job listings or find the perfect candidate</p>
        </section>
    </main>
  )
}

export default LandingPage
