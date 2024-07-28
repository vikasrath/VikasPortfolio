import React from 'react'
import { useState } from 'react';
import Header from '../Header/Header';

function Cont({ children }) {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  }
  return (
    <div className='  bg-[#000000f6] w-full block   max-h-screen overflow-auto '>
      <div className=' w-full bg-[#EA580c] text-center py-3 text-[#ffffff] text-xl  font-serif'> Most Welcome To You</div>
      <button
        onClick={handleMenu}
        className='tablets:hidden absolute top-4 left-4 text-2xl'>
        <i className={`${open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i>
      </button>
        {/* left side */}
      <div className={`absolute top-14 left-0  bg-white ${open ? "block" : "hidden"} tablets:hidden`}>
        <Header classname='h-full  p-16 shadow-md rounded-lg tablets:rounded-b-md ' />
      </div>
      {/* right side */}
      {children}
    </div>
  )
}

export default Cont