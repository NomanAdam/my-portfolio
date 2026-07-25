import { BsArrowRight } from "react-icons/bs";
import myPic from "../assets/myPic.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
export default function Hero() {
 return (
  <div className="flex flex-col items-center justify-center mt-15 ">
   <img
    src={myPic}
    alt="img"
    className=" h-24 w-24 mb-3 rounded-full object-cover object-top border-[0.15rem] border-white shadow-xl "
   />
   <div className="text-white  text-center mb-15 text-xl ">
    <h1 className="font-lmroman text-2xl">Noman Ghaffar</h1>
    <p>
     Frontend Developer, MERN Stack
     <br />
     Building Fast, Responsive Web Experiences with
     <br />
     React, Node.js, Express & MongoDB
    </p>
   </div>
   <div className="text-white flex  gap-2 items-center justify-center">
    <button className="flex items-center gap-2 bg-[#292f3d] px-7 py-3 rounded-full cursor-pointer   ">
     Contact me here <BsArrowRight />
    </button>
    <button className="flex items-center gap-2 bg-[#292f3d] px-7 py-3 rounded-full cursor-pointer ">
     Download CV <HiDownload />
    </button>
    <a
     href="https://www.linkedin.com/in/noman-ghaffar-dev/"
     target="_blank"
     className="bg-[#292f3d] p-4 rounded-full "
    >
     <FaLinkedin />
    </a>
    <a
     href="https://github.com/NomanAdam"
     target="_blank"
     className="bg-[#292f3d] p-4 rounded-full"
    >
     <FaGithub />
    </a>
   </div>
  </div>
 );
}
