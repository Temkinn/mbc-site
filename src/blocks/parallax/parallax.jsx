"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

import UpArrow from "../svgElements/arrows/UpArrow";
import HeadPhones from "../svgElements/icons/HeadPhones";
import Viber from "../svgElements/icons/Viber";
import Gmail from "../svgElements/icons/Gmail";
import Whatsapp from "../svgElements/icons/Whatsapp";
import Telegram from "../svgElements/icons/Telegram";

export default function Parallax() {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Image
        src={require("@/../public/white_background.jpg")}
        placeholder="blur"
        alt=""
        style={{
          objectFit: "cover",
        }}
        className={styles.parallax}
      />
      <button onClick={goToTop} className={styles.up}>
        <UpArrow />
      </button>
      <aside className={styles.contacts}>
        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={styles.link}
        >
          <Viber size={30} />
        </Link>

        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={styles.link}
        >
          <Whatsapp size={30} />
        </Link>

        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={styles.link}
        >
          <Telegram size={30} />
        </Link>

        <Link
          href="mailto:mbc.coffee@gmail.com"
          target="_blank"
          className={styles.link}
        >
          <Gmail size={30} />
        </Link>

        <div className={styles.main}>
          <HeadPhones size={30} />
        </div>
      </aside>
    </>
  );
}
