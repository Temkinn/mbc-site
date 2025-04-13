"use client"
import styles from "./page.module.css";

import Parallax from "@/blocks/parallax/parallax";
import Welcome from '@/blocks/welcome/welcome'
import About from "@/blocks/about/about"
import Slider from "@/blocks/slider/slider";
import Menu from "@/blocks/menu/menu";

import Navigation from "@/blocks/subs/navigation/navigation";
import SubsIntro from "@/blocks/subs/intro/intro";
import SubsWhy from "@/blocks/subs/why/why";
import Advantages from "@/blocks/subs/advantages/advantages";
import SubsChoice from "@/blocks/subs/choice/choice";
import Subs from "@/blocks/subs/subs/subs";
import Loyalty from "@/blocks/subs/loyalty/Loyalty";

import Barista from "@/blocks/barista/barista";
import Videos from "@/blocks/videos/videos";
import Partners from "@/blocks/partners/partners";
import Footer from "@/blocks/footer/footer";


export default function Home() {

  return (
    <div className={styles.window}>
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
    </div>
  );
}
