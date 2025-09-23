import dynamic from "next/dynamic";

import Parallax from "@/containers/parallax/parallax";
import Main from "@/containers/Main";
const About = dynamic(() => import("@/containers/about/about"));
const Slider = dynamic(() => import("@/containers/slider/Slider"));
const Menu = dynamic(() => import("@/containers/menu/menu"));

const Navigation = dynamic(
  () => import("@/containers/subs/navigation/navigation"),
);
const SubsIntro = dynamic(() => import("@/containers/subs/intro/intro"));
const SubsWhy = dynamic(() => import("@/containers/subs/why/why"));
// import Advantages from "@/containers/subs/advantages/advantages";
const SubsChoice = dynamic(() => import("@/containers/subs/choice/choice"));
const Subs = dynamic(() => import("@/containers/subs/subs/subs"));
const Loyalty = dynamic(() => import("@/containers/subs/loyalty/Loyalty"));

// const Barista = dynamic(() => import("@/containers/barista/barista"));
const Videos = dynamic(() => import("@/containers/videos/videos"));
const Partners = dynamic(() => import("@/containers/partners/partners"));
const Footer = dynamic(() => import("@/containers/footer/footer"));

export default function Home() {
  return (
    <>
      <Parallax />
      <Main />
      <About />
      <Slider />
      <Menu />

      <Navigation />
      <SubsIntro />
      <SubsWhy />
      {/*<Advantages /> */}
      <SubsChoice />
      <Subs />
      <Loyalty />

      {/*<Barista /> */}
      <Videos />
      <Partners />
      <Footer />
    </>
  );
}
