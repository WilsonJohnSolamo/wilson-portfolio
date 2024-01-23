import React from "react";

const aboutData = [
  {
    title: "What I do:",
    content:
      "I specialize in turning concepts into reality through the power of coding. Crafting from visually appealing and user-friendly front-end designs that captivates users that ensures a seamless experience. From concept to implementation, I thrive on the challenges of the ever-evolving web landscape.",
  },
  {
    title: "Why I Do It:",
    content:
      "The dynamic nature of web development fuels my creativity. I love the constant learning and problem-solving that come with this field. Each project is an opportunity to push boundaries and exceed expectations.",
  },
  {
    title: "Beyond Coding:",
    content:
      "When I'm not immersed in lines of code, you'll find me exploring new technologies, staying updated on industry trends, and enjoying the balance of work and play. Collaboration, innovation, and attention to detail are at the core of my approach.",
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-[1054px] w-full bg-[#16161c] relative py-[100px] px-[20px]"
    >
      {/* <div className="box bg-main-red-orange absolute inset-x-0 bottom-0 top-[0px]"></div>
      <div className="box bg-main-orange absolute inset-x-0 top-[15px] bottom-[0px]"></div>
      <div className="box bg-main-gold absolute inset-x-0 top-[35px] bottom-[0px]"></div>
      <div className="box bg-main-cream absolute inset-x-0 top-[50px] bottom-[0px]"> */}
      <div className="box bg-main-red-orange absolute inset-0"></div>
      <div className="box bg-main-orange absolute mt-[15px] inset-0"></div>
      <div className="box bg-main-gold absolute mt-[35px] inset-0"></div>
      <div className="box bg-main-cream mt-[50px] absolute inset-0">
        <div className="container-primary py-[100px]">
          <div className="text-[40px] sm:text-[60px] px-[20px] py-[30px] sm:py-[50px] font-bold text-[#16161c] flex items-center max-w-[710px]">
            <div className="hidden sm:flex h-[10px] max-w-[10px] ml-[10px] rounded-full flex-grow bg-main-red-orange" />
            <div className="hidden sm:flex h-[10px] max-w-[50px] ml-[10px] mr-[30px] rounded-full flex-grow bg-main-red-orange" />
            About Me
            <div className="hidden sm:flex h-[10px] max-w-[50px] ml-[30px] rounded-full flex-grow bg-main-red-orange" />
            <div className="hidden sm:flex h-[10px] max-w-[10px] ml-[10px] rounded-full flex-grow bg-main-red-orange" />
            <div className="hidden sm:flex h-[10px] max-w-[200px] ml-[10px] rounded-full flex-grow bg-main-red-orange" />
            <div className="hidden sm:flex h-[10px] max-w-[10px] ml-[10px] rounded-full flex-grow bg-main-red-orange" />
          </div>
          <div className="text-[#16161c] flex flex-col gap-[30px] px-[20px]">
            {aboutData.map((section, index) => (
              <div key={index}>
                <div className="text-[25px] sm:text-[30px] font-bold">
                  {section.title}
                </div>
                <p className="text-[15px] sm:text-[20px] pl-[10px]">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
