import { motion } from "motion/react";
import { LINKS } from "../constants/nav-links";

type NavbarProps = {
 activeTab: number;
 setActiveTab: React.Dispatch<React.SetStateAction<number>>;
 setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export default function Navbar({
 activeTab,
 setActiveTab,
 setTimeOfLastClick,
}: NavbarProps) {
 return (
  <nav className="fixed top-0 left-0 w-full sm:top-5 sm:left-1/2 sm:-translate-x-1/2 sm:w-auto z-50">
   <div className="flex flex-wrap justify-center gap-2  bg-[#131420] px-4 py-3 sm:flex-nowrap sm:px-4 sm:py-3 sm:rounded-full">
    {LINKS.map((link) => (
     <a
      key={link.id}
      href={link.hash}
      onClick={() => {
       setActiveTab(link.id);
       setTimeOfLastClick(Date.now());
      }}
      className="relative px-2 py-2 text-sm font-small sm:font-medium sm:px-4 sm:px-2"
     >
      {activeTab === link.id && (
       <motion.div
        layoutId="active-pill"
        transition={{
         type: "spring",
         stiffness: 450,
         damping: 35,
        }}
        className="absolute inset-0 rounded-2xl bg-[#1f2937] shadow-lg sm:rounded-full"
       />
      )}

      <span
       className={`relative z-10 transition-colors ${
        activeTab === link.id ? "text-white" : "text-neutral-400"
       }`}
      >
       {link.name}
      </span>
     </a>
    ))}
   </div>
  </nav>
 );
}
