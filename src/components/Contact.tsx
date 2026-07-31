import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
 const [email, setEmail] = useState<string>("");
 const [message, setMessage] = useState<string>("");
 const [status, setStatus] = useState<
  "idle" | "sending" | "success" | "error" | "validation-error"
 >("idle");

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  //just for safety
  if (email.trim() === "" || message.trim() === "") {
   setStatus("validation-error");
   setTimeout(() => setStatus("idle"), 3000);
   return;
  }
  setStatus("sending");

  try {
   await emailjs.send(
    "service_5ug6z8g",
    "template_j5mc04q",
    { email, message },
    "_8ExnQbr5of6ce_IT",
   );
   setEmail("");
   setMessage("");
   setStatus("success");
   setTimeout(() => setStatus("idle"), 3000);
  } catch (error) {
   setStatus("error");
   setTimeout(() => setStatus("idle"), 3000);
   return;
  }
 };

 return (
  <section
   className="mb-20 scroll-mt-28 text-white flex items-center justify-center flex-col"
   id="contact"
   data-id="5"
  >
   <h1 className="text-3xl font-medium mb-6">Contact Me</h1>
   <p className="mb-10">
    Please contact me directly at{" "}
    <a
     className="cursor-pointer underline mr-1"
     href="mailto:nomanbinadam@gmail.com"
    >
     nomanbinadam@gmail.com
    </a>
    or through this form.
   </p>

   <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <input
     type="email"
     placeholder="Your email"
     className="h-14 px-4 rounded border border-solid w-140"
     onChange={(e) => setEmail(e.target.value)}
     value={email}
     required
     maxLength={50}
    />
    <textarea
     onChange={(e) => setMessage(e.target.value)}
     placeholder="Your message"
     value={message}
     className="h-30 px-4 rounded border border-solid w-140"
     required
     maxLength={5000}
    />
    <button
     disabled={status === "sending"}
     type="submit"
     className="group self-start bg-[#29303d] rounded-full px-8 py-4 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
     {status === "sending" ? "Sending..." : "Submit"}
     <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
    </button>

    {status === "success" && (
     <p className="text-[#292f3d] text-sm">
      Message sent — I'll get back to you soon.
     </p>
    )}
    {status === "error" && (
     <p className="text-red-400 text-sm">
      Something went wrong. Please try again or email me directly.
     </p>
    )}
    {status === "validation-error" && (
     <p className="text-red-400 text-sm">Please fill the fields.</p>
    )}
   </form>
  </section>
 );
}
