import React from 'react';
import Cont from '../Content-cont/Cont';
import "../Home/Home.css";
import Card2 from '../Card2/Card2';
import img from "./img3.png";

function Contact() {
  const linkdinUrl = "https://www.linkedin.com/in/vikas-rathore-a799432b9/";
  const GithubUrl = "https://github.com/vikasrath";
  const information = [
    {
      name: "Address ",
      value: " Abhor Road Bypass Near Bus Stand,MUKTSAR ,PUNJAB",
      icon: "fa-solid fa-location-dot"
    },
    {
      name: "Email",
      value: "vikasrathote01322@gmail.com",
      icon: "fa-regular fa-envelope"
    },
    {
      name: "Phone",
      value: "+917009191019",
      icon: "fa-solid fa-phone-volume"
    },
  ];

  return (
    <Cont>
      <div className='tablets:max-w-[80%] tablets:mx-auto tablets:mt-3 min-h-[500px] tablets:flex  text-[#ffffff] rounded-none tablets:rounded-3xl shadow-4xl pe-4 tablets:pe-0'>
        <div className='  pt-14 min-h-[500px] pb-10 ps-5 tablets:ps-0 shadow-xl w-full tablets:w-[55%]'>
          <h1 className='text-center text-4xl  font-serif animated-box py-3'>Get in Touch</h1>
          {information.map((item) => (
            <div className='mt-12 ml-7' key={item.name}>
              <p className='text-2xl  bold'>
                <span className=' text-[#2aeecd] text-3xl me-4'>
                  <i className={`${item.icon}`}></i>
                </span>{item.name}
              </p>
              <p className='mt-2 text-xl'>{item.value}</p>
            </div>
          ))}
        </div>

        <div className='min-h-[500px] shadow-xl p-3 w-full tablets:w-[45%] flex flex-col ml-5 justify-around pt-5'>
          <div className='flex justify-center'>
            <img src={img} alt="vikas" className='rounded-full w-[50%] tablets:w-[35%] mx-auto ' />
          </div>
          <Card2 
            title="LinkedIn" 
            content="Click and visit my LinkedIn account" 
            link={linkdinUrl} 
            icon="fa-brands fa-linkedin"
          />
          <Card2 
          
            title="Github" 
            iconcolor=""
            content="Click and visit my Github account" 
            link={GithubUrl} 
            icon="fa-brands fa-github"
          />
        </div>
      </div>
    </Cont>
  );
}

export default Contact;
