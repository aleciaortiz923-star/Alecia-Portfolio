import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Project One</h3>
            <p className="mt-2">A brief description of the first project.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Project Two</h3>
            <p className="mt-2">A brief description of the second project.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Project Three</h3>
            <p className="mt-2">A brief description of the third project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;