import Image from 'next/image';
import Home from '@/components/Home';
import Projects from '@/components/Projects';

const Page = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white z-10">
        <div className="container mx-auto flex justify-between items-center h-20">
          <a href="#home" className="h-full">
            <Image src="/alecia_ortiz_monogram.svg" alt="Alecia Ortiz Monogram" width={80} height={80} className="h-full w-auto" />
          </a>
          <div className="hidden md:flex space-x-6 text-black">
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>
      <main>
        <Home />
        <Projects />
      </main>
    </div>
  );
};

export default Page;