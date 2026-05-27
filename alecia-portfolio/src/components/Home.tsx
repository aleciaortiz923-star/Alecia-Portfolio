

import Image from 'next/image';
import {
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaVuejs,
  FaNodeJs,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandNextjs, TbBrandNuxt } from 'react-icons/tb';
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoFirebase,
  BiLogoVisualStudio,
} from 'react-icons/bi';
import { DiJqueryLogo } from 'react-icons/di';
import {
  SiVite,
  SiNestjs,
} from 'react-icons/si';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-white text-black text-center px-16 pt-20 pb-20">
      <Image src="/1unnamed.jpg" alt="Alecia Ortiz" width={200} height={200} className="rounded-full mb-8 animate-fade-in-left" />
      <h1 className="text-5xl font-bold animate-fade-in-left">Hi, <span className="inline-block animate-[wave_1.5s_ease-in-out_infinite]">👋</span> I&apos;m Alecia!</h1>
      <p className="mt-4 text-xl animate-fade-in-left animation-delay-100">I&apos;m a passionate developer ready to build amazing things.</p>
      <p className="mt-8 text-lg max-w-2xl animate-fade-in-left animation-delay-200">I&apos;m a former baker who transitioned into software development, bringing a keen eye for perfection and efficiency to everything I build. I have a passion for creating beautiful and functional web applications, experience with a variety of technologies, and I&apos;m always eager to learn new things.</p>
      <div className="mt-20">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="grid grid-cols-5 mt-8 gap-x-8 gap-y-16 text-5xl">
          <div className="relative flex flex-col items-center group">
            <IoLogoJavascript color="#F0DB4F" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">JavaScript</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <FaReact color="#61DAFB" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">React</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <TbBrandNextjs color="#000000" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">Next.js</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <BiLogoTypescript color="#3178C6" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">TypeScript</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <BiLogoTailwindCss color="#38BDF8" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">Tailwind CSS</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <FaGitAlt color="#F34F29" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">Git</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <BiLogoVisualStudio color="#007ACC" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">VS Code</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <FaHtml5 color="#E34F26" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">HTML5</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <FaVuejs color="#41B883" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">Vue.js</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <TbBrandNuxt color="#00DC82" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">Nuxt.js</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <DiJqueryLogo color="#0769AD" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">jQuery</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <SiVite color="#646CFF" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">Vite</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <FaNodeJs color="#339933" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">Node.js</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <BiLogoFirebase color="#FFCA28" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">Firebase</span>
          </div>
          <div className="relative flex flex-col items-center group">
            <SiNestjs color="#E0234E" className="transition-transform duration-500 ease-in-out group-hover:scale-125" />
            <span className="absolute -bottom-10 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">NestJS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;