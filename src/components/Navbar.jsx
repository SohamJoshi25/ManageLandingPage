import React from 'react'

const links = ["Price","Product","About Us","Careers","Community"]

const Navbar = () =>{
    return (
        <nav className=' flex flex-row justify-around mx-8 px-8 p-8 text-lg items-center'>
            <img src="./logo.svg" alt="" />
            <div className='flex flex-rows space-x-8'>
                {links.map(element => {
                    return <a href="#">{element}</a>
                })}
            </div>
            <button className='bg-orange-500 px-6 py-2  text-white rounded-full shadow-md'>
                Contact Us
            </button>
        </nav>
    )
}

export default Navbar;