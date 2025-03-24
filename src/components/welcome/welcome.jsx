"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

export default function Welcome() {

	const [width, setWidth] = useState(0);

	useEffect(() => {
		setWidth(window.innerWidth)
		return () => {

		}
	}, [])
  const goTo = (name) => {
    const unit = document.querySelector(`#${name}`);
    console.log(width);

    if (unit) {
      unit.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <Image
        src={
          width > 500
            ? require("@/../public/welcome_background.jpg")
            : require("@/../public/welcome2_background.jpg")
        }
        alt=""
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -5,
        }}
      />
      <div className={styles.titles}>
        <h1 className={styles.title}>MBC.CULTURE</h1>
        <h2 className={styles.subtitle}>Кофейня на каждый день</h2>
      </div>
      <nav className={styles.buttonContainer}>
        <div onClick={() => goTo("menu")} className={styles.button1}>
          Наше меню
        </div>
        <div onClick={() => goTo("adress")} className={styles.button2}>
          Где мы?
        </div>
        <div onClick={() => goTo("subscribe")} className={styles.button3}>
          Лояльность
        </div>
      </nav>
    </div>
  );
}
