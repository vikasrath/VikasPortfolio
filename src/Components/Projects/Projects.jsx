import React from 'react';
import Cont from '../Content-cont/Cont';
import Card2 from '../Card2/Card2';
import chatappaimg from "./chatpng.png"

function Projects() {
  return (
    <Cont className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-center text-gray-600 mb-8">
          Here are some of the projects I've worked on, showcasing my skills and technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 ">
          {/* Example Card */}
          <Card2 
            thumbnail={chatappaimg} 
            title="Project 1" 
            content="A brief description of Project 1, highlighting the main features and technologies used." 
            technologies={["React", "Tailwind CSS", "API"]}
            links={{
              demo: "https://demo-link.com",
              code: "https://github.com/your-repo"
            }}
          />
           <Card2 
            thumbnail={chatappaimg} 
            title="Project 1" 
            content="A brief description of Project 1, highlighting the main features and technologies used." 
            technologies={["React", "Tailwind CSS", "API"]}
            links={{
              demo: "https://demo-link.com",
              code: "https://github.com/your-repo"
            }}
          />
           <Card2 
            thumbnail={chatappaimg} 
            title="Project 1" 
            content="A brief description of Project 1, highlighting the main features and technologies used." 
            technologies={["React", "Tailwind CSS", "API"]}
            links={{
              demo: "https://demo-link.com",
              code: "https://github.com/your-repo"
            }}
          />
           <Card2 
            thumbnail={chatappaimg} 
            title="Project 1" 
            content="A brief description of Project 1, highlighting the main features and technologies used." 
            technologies={["React", "Tailwind CSS", "API"]}
            links={{
              demo: "https://demo-link.com",
              code: "https://github.com/your-repo"
            }}
          />
          {/* Repeat <Card2> for each project */}
        </div>
      </div>
    </Cont>
  );
}

export default Projects;
