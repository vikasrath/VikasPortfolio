import React from 'react'
import "../Home/Home.css"
function Card({  className, image, content, title }) {
  return (
    <div className={`${className}  min-h-[80%] w-full tablets:w-full  tablets:max-w-[650px] max-w-[500px] mx-auto  shadow-xl flex flex-col tablets:flex-row animated-box   p-6`}>
      
      <div className='w-full tablets:w-[50%] flex justify-center'>
        <img src={image} className='w-full max-w-[180px] mx-auto rounded-full' alt="Profile" />
      </div>
      <div className='mt-4 tablets:mt-0 tablets:ml-4 w-full tablets:w-[50%] text-center tablets:text-left'>
        <div className='text-4xl  font-semibold text-[#ffffff]'>
          {title} <span className=' text-4xl text-orange-500'>Vikas <i className="fa-brands fa-phoenix-framework"></i></span>
        </div>
        <p className='mt-4  pb-4 tablets:pb-0 text-xl text-[#ffffff]'>
          {content}
        </p>
      </div>
    </div>
  )
}

export default Card
