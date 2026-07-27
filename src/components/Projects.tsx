import { projectData } from "../constants/projectsData";

export default function Projects() {
 return (
  <section className="mt-28 ">
   <h1 className="text-white text-3xl font-medium capitalize mb-8 text-center">
    Projects
   </h1>
   <div className="text-white  flex flex-col gap-6 items-center ">
    {projectData.map((item) => {
     const content = (
      <div className="bg-[#29303d] w-150 flex rounded-2xl overflow-hidden">
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
      </div>
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
