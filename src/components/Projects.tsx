import { projectData } from "../constants/projectsData";

export default function Projects() {
 return (
  <section className="mt-28">
   <h1 className="text-white text-3xl font-medium capitalize mb-8 text-center">
    Projects
   </h1>
   <div className="text-white flex flex-col gap-6">
    {projectData.map((item) => {
     const content = (
      <>
       {item.image && (
        <img src={item.image} alt={item.title} className="rounded-lg" />
       )}
       <h2 className="text-xl font-medium">{item.title}</h2>
       <p className="text-neutral-400">{item.description}</p>
       <ul className="flex flex-wrap gap-2 mt-3">
        {item.tags.map((tag) => (
         <li
          key={tag}
          className="bg-neutral-800 text-sm px-3 py-1 rounded-full"
         >
          {tag}
         </li>
        ))}
       </ul>
      </>
     );

     return item.url ? (
      <a
       key={item.id}
       href={item.url}
       target="_blank"
       className="cursor-pointer"
      >
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
