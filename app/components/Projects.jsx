"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import CustomIcon from "@/public/CustomICon";
import Link from "next/link";

const projectsData = [
  {
    title: "Portfolio",
    link: "https://wilson-portfolio-three.vercel.app/",
    link_label: "wilson-portfolio.vercel.app",
    image: require("@/public/portfolio.png"),
    description:
      "This portfolio website showcases my skills and projects, serving as a testament to my proficiency in web development. Explore the various sections to learn more about my expertise, experience, and the projects that reflect my passion for creating impactful web solutions.",
    technologies: ["ReactJS", "NextJS", "TailwindCSS"],
  },
  {
    title: "The RED",
    link: "https://the-red.de/",
    link_label: "the-red.de",
    image: require("@/public/thered.png"),
    description:
      "Migrated the existing website to Next.js and React.js, we not only embraced cutting-edge technologies but also unlocked unparalleled performance. The result? An optimized digital experience that not only meets but exceeds industry standards. With a keen focus on achieving exceptional Google PageSpeed scores, this project seamlessly blends aesthetics with efficiency.",
    technologies: ["ReactJS", "NextJS", "TailwindCSS"],
  },
  {
    title: "Halcyon Agile",
    link: "https://halcyonagile.com/",
    link_label: "halcyonagile.com",
    image: require("@/public/halcyonagile.png"),
    description:
      "Migrated the existing website to Next.js and React.js, we not only embraced cutting-edge technologies but also unlocked unparalleled performance. The result? An optimized digital experience that not only meets but exceeds industry standards. With a keen focus on achieving exceptional Google PageSpeed scores, this project seamlessly blends aesthetics with efficiency.",
    technologies: ["ReactJS", "NextJS", "TailwindCSS"],
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showModal]);

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-[#16161c] pt-[100px] pb-[50px] px-[20px]"
    >
      <div className="container-primary">
        <div className="text-[60px] font-bold text-main-orange mb-[50px]">
          Projects
        </div>
        <div>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-[50px]"
            >
              <div className="w-[560px] h-[400px] items-center justify-center flex">
                <div className="transition-all duration-300 hover:p-[10px] p-[0px] bg-[#4BB8B3]">
                  <div className="transition-all duration-300 hover:p-[10px] p-[0px] bg-[#259FA2]">
                    <div
                      onClick={() => openModal(project.image)}
                      href={project.link}
                      className="transition-all duration-300 hover:p-[10px] p-[0px] "
                    >
                      <div className="bg-[#29292a]">
                        <Image
                          src={project.image}
                          width={500}
                          height={500}
                          className="shadow-[0px_0px_10px_rgba(0,0,0,0.25)] hover:opacity-20 cursor-pointer"
                          alt="project image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[500px]">
                <div className="flex">
                  <div className="text-main-cream text-[30px] leading-[30px] pb-[5px] font-bold uppercase tracking-[1px]">
                    {project.title}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="ml-[20px] text-[20px] text-[#0C51AC] hover:text-[#63b9db] pb-[20px] flex items-center gap-[3px] transition-all duration-300"
                  >
                    <div className="max-w-[20px] max-h-[20px]">
                      <CustomIcon iconType={"globe"} />
                    </div>
                    {project.link_label}
                  </Link>
                </div>
                <p className="text-justify text-main-cream text-[15px] mb-[15px]">
                  {project.description}
                </p>
                <div className="flex gap-[10px] tracking-[0.80px]">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="border-[2px] border-main-red-orange px-[6px] py-[3px] rounded-full"
                    >
                      <div className="text-main-gold text-[13px] flex gap-[5px]">
                        <div className="max-w-[13px]">
                          <CustomIcon iconType={tech.toLowerCase()} />
                        </div>
                        {tech}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {showModal && selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center z-[9999999]">
            <div
              onClick={() => !setShowModal()}
              className="fixed inset-0 bg-black opacity-50 cursor-pointer"
            />
            <div className="z-10 bg-white p-4 rounded-md">
              <Image
                src={selectedImage}
                height={1000}
                width={1000}
                alt="test"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

// <div>
//   {/* PORTFOLIO */}
//   <div className="flex items-center justify-center gap-[50px]">
//     <div className="w-[560px] h-[400px] items-center justify-center flex">
//       <div className="transition-all duration-300 hover:p-[10px] p-[0px] bg-[#4BB8B3]">
//         <div className="transition-all duration-300 hover:p-[10px] p-[0px] bg-[#259FA2]">
//           <Link
//             href={"https://wilson-portfolio-three.vercel.app/"}
//             className="transition-all duration-300 hover:p-[10px] p-[0px] "
//           >
//             <div className="bg-[#29292a]">
//               <Image
//                 src={portfolio}
//                 width={500}
//                 height={500}
//                 className="shadow-[0px_0px_10px_rgba(0,0,0,0.25)] hover:opacity-20"
//                 alt="project image"
//               />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//     <div className="max-w-[500px]">
//       <div className="flex">
//         {/* Title */}
//         <div className="text-main-cream text-[30px] leading-[30px] pb-[5px] font-bold uppercase tracking-[1px]">
//           Portfolio
//         </div>
//         {/* Link */}
//         <Link
//           href={"https://wilson-portfolio-three.vercel.app/"}
//           target="_blank"
//           className="ml-[20px] text-[20px] text-[#0C51AC] hover:text-[#63b9db] pb-[20px] flex items-center gap-[3px] transition-all duration-300"
//         >
//           <div className="max-w-[20px] max-h-[20px]">
//             <CustomIcon iconType={"globe"} />
//           </div>
//           wilson-portfolio.vercel.app
//         </Link>
//       </div>
//       <p className="text-justify text-main-cream text-[15px] mb-[15px]">
//         This portfolio website showcases my skills and projects, serving
//         as a testament to my proficiency in web development. Explore the
//         various sections to learn more about my expertise, experience,
//         and the projects that reflect my passion for creating impactful
//         web solutions.
//       </p>
//       <div className="flex gap-[10px] tracking-[0.80px]">
//         <div className="border-[2px] border-main-red-orange px-[6px] py-[3px] rounded-full">
//           <div className="text-main-gold text-[13px] flex gap-[5px]">
//             <div className="max-w-[13px]">
//               <CustomIcon iconType={"reactjs"} />
//             </div>
//             ReactJS
//           </div>
//         </div>
//         <div className="border-[2px] border-main-red-orange px-[6px] py-[3px] rounded-full">
//           <div className="text-main-gold text-[13px] flex gap-[5px]">
//             <div className="max-w-[13px]">
//               <CustomIcon iconType={"nextjs"} />
//             </div>
//             NextJS
//           </div>
//         </div>
//         <div className="border-[2px] border-main-red-orange px-[6px] py-[3px] rounded-full">
//           <div className="text-main-gold text-[13px] flex gap-[5px]">
//             <div className="max-w-[13px]">
//               <CustomIcon iconType={"tailwindcss"} />
//             </div>
//             TailwindCSS
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* THE RED */}
//   <div className="flex items-center justify-center gap-[50px]">
//     <div className="w-[560px] h-[400px] items-center justify-center flex">
//       <div className="transition-all duration-300 hover:p-[10px] p-[0px] bg-[#4BB8B3]">
//         <div className="transition-all duration-300 hover:p-[10px] p-[0px] bg-[#259FA2]">
//           <div className="transition-all duration-300 hover:p-[10px] p-[0px] bg-[#146d83]">
//             <Image
//               src={thered}
//               width={500}
//               height={500}
//               className="shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
//               alt="project image"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="max-w-[500px]">
//       {/* Title and Link line */}
//       <div className="flex">
//         {/* Title */}
//         <div className="text-main-cream text-[30px] leading-[30px] pb-[5px] font-bold uppercase tracking-[1px]">
//           The RED
//         </div>
//         {/* Link */}
//         <Link
//           href={"https://the-red.de/"}
//           target="_blank"
//           className="ml-[20px] text-[20px] text-[#0C51AC] hover:text-[#63b9db] pb-[20px] flex items-center gap-[3px] transition-all duration-300"
//         >
//           <div className="max-w-[20px] max-h-[20px]">
//             <CustomIcon iconType={"globe"} />
//           </div>
//           the-red.de
//         </Link>
//       </div>
//       <p className="text-justify text-main-cream text-[15px] mb-[15px]">
//         Migrated the existing website to Next.js and React.js, we not
//         only embraced cutting-edge technologies but also unlocked
//         unparalleled performance. The result? An optimized digital
//         experience that not only meets but exceeds industry standards.
//         With a keen focus on achieving exceptional Google PageSpeed
//         scores, this project seamlessly blends aesthetics with
//         efficiency.
//       </p>
//       <div className="flex gap-[10px] tracking-[0.80px]">
//         <div className="border-[2px] border-main-red-orange px-[6px] py-[3px] rounded-full">
//           <div className="text-main-gold text-[13px] flex gap-[5px]">
//             <div className="max-w-[13px]">
//               <CustomIcon iconType={"reactjs"} />
//             </div>
//             ReactJS
//           </div>
//         </div>
//         <div className="border-[2px] border-main-red-orange px-[6px] py-[3px] rounded-full">
//           <div className="text-main-gold text-[13px] flex gap-[5px]">
//             <div className="max-w-[13px]">
//               <CustomIcon iconType={"nextjs"} />
//             </div>
//             NextJS
//           </div>
//         </div>
//         <div className="border-[2px] border-main-red-orange px-[6px] py-[3px] rounded-full">
//           <div className="text-main-gold text-[13px] flex gap-[5px]">
//             <div className="max-w-[13px]">
//               <CustomIcon iconType={"tailwindcss"} />
//             </div>
//             TailwindCSS
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* HALCYON AGILE */}
//   <div className="flex items-center justify-center gap-[50px]">
//     <div className="w-[560px] h-[400px] items-center justify-center flex">
//       <div className="transition-all duration-300 hover:p-[10px] p-[0px] bg-[#4BB8B3]">
//         <div className="transition-all duration-300 hover:p-[10px] p-[0px] bg-[#259FA2]">
//           <div className="transition-all duration-300 hover:p-[10px] p-[0px] bg-[#146d83]">
//             <Image
//               src={halcyonagile}
//               width={500}
//               height={500}
//               className="shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
//               alt="project image"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="max-w-[500px]">
//       {/* Title and Link line */}
//       <div className="flex">
//         {/* Title */}
//         <div className="text-main-cream text-[30px] leading-[30px] pb-[5px] font-bold uppercase tracking-[1px]">
//           Halcyon Agile
//         </div>
//         {/* Link */}
//         <Link
//           href={"https://halcyonagile.com/"}
//           target="_blank"
//           className="ml-[20px] text-[20px] text-[#0C51AC] hover:text-[#63b9db] pb-[20px] flex items-center gap-[3px] transition-all duration-300"
//         >
//           <div className="max-w-[20px] max-h-[20px]">
//             <CustomIcon iconType={"globe"} />
//           </div>
//           halcyonagile.com
//         </Link>
//       </div>
//       <p className="text-justify text-main-cream text-[15px] mb-[15px]">
//         Migrated the existing website to Next.js and React.js, we not
//         only embraced cutting-edge technologies but also unlocked
//         unparalleled performance. The result? An optimized digital
//         experience that not only meets but exceeds industry standards.
//         With a keen focus on achieving exceptional Google PageSpeed
//         scores, this project seamlessly blends aesthetics with
//         efficiency.
//       </p>
//       <div className="flex gap-[10px] tracking-[0.80px]">
//         <div className="border-[2px] border-main-red-orange px-[6px] py-[3px] rounded-full">
//           <div className="text-main-gold text-[13px] flex gap-[5px]">
//             <div className="max-w-[13px]">
//               <CustomIcon iconType={"reactjs"} />
//             </div>
//             ReactJS
//           </div>
//         </div>
//         <div className="border-[2px] border-main-red-orange px-[6px] py-[3px] rounded-full">
//           <div className="text-main-gold text-[13px] flex gap-[5px]">
//             <div className="max-w-[13px]">
//               <CustomIcon iconType={"nextjs"} />
//             </div>
//             NextJS
//           </div>
//         </div>
//         <div className="border-[2px] border-main-red-orange px-[6px] py-[3px] rounded-full">
//           <div className="text-main-gold text-[13px] flex gap-[5px]">
//             <div className="max-w-[13px]">
//               <CustomIcon iconType={"tailwindcss"} />
//             </div>
//             TailwindCSS
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
