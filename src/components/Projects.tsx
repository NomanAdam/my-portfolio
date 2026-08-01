import { projectData } from "../constants/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
 return (
  <section className="scroll-mt-28 mb-16 sm:mb-36" id="projects" data-id="2">
   <h1 className="text-white text-2xl sm:text-3xl font-medium capitalize mb-4 sm:mb-8 text-center">
    Projects
   </h1>
   <div className="text-white flex flex-col gap-4 sm:gap-6 items-center">
    {projectData.map((item, index) => (
     <ProjectCard key={item.id} item={item} index={index} />
    ))}
   </div>
  </section>
 );
}
