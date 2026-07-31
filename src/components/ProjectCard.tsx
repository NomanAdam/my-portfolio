import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface Project {
 id: number;
 title: string;
 description: string;
 tags: string[];
 image: string;
 url: string | undefined;
}

type ProjectCardProps = {
 item: Project;
 index: number;
};

export default function ProjectCard({ item, index }: ProjectCardProps) {
 const ref = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["0 1", "1.33 1"],
 });
 const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
 const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

 const content = (
  <motion.div
   ref={ref}
   style={{ scale, opacity }}
   className={`${
    index % 2 !== 0 ? "flex-row-reverse" : ""
   } bg-[#29303d] w-150 flex rounded-2xl overflow-hidden`}
  >
   <div className="flex-1 p-6">
    <h2 className="text-xl font-medium">{item.title}</h2>
    <p className="text-neutral-400 mt-2">{item.description}</p>
    <ul className="flex flex-wrap gap-2 mt-4">
     {item.tags.map((tag) => (
      <li key={tag} className="bg-neutral-800 px-3 py-1 text-sm rounded-full">
       {tag}
      </li>
     ))}
    </ul>
   </div>
   {item.image && (
    <div className="flex-1 pt-6 overflow-visible">
     <img
      src={item.image}
      alt={item.title}
      className={`w-full h-full object-cover object-top-left rounded-2xl transition-transform duration-500 hover:scale-105 ${
       index % 2 === 0 ? "hover:-rotate-3" : "hover:rotate-3"
      }`}
     />
    </div>
   )}
  </motion.div>
 );

 return item.url ? (
  <a href={item.url} target="_blank">
   {content}
  </a>
 ) : (
  content
 );
}
