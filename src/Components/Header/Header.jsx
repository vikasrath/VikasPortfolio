import React from 'react';
import { Link } from 'react-router-dom';
import "../Home/Home.css"
function Header({classname="hidden"}) {
    const NavbarItems = [
        { name: "Home", path: "/",icon : "fa-solid fa-house-user" },
        { name: "About", path: "/about",icon : "fa-solid fa-address-card" },
        { name: "Projects", path: "/projects",icon : "fa-solid fa-diagram-project" },
        { name: "Contact", path: "/Contact",icon : "fa-solid fa-phone-volume" },
    ];

    return (
        <div className={` ${classname}   bg-black border tablets:flex tablets:flex-col tablets:w-1/4 h-[300px] tablets:min-h-screen shadow-lg  p-5`}>
             
            <div className='  ps-4 font-bold text-[#ffffff] text-3xl pb-5 font-serif flex ' >
                <p>vikas</p>
                <span className=' ps-3 pt-1 myshadow text-[#f7a438] text-2xl bg-[#000000b7]'><i className="fa-regular fa-sun"></i></span>
            </div>
            <ul className='w-full'>
                {NavbarItems.map((item) => (
                     <Link key={item.name} to={item.path}>
                        <li
                            key={item.name}
                            className='w-full  text-[#ffffff]  tablets:text-[#ffffff] text-lg p-3 my-2 rounded  cursor-pointer transition duration-300 ease-in-out hover:bg-[#EA580c] hover:text-[#ffffff] ms-3'
                        >    <i className={`${item.icon} ps-3 pe-4`}></i>
                            {item.name}
                        </li>
                   </Link>
                ))}
            </ul>
        </div>
    );
}

export default Header;
