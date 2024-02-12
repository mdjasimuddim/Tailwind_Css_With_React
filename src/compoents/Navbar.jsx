import React from 'react'
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
// import CartCountBadge from "./CartCountBadge";

const Navbar = () => {
  return (
    <div className='container hidden lg:block'>
        <div className='flex justify-between items-center py-8'>
            <h1 className='text-4xl font-medium text-[#ff7720]'>Food_Hurt</h1>
            <div className='relative w-full max-w-[500px]'>
                <input type="text" placeholder='Search Product....' className='bg-[#f2f3f5] w-full border-none outline-none px-6 py-3 rounded-[30px]'/>
                <BsSearch className='absolute top-0 right-0 mt-4 mr-5' size={20}/>
            </div>
            <div className='flex gap-4'>
                <div className='icon__wrapper'>
                    <AiOutlineUser />
                </div>
                <div className='icon__wrapper'>
                    <AiOutlineShoppingCart />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar