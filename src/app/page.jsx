import dynamic from "next/dynamic";
import Parallax from "@/blocks/parallax/parallax";
import Welcome from '@/blocks/welcome/welcome'
const About = dynamic(() => import("@/blocks/about/about"));
const Slider = dynamic(() => import("@/blocks/slider/slider"));
const Menu = dynamic(() => import("@/blocks/menu/menu"));

const Navigation = dynamic(() => import("@/blocks/subs/navigation/navigation"));
const SubsIntro = dynamic(() => import("@/blocks/subs/intro/intro"));
const SubsWhy = dynamic(() => import("@/blocks/subs/why/why"));
// import Advantages from "@/blocks/subs/advantages/advantages";
const SubsChoice = dynamic(() => import("@/blocks/subs/choice/choice"));
const Subs = dynamic(() => import("@/blocks/subs/subs/subs"));
const Loyalty = dynamic(() => import("@/blocks/subs/loyalty/Loyalty"));

const Barista = dynamic(() => import("@/blocks/barista/barista"));
const Videos = dynamic(() => import("@/blocks/videos/videos"));
const Partners = dynamic(() => import("@/blocks/partners/partners"));
const Footer = dynamic(() => import("@/blocks/footer/footer"));


export default function Home() {
  return (
    <>
      <Parallax />
      <Welcome />
      <About />
      <Slider />
      <Menu />

      <Navigation /> 
      <SubsIntro /> 
      <SubsWhy />
      {/* <Advantages /> */}
      <SubsChoice />
      <Subs />
      <Loyalty />

      <Barista />
      <Videos />
      <Partners />
      <Footer />
    </>
  );
}
