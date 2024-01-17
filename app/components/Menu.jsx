import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <section className="sticky top-0  z-[100]">
      <div className="bg-[#0e0e12]">
        <div className="flex justify-between container-primary py-[10px] ">
          <Link
            href={"/"}
            className="leading-[40px] text-[40px] font-bold hover:scale-[120%] transition-all duration-300 hover:text-[#EEAF22]"
          >
            JW
          </Link>
          <ul className="leading-[20px] flex justify-evenly space-x-[70px] text-[20px] font-bold text-[#F6DBAC] items-center">
            <li>
              <Link
                href={"/"}
                className="hover:text-[#DF3B30] transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="hover:text-[#DF3B30] transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                className="hover:text-[#DF3B30] transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="hover:text-[#DF3B30] transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#de3b30] h-[10px]"></div>
      <div className="bg-[#e4722b] h-[10px]"></div>
      <div className="bg-[#EEAF22] h-[10px]"></div>
      <div className="bg-[#F6DBAD] h-[10px]"></div>
    </section>
  );
};

export default Menu;
