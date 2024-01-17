import React from "react";

const MainBanner = () => {
  return (
    // <section className="min-h-screen w-full bg-[#012152] py-[100px]">
    <section className="min-h-screen w-full bg-[#16161c] py-[120px]">
      <div className="container-primary mt-[50px]">
        <div className="relative text-[80px] leading-[80px] text-[#E5722A] font-bold mb-[5px]">
          John Wilson Solamo
          <div className="text-[80px] leading-[80px] text-[#DF3B30] font-bold absolute top-[0px] bottom-[0px] right-[20px] left-[5px]">
            John Wilson Solamo
          </div>
        </div>
        <div className="w-fit ml-[5px] text-[40px] text-[#F6DBAC] font-bold leading-[40px] mb-[20px]">
          Web Developer
        </div>
        <p className="ml-[5px] text-[20px] leading-[31px] text-justify max-w-[700px]">
          Hi, I&apos;m <span className="text-[#DF3B30]">Wilson</span>, a
          passionate
          <span className="text-[#DF3B30]">web developer</span> dedicated to
          crafting seamless and engaging online experiences. With a blend of
          creativity and technical expertise, I bring ideas to life through
          clean and effecient code. Explore my work and discover the boundless
          possibilities of web development.
        </p>
      </div>
    </section>
  );
};

export default MainBanner;
