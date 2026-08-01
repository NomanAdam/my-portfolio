import { BsArrowRight } from "react-icons/bs";
import myPic from "../assets/myPic.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
type NavbarProps = {
 setActiveTab: React.Dispatch<React.SetStateAction<number>>;
 setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export default function Hero({
 setActiveTab,
 setTimeOfLastClick,
}: NavbarProps) {
 return (
  <div
   className="flex flex-col items-center justify-center mb-14 sm:mb-28 mt-28 scroll-mt-[200rem] "
   id="home"
   data-id="1"
  >
   <img
    src={myPic}
    alt="img"
    className=" h-24 w-24 mb-3 rounded-full object-cover object-top border-[0.15rem] border-white shadow-xl "
   />
   <div className="text-white  text-center mb-15 text-lg sm:text-xl md:text-2xl   ">
    <h1 className="font-lmroman text-lg sm:text-2xl ">Noman Ghaffar</h1>
    <p>
     Frontend Developer, MERN Stack
     <br />
     Building Fast, Responsive Web Experiences with
     <br />
     React, Node.js, Express & MongoDB
    </p>
   </div>
   <div className="flex flex-col items-center gap-3 text-white sm:flex-row sm:flex-wrap sm:justify-center">
    <button
     className="group flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#111827] px-7 py-3 sm:w-auto cursor-pointer transition-transform duration-300 ease-out 
  hover:scale-115 hover:-translate-y-0.5"
     onClick={(e) => {
      e.preventDefault();
      setActiveTab(5);
      setTimeOfLastClick(Date.now());
      document.querySelector("#contact")?.scrollIntoView();
     }}
    >
     Contact me here{" "}
     <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
    </button>
    <a
     className="group flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#292f3d] px-7 py-3 sm:w-auto transition-transform duration-300 ease-out 
  hover:scale-115 hover:-translate-y-0.5"
     href="https://drive.google.com/file/d/1ROAAuKDRNzhs7RXMmlMKpKf1g_LAiU2Z/view?usp=sharing"
     target="_blank"
    >
     Download CV{" "}
     <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
    </a>
    <div className="flex gap-3">
     <a
      className="rounded-full bg-[#292f3d] p-4 transition transition-transform duration-300 ease-out 
  hover:scale-115 hover:-translate-y-0.5"
      target="_blank"
      href="https://www.linkedin.com/in/noman-ghaffar-dev/"
     >
      <FaLinkedin />
     </a>

     <a
      target="_blank"
      className="rounded-full bg-[#292f3d] p-4 transition-transform duration-300 ease-out 
  hover:scale-115 hover:-translate-y-0.5"
      href="https://github.com/NomanAdam"
     >
      <FaGithub />
     </a>
    </div>
   </div>
  </div>
 );
}
