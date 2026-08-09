import { Monogram } from './Monogram';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 w-12 h-12">
            <Monogram />
          </div>
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#projects" className="hover-underline-animation">Projects</a>
            <a href="#contact" className="hover-underline-animation">Contact</a>
          </div>
          <div className="flex space-x-8">
            <a href="https://github.com/aleciaortiz923-star" target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center group">
              <FaGithub size={24} className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
              <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/alecia-ortiz-875921152/" target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center group">
              <FaLinkedin size={24} className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
              <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Alecia Ortiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
