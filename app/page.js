import Image from "next/image";
import MainBanner from "./components/MainBanner";
import AboutMe from "./components/AboutMe";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>John&apos;s Portfolio</title>
      </Head>
      {/* <Menu /> */}
      <MainBanner />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
