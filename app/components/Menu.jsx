"use client";
import CustomIcon from "@/public/CustomICon";
import Link from "next/link";
import React from "react";

const handleScroll = (e) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });

  // Update the class name of the clicked link
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

const menu = [
  { link_url: "/", target: "_self", link_label: "Home" },
  { link_url: "#about", target: "_self", link_label: "About" },
  { link_url: "#projects", target: "_self", link_label: "Projects" },
  { link_url: "#contact", target: "_self", link_label: "Contact" },
  { link_url: "/resume.pdf", target: "_blank", link_label: "Resume" },
];

const Menu = () => {
  return (
    <section className="sticky top-0  z-[100] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
      <div className="bg-[#0e0e12] px-[20px]">
        <div className="flex justify-between container-primary py-[10px] ">
          <Link
            href={"/"}
            className="leading-[40px] text-[40px] font-bold hover:scale-[120%] transition-all duration-300 hover:text-main-gold text-main-cream"
          >
            JW
          </Link>
          <ul className="leading-[20px] hidden md:flex justify-evenly space-x-[70px] text-[20px] font-bold text-main-cream items-center">
            {/* {menu.map((item, index => ( */}
            {menu.map((item, index) => (
              <li
                key={index}
                className={`${
                  item.target === "_blank"
                    ? "group w-[95px] slide-btn btn-design1 border-[2px] hover:border-main-red-orange border-main-gold py-[5px] px-[5px]"
                    : ""
                }`}
              >
                {item.target === "_blank" ? (
                  <Link
                    href={item.link_url}
                    className="uppercase group-hover:text-main-red-orange group-hover:font-bold text-main-gold font-normal transition-all duration-300"
                    target={item.target}
                  >
                    {item.link_label}
                  </Link>
                ) : (
                  <Link
                    href={item.link_url}
                    className="hover:text-main-red-orange transition-all duration-300"
                    onClick={handleScroll}
                    target={item.target}
                  >
                    {item.link_label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* <input id="toggle" type="checkbox"></input> */}
          <div className="text-main-orange flex md:hidden max-w-[35px] cursor-pointer">
            <CustomIcon iconType={"hamburger"} />
          </div>
        </div>
      </div>
      <div className="bg-main-red-orange h-[10px]"></div>
      <div className="bg-main-orange h-[10px]"></div>
      <div className="bg-main-gold h-[10px]"></div>
      <div className="bg-main-cream h-[10px]"></div>
      {/* <div className="bg-[#4BB8B3] h-[10px]"></div>
      <div className="bg-[#259FA2] h-[10px]"></div>
      <div className="bg-[#146d83] h-[10px]"></div> */}
    </section>
  );
};

export default Menu;

{
  /* <li>
              <Link
                href={"#about"}
                onClick={handleScroll}
                className="hover:text-main-red-orange transition-all duration-300 scroll-smooth"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"#projects"}
                onClick={handleScroll}
                className="hover:text-main-red-orange transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={"#contact"}
                onClick={handleScroll}
                className="hover:text-main-red-orange transition-all duration-300"
              >
                Contact
              </Link>
            </li>
            <li className="group w-[95px] slide-btn btn-design1 border-[2px] hover:border-main-red-orange border-main-gold py-[5px] px-[5px] ">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="uppercase group-hover:text-main-red-orange group-hover:font-bold text-main-gold font-normal transition-all duration-300 "
              >
                RESUME
              </Link>
            </li> */
}
