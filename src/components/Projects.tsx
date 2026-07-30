import { projectData } from "../constants/projectsData";
import { motion } from "motion/react";
export default function Projects() {
 return (
  <section className="scroll-mt-28 mb-36 " id="projects" data-id="2">
   <h1 className="text-white text-3xl font-medium capitalize mb-8 text-center">
    Projects
   </h1>
   <div className="text-white  flex flex-col gap-6 items-center ">
    {projectData.map((item, index) => {
     const content = (
      <motion.div
       initial={{ scale: 0.9, opacity: 0, y: 20 }}
       whileInView={{ scale: 1, opacity: 1, y: 0 }}
       transition={{ duration: 0.3, ease: "easeOut" }}
       viewport={{ once: true }}
       className={`${index % 2 !== 0 ? "flex-row-reverse" : ""} *:bg-[#29303d] w-150 flex rounded-2xl overflow-hidden`}
      >
       <div className="flex-1 p-6">
        <h2 className="text-xl font-medium">{item.title}</h2>
        <p className="text-neutral-400 mt-2">{item.description}</p>
        <ul className="flex flex-wrap gap-2 mt-4">
         {item.tags.map((tag, i) => (
          <li key={i} className="bg-neutral-800 px-3 py-1 text-sm rounded-full">
           {tag}
          </li>
         ))}
        </ul>
       </div>
       {item.image && (
        <div className="flex-1 pt-6">
         <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-top-left rounded-2xl"
         />
        </div>
       )}
      </motion.div>
     );
     return item.url ? (
      <a href={item.url} key={item.id} target="_blank">
       {content}
      </a>
     ) : (
      <div key={item.id}>{content}</div>
     );
    })}
   </div>
  </section>
 );
}
