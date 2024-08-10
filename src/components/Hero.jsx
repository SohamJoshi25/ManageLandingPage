import React from 'react'

const Hero = () => {
  return (
    <span className='mx-auto mt-12 flex flex-col-reverse md:flex-row p-4 space-y-6 md:space-y-0 md:space-x-20 md:w-3/4'>
      <div className="flex flex-col space-y-14 p-4 items-center text-center md:text-left md:w-1/2">
        <h2 className='text-5xl font-bold text-indigo-950'>Bring Everyone together to build better projects.</h2>
        <p className='text-xl font-light text-slate-450'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger teem goals in view.</p>
        <button className='bg-orange-500 px-6 py-2 block rounded-full shadow-md  md:w-1/3    hover:bg-orange-600 text-white'>
          Contact Us
        </button>
      </div>
      <div className='md:w-1/2 pb-3'>
        <img src="./illustration-intro.svg" alt="" />
      </div>
    </span>
  )
}
export default Hero;
