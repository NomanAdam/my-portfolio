import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
export default function Contact() {
 const [email, setEmail] = useState<string>("");
 const [message, setMessage] = useState<string>("");

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault(); // stops the page from reloading (default HTML form behavior)
  console.log(email); // for now — later this is where you'd send the email
  console.log(message);
 };
 return (
  <section
   className=" mb-20 scroll-mt-28 text-white flex items-center justify-center flex-col"
   id="contact"
   data-id="5"
  >
   <h1 className=" text-3xl font-medium mb-6 ">Contact Me</h1>
   <p className="mb-10">
    Please contact me directly at{" "}
    <a
     className="cursor-pointer underline mr-1"
     href="mailto:nomanbinadam@gmail.com"
    >
     nomanbinadam@gmail.com
    </a>
    {""}
    or through this form.
   </p>
   <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <input
     type="email"
     placeholder="Your email"
     className="h-14 px-4 rounded border border-solid w-140"
     onChange={(e) => setEmail(e.target.value)}
     value={email}
    ></input>
    <textarea
     onChange={(e) => setMessage(e.target.value)}
     placeholder="Your message"
     className="h-30 px-4 rounded border border-solid w-140"
    ></textarea>
    <button
     type="submit"
     className="group self-start bg-[#29303d] rounded-full  px-8 py-4 cursor-pointer flex items-center justify-center gap-2"
    >
     Submit
     <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
    </button>
   </form>
  </section>
 );
}
