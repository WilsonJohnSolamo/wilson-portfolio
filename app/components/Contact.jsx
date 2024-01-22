"use client";

import CustomIcon from "@/public/CustomICon";
import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the serverless function
    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (result.success) {
      // Handle successful submission (e.g., show a success message)
      console.log("Message sent successfully!");
    } else {
      // Handle submission error (e.g., show an error message)
      console.error("Error sending message");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-[#16161c] pt-[100px] pb-[50px] px-[20px]"
    >
      <div className="container-primary">
        <div className="text-[60px] font-bold text-main-red-orange mb-[50px]">
          Contact
        </div>
        <div className="flex justify-between">
          <div className="max-w-[700px]">
            <div className="text-[35px] font-bold mb-[10px] text-main-orange">
              Get in touch
            </div>
            <p className="text-[25px] text-justify text-main-cream">
              Have a project in mind that you want to collaborate with or just
              want to connect? I&apos;d love to hear from you! Feel free to
              reach out via email
              <Link
                href={"mailto:john.solamo3@gmail.com"}
                className="text-main-orange"
              >
                {" "}
                john.solamo3@gmail.com
              </Link>
              <br /> or connect with me on social media.
            </p>
          </div>
          <div className="flex gap-[50px]">
            <div className="flex flex-col gap-[20px]">
              <Link
                href={"https://www.linkedin.com/in/johnwilsonsolamo/"}
                target="_blank"
                className="contact-link "
              >
                <CustomIcon iconType={"linkedin"} />
              </Link>
              <Link
                href={"https://www.behance.net/johnwilsonsolamo"}
                target="_blank"
                className="contact-link"
              >
                <CustomIcon iconType={"behance"} />
              </Link>
            </div>
            <div>
              <Link
                href={"https://github.com/WilsonJohnSolamo"}
                target="_blank"
                className="contact-link"
              >
                <CustomIcon iconType={"github"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// <form onSubmit={handleSubmit} className="">
//   <div className="flex gap-[20px] pb-[50px]">
//     <input
//       type="text"
//       value={name}
//       placeholder="Name"
//       onChange={(e) => setName(e.target.value)}
//       className="input-field"
//     />

//     <input
//       type="email"
//       value={email}
//       placeholder="Email"
//       onChange={(e) => setEmail(e.target.value)}
//       className="input-field"
//     />
//   </div>

//   <div className="pb-[20px]">
//     <textarea
//       value={message}
//       placeholder="Message"
//       onChange={(e) => setMessage(e.target.value)}
//       className="input-field w-full h-[280px]"
//     />
//   </div>

//   {/* <button type="submit">Send Message</button> */}
//   <button
//     type="submit"
//     className="border-[2px] border-main-red-orange rounded-[10px] px-[13px] py-[7px] text-[17px] leading-[20px] hover:text-[#16161c] hover:bg-main-gold"
//   >
//     Send Message
//   </button>
// </form>
