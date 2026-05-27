import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="mt-4 text-lg">I'm currently open to new opportunities. Feel free to reach out!</p>
        <a href="mailto:your-email@example.com" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-bold">Email Me</a>
      </div>
    </section>
  );
};

export default Contact;