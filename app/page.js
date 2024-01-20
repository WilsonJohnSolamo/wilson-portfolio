import Image from "next/image";
import MainBanner from "./components/MainBanner";
import AboutMe from "./components/AboutMe";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* <Menu /> */}
      <MainBanner />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
