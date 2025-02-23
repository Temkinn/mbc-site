"use client"
import styles from "./page.module.css";

import Parallax from "@/components/parallax/parallax";
import Welcome from '@/components/welcome/welcome'
import About from "@/components/about/about"
import Slider from "@/components/slider/slider";
import Menu from "@/components/menu/menu";

import Navigation from "@/components/subs/navigation/navigation";
import SubsIntro from "@/components/subs/intro/intro";
import SubsWhy from "@/components/subs/why/why";
import Advantages from "@/components/subs/advantages/advantages";
import SubsChoice from "@/components/subs/choice/choice";
import Subs from "@/components/subs/subs/subs";
import Loyalty from "@/components/subs/loyalty/Loyalty";

import Barista from "@/components/barista/barista";
import Videos from "@/components/videos/videos";
import Partners from "@/components/partners/partners";
import Footer from "@/components/footer/footer";


export default function Home() {

  return (
    <div className={styles.window}>
      <Parallax />
      <Welcome />
      <About />
      <Slider />
      <Menu />

      {/* <Navigation />  */}
      <SubsIntro /> 
      <SubsWhy />
      {/* <Advantages /> */}
      <SubsChoice />
      <Subs />
      {/* <Loyalty /> */}

      <Barista />
      <Videos />
      <Partners />
      <Footer />
    </div>
  );
}
