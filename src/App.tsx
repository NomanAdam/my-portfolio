import { useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useActiveSection } from "./hooks/useActiveSection";
import { LINKS } from "./constants/nav-links";

function App() {
 const [activeTab, setActiveTab] = useState(1);
 const [timeOfLastClick, setTimeOfLastClick] = useState(0);

 useActiveSection(LINKS, setActiveTab, timeOfLastClick);

 return (
  <div className="relative isolate min-h-screen overflow-x-hidden bg-[#111827]">
   {/* Background Layer */}
   <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full bg-[#946263] blur-[10rem]" />

    <div className="absolute top-[-15rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full bg-[#676394] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
   </div>

   {/* Content */}
   <Navbar
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    setTimeOfLastClick={setTimeOfLastClick}
   />

   <Hero setActiveTab={setActiveTab} setTimeOfLastClick={setTimeOfLastClick} />

   <Projects />
   <Skills />
   <Experience />
   <Contact />
   <Footer />
  </div>
 );
}

export default App;
