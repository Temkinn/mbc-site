"use client"
import styles from "./page.module.css";

import Parallax from "@/components/parallax/parallax";
import Welcome from '@/components/welcome/welcome'
import About from "@/components/about/about"
import Slider from "@/components/slider/slider";
import Menu from "@/components/menu/menu";

import SubsIntro from "@/components/subs/intro/intro";
import SubsWhy from "@/components/subs/why/why";
import SubsChoice from "@/components/subs/choice/choice";
import Subs from "@/components/subs/subs/subs";

import Barista from "@/components/barista/barista";
import Videos from "@/components/videos/videos";
import Partners from "@/components/partners/partners";
import Footer from "@/components/footer/footer";


export default function Home() {
  // const [isClient, setIsClient] = useState(false)
 
  // useEffect(() => {
  //   setIsClient(true)
  // }, [])
  return (
    <div className={styles.window}>
      <Parallax />
      <Welcome />
      <About />
      <Slider />
      {/* <Menu /> */}

      <SubsIntro /> 
      <SubsWhy />
      <SubsChoice />
      <Subs />

      <Barista />
      <Videos />
      <Partners />
      <Footer />
    </div>
  );
}
