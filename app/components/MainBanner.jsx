import React from "react";

const MainBanner = () => {
  return (
    // <section className="min-h-screen w-full bg-[#012152] py-[100px]">
    <section className="min-h-screen w-full bg-[#16161c] py-[100px]">
      <div className="container-primary">
        <div className="relative text-[80px] leading-[80px] text-[#E5722A] font-bold ml-[]">
          John Wilson Solamo
          <div className="text-[80px] leading-[80px] text-[#DF3B30] font-bold absolute top-[0px] bottom-[0px] right-[20px] left-[5px]">
            John Wilson Solamo
          </div>
        </div>
        <div className="text-[40px] text-[#F6DBAC] font-bold leading-[40px]">
          Web Developer
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
