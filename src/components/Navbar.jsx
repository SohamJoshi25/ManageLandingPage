import React from 'react'

const links = ["Price","Product","About Us","Careers","Community"]

const Navbar = () =>{
    return (
        <nav className='relative flex flex-row justify-between md:justify-around mx-8 px-8 p-8  z-10 items-center'>
            <img className='absolute z-0' src="./bg-tablet-pattern.svg" alt="" />
            <img className=' z-10' src="./logo.svg" alt="" />
            <div className='hidden md:flex flex-rows md:text-sm lg:text-lg space-x-8  z-10'>
                {links.map(element => {
                    return <a href="#">{element}</a>
                })}
            </div>
            <button className='bg-orange-500 px-6 py-2 md:text-sm lg:text-lg  text-white rounded-full shadow-md hover:bg-orange-600  z-10'>
                Contact Us.
            </button>
        </nav>
    )
}

export default Navbar;