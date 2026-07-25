export default function Navbar() {
 return (
  <nav className="mt-5 flex gap-2 bg-[#131420] px-6 py-3 rounded-full w-fit mx-auto">
   <a href="#home" className="bg-[#1f2937] text-white px-4 py-2 rounded-full">
    Home
   </a>
   <a
    href="#project"
    className="text-[#6B7280] hover:text-white px-4 py-2 rounded-full"
   >
    Projects
   </a>
   <a
    href="#skills"
    className="text-[#6B7280] hover:text-white px-4 py-2 rounded-full"
   >
    Skills
   </a>
   <a
    href="#experience"
    className="text-[#6B7280] hover:text-white px-4 py-2 rounded-full"
   >
    Experience
   </a>
   <a
    href="#technologie"
    className="text-[#6B7280] hover:text-white px-4 py-2 rounded-full"
   >
    Technologies
   </a>
   <a
    href="#contact"
    className="text-[#6B7280] hover:text-white px-4 py-2 rounded-full"
   >
    Contact
   </a>
  </nav>
 );
}
