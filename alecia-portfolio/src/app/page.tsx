import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Monogram } from "@/components/Monogram";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Page = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-[var(--nav-background)] text-[var(--foreground)] z-10">
        <div className="container mx-auto flex justify-between items-center h-20 px-6">
          <a href="#home" className="h-full">
            <div className="h-[64px] w-[64px]">
              <Monogram />
            </div>
          </a>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#projects" className="hover-underline-animation">Projects</a>
            <a href="#contact" className="hover-underline-animation">Contact</a>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
      <ScrollToTopButton />
    </div>
  );
};

export default Page;