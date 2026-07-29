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
  <div>
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
