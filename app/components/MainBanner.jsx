import React from "react";

const MainBanner = () => {
  return (
    // <section className="min-h-screen w-full bg-[#012152] py-[100px]">
    <section className="relative min-h-screen overflow-hidden w-full bg-[#16161c] pt-[50px] sm:pt-[120px] pb-[50px] px-[20px] ">
      <div className="container-primary mt-[50px]">
        <div className="relative text-[40px] sm:text-[60px] tracking-[5px] xl:text-[80px] sm:leading-[80px] text-main-orange font-bold mb-[5px]">
          John Wilson Solamo
          <div className="hidden md:flex text-[40px] sm:text-[60px] xl:text-[80px] tracking-[5px] sm:leading-[80px] text-main-red-orange font-bold absolute top-[0px] bottom-[0px] right-[20px] left-[5px]">
            John Wilson Solamo
          </div>
        </div>
        <div className="w-fit ml-[5px] text-[30px] sm:text-[40px] text-main-cream font-bold leading-[40px] mb-[20px]">
          Web Developer
        </div>
        <p className="text-main-cream ml-[5px] text-[15px] sm:text-[20px] sm:leading-[31px] text-justify max-w-[700px]">
          Hi, I&apos;m <span className="text-main-red-orange">Wilson</span>, a
          passionate
          <span className="text-main-red-orange"> web developer</span> dedicated
          to crafting seamless and engaging online experiences. With a blend of
          creativity and technical expertise, I bring ideas to life through
          clean and effecient code. Explore my work and discover the boundless
          possibilities of web development.
        </p>
      </div>
      {/* <div className="min-h-screen absolute flex top-0 bottom-0 right-[500px]">
        <div className=" min-w-[50px] bg-main-red-orange " />
        <div className=" min-w-[50px] bg-main-orange " />
        <div className=" min-w-[50px] bg-main-gold " />
        <div className=" min-w-[50px] bg-main-cream " />
        <div className=" min-w-[50px] bg-[#4BB8B3] " />
        <div className=" min-w-[50px] bg-[#259FA2] " />
        <div className=" min-w-[50px] bg-[#146d83] " />
      </div> */}
    </section>
  );
};

export default MainBanner;
