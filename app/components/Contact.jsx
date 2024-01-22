"use client";

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
        <div className="text-[60px] font-bold text-main-orange mb-[50px]">
          Contact
        </div>
        <form onSubmit={handleSubmit}>
          {/* Your form inputs */}
          <button
            type="submit"
            className="border-[2px] border-main-red-orange rounded-[20px] px-[13px] py-[7px] text-[17px] leading-[20px] hover:text-[#16161c] hover:bg-main-gold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
