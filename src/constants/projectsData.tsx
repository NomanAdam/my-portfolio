import cineAI from "../assets/cineAi.png";
import taskflow from "../assets/taskFLow.png";
import portfolio from "../assets/portfolio.png";

export const projectData = [
 {
  id: 1,
  title: "Noman Ghaffar - Portfolio",
  description:
   "Built a responsive portfolio using React, TypeScript, Tailwind CSS, and Framer Motion while applying best practices such as reusable components, type safety, and clean project structure to showcase my work and skills.",
  tags: [
   "React",
   "TypeScript",
   "Tailwind CSS",
   "Framer Motion",
   "Responsive Design",
  ],
  image: portfolio,
  url: undefined,
 },
 {
  id: 2,
  title: "CineAI",
  description:
   "Built a Netflix-style movie platform using React, Redux Toolkit, Firebase, TMDB API, and Google Gemini AI, enabling secure authentication and AI-powered personalised movie recommendations.",
  tags: [
   "React",
   "Redux Toolkit",
   "Firebase",
   "Google Gemini AI",
   "TMDB API",
   "Tailwind CSS",
  ],
  image: cineAI,
  url: "https://cineai-netflix.vercel.app/",
 },
 {
  id: 3,
  title: "TaskFlow",
  description:
   "Developed a full-stack task management app using React, Redux Toolkit, Node.js, Express, and MongoDB, featuring JWT authentication, task CRUD, filtering, drag-and-drop, and responsive UI.",
  tags: [
   "React",
   "Redux Toolkit",
   "Node.js",
   "Express.js",
   "MongoDB",
   "JWT Authentication",
  ],
  image: taskflow,
  url: "https://taskflow-mernstack-1.onrender.com/",
 },
];
