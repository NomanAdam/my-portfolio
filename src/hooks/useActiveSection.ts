import { useEffect } from "react";

type Link = {
 id: number;
 hash: string;
};

export function useActiveSection(
 links: Link[],
 setActiveTab: (id: number) => void,
 timeOfLastClick: number,
) {
 useEffect(() => {
  const sections = links
   .map((link) => document.querySelector(link.hash))
   .filter((section): section is Element => section !== null);

  const observer = new IntersectionObserver(
   (entries) => {
    if (Date.now() - timeOfLastClick < 1000) return;

    entries.forEach((entry) => {
     if (!entry.isIntersecting) return;
     const id = Number(entry.target.getAttribute("data-id"));
     setActiveTab(id);
    });
   },
   { rootMargin: "-45% 0px -45% 0px" },
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
 }, [links, setActiveTab, timeOfLastClick]);
}
