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
  <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
   <div className="flex gap-2 rounded-full bg-[#131420] px-4 py-3">
    {LINKS.map((link) => (
     <a
      key={link.id}
      href={link.hash}
      onClick={() => {
       setActiveTab(link.id);
       setTimeOfLastClick(Date.now());
      }}
      className="relative px-4 py-2 text-sm font-medium"
     >
      {activeTab === link.id && (
       <motion.div
        layoutId="active-pill"
        transition={{
         type: "spring",
         stiffness: 450,
         damping: 35,
        }}
        className="absolute  inset-0 rounded-full bg-white"
       />
      )}

      <span
       className={`relative z-10 transition-colors ${
        activeTab === link.id ? "text-black" : "text-neutral-400"
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
