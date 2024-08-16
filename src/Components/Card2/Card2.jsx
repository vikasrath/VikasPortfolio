import React from 'react';
import "../Home/Home.css";

function Card2({ title, content, link, icon ,btnName="Connect"}) {
  return (
    <div className='  green-border  rounded-lg p-4 mt-4 w-[70%] mx-auto tablets:w-full  min-h-[180px]'>
      <div className={` my-auto text-4xl`}>
        <p>
          <i className={`${icon}`}></i>
          <h3 className='text-2xl inline ps-3 font-semibold mb-2 text-white'>{title}</h3>
        </p>
      </div>
      <p className='text-[#ffffff] pt-4 mb-4'>{content}</p>
    
        <button class="button-88" role="button">
        <a href={link} className=' text-white '>{btnName}</a>
        </button>

    </div>
  );
}

export default Card2;


