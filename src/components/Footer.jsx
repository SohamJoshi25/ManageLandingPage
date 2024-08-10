import React from 'react'

function Footer() {
  return (
    <div className='bg-indigo-950 flex flex-row justify-center space-x-40 text-sm text-white p-4 py-10 '>
      <div>
        <img src="./logo-white.svg" alt="" className='invert-0' />
      </div>
      <div className='flex flex-col space-y-3 text-nowrap'>
        <a href="#">Home</a>
        <a href="#">Pricing</a>
        <a href="#">Products</a>
        <a href="#">About Us</a>
      </div>
      <div className='flex flex-col space-y-3 text-nowrap'>
        <a href="#">Career</a>
        <a href="#">Community</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div>
        <input type="text" className='rounded-full h-8 placeholder:text-center' placeholder='Your Feedback' />
        <button className='bg-orange-500 px-6 py-2 ml-4 text-white  rounded-full shadow-md'>Go
            </button>
        <p className='mt-14 font-light text-slate-100'>Copywight 2020. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer;