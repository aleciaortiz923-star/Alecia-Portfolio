import React from 'react';
import Image from 'next/image';

const projects = [
  {
    name: 'Skins-tric',
    description: 'An e-commerce site for skincare products.',
    link: 'https://skinstric-phi.vercel.app',
    image: '/skinstric.png',
  },
  {
    name: 'Summar-AI-se',
    description: 'An AI-powered summarization tool.',
    link: 'https://summarise-cyan.vercel.app',
    image: '/summarist.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="block shadow-lg rounded-lg">
              <div
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="z-0 transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-25 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
                <div className="relative z-10 flex flex-col justify-end h-full p-6">
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <p className="mt-2 text-white">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
