import { experienceData } from "../constants/experienceData";
const exp = experienceData;
export default function Experience() {
 return (
  <section className="mt-28 max-w-2xl mx-auto">
   <h1 className="text-white text-3xl font-medium mb-8 text-center">
    Experience
   </h1>
   <div className="flex flex-col gap-4">
    <div className="bg-[#1F2937] rounded-2xl p-6">
     <div className="flex justify-between items-start mb-2">
      <h2 className="text-white text-xl font-medium">{exp.company}</h2>
      <span className="text-neutral-400 text-sm">{exp.duration}</span>
     </div>
     <p className="text-neutral-400 mb-3">{exp.place}</p>
     <p className="text-neutral-300 ">{exp.description}</p>
    </div>
   </div>
  </section>
 );
}
