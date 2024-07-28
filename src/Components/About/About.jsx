import React from 'react';
import Cont from '../Content-cont/Cont';
import Card2 from '../Card2/Card2';
import skillsimg from "../About/skills.png";
import "../Home/Home.css";

function About() {

  const skills = ["HTML", "CSS", "GITHUB", "JavaScript", "React Js", "C Language", "Tailwind CSS"];
  
  return (
    <Cont>
      <div className='text-[#ffffff]  p-5 tablets:p-10 laptop:ms-12'>
        {/* Skills Section */}
        <div className='laptop:flex '>
          <div className='mt-8 laptop:w-[50%]'>
            <h1 className='text-4xl font-serif ps-6'><i class="  text-[#29e9df]   pe-3 fa-regular fa-circle-check"></i>Skills</h1>
            {skills.map((skillName) => (
              <button key={skillName} className='animated-box px-6 py-3 tablets:px-8 tablets:py-4 ms-5 mt-4'>{skillName}</button>
            ))}
          </div>
          <div className='mt-8 laptop:w-[50%]  laptop:p-7'>
            <img src={skillsimg} alt="skills" className='w-[50%] drop-shadow-2xl mx-auto laptop:w-[70%]' />
          </div>   
        </div>

        {/* Education Section */}
        <div className=' mt-5 p-5'>
          <h1 className='text-4xl font-serif border-bottom p-3'><i className=" text-[#EA580c]  laptop:pe-3 fa-solid fa-graduation-cap"></i>Education</h1>
          <div className='mt-5'>
            <h2 className='text-3xl font-semibold'>Bachelor of Computer Application (BCA)</h2>
            <p className='text-lg'>Baba Farid Group Of Institutions Engineering And Technology,Bhatinda,</p>
            <p className='text-sm'>2023 - 2026</p>
            <ul className='list-disc ml-5 mt-2'>
              <li>Relevant coursework: Web Development, Software Engineering, Database Management</li>
              <li>Projects: Developed a responsive portfolio website using React and Tailwind CSS.</li>
              <li>Activities: Member of the coding club, participated in hackathons.</li>
            </ul>
          </div>
          <div className='mt-5'>
            <h2 className='text-3xl font-semibold'>12th Class</h2>
            <p className='text-lg'>Government Senior Secondary School, Muktsar, Punjab</p>
            <p className='text-sm'>2022 - 2023</p>
            <ul className='list-disc ml-5 mt-2'>
              <li>Major subjects: Mathematics, History, Computer Science , Political Sceince</li>
              <li>Achievements: 87% in 12th, First Position in my clas</li>
            </ul>
          </div>
        </div>
      </div>
    </Cont>
  );
}

export default About;























// starting code



// import React from 'react'
// import Cont from '../Content-cont/Cont'
// // import Card from '../Card/Card'
// import Card2 from '../Card2/Card2'
// import skillsimg from "../About/skills.png"
// import "../Home/Home.css"

// function About() {

//   const skills = ["HTML", "CSS", "GITHUB", "JavaScript", "React Js", "C Language", "Tailwind CSS"]
//   return (
//     <Cont >
//       <div className=' text-[#ffffff] border   p-5 tablets:p-10 laptop:ms-12'>
//         {/* skills....section */}
//         <div className=' laptop:flex  border'>
//           <div className='mt-8  laptop:w-[50% ]'>
//           <h1 className=' text-4xl  font-serif '>Skills</h1>
//             {skills.map((skillName) => (
//               <button key={skillName} className=' animated-box  px-6 py-3 tablets:px-8  tablets:py-4 ms-5 mt-4'>{skillName}</button>
//             ))}
//           </div>
//           <div className='mt-8 laptop:w-[50%]'>
//               <img src={skillsimg} alt="skills" className=' w-[50%]  drop-shadow-2xl mx-auto laptop:w-[80%]' />
//           </div>   
//         </div>
//         {/* Education....section */}
//         <div className='border mt-5'>
//           <h1 className='text-4xl font-serif'>Education</h1>

//         </div>

//       </div>
//     </Cont>
//   )
// }

// export default About