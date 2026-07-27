import { skillsData } from "../constants/skillsData";

export default function Skills() {
 return (
  <>
   <h1 className="text-white text-center text-3xl font-medium mb-8  mt-28 ">
    My Skills
   </h1>
   <div className="max-w-2xl mx-auto">
    <ul className=" flex gap-3 justify-center flex-wrap ">
     {skillsData.map((skill, index) => (
      <li
       key={index}
       className="bg-[#1F2937] text-white rounded-xl px-3 py-2 text-center"
      >
       {skill}
      </li>
     ))}
    </ul>
   </div>
  </>
 );
}
