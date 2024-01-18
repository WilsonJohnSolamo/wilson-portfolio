import Link from "next/link";
import React from "react";

const smoothScrollTo = (targetId) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

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
          <ul className="leading-[20px] flex justify-evenly space-x-[70px] text-[20px] font-bold text-main-cream items-center">
            <li>
              <Link
                href={"/"}
                className="hover:text-main-red-orange transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#about"}
                className="hover:text-main-red-orange transition-all duration-300 scroll-smooth"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                className="hover:text-main-red-orange transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="hover:text-main-red-orange transition-all duration-300"
              >
                Contact
              </Link>
            </li>
            <li className="group w-[95px] slide-btn btn-design1 border-[2px] hover:border-main-red-orange border-main-gold py-[5px] px-[5px] ">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="group-hover:text-main-red-orange group-hover:font-bold text-main-gold font-normal transition-all duration-300 "
              >
                RESUME
              </Link>
            </li>
          </ul>
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
