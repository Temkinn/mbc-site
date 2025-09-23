import styles from "./styles.module.scss"
import Link from "next/link"

import Instagram from "../svgElements/icons/Instagram"
import Youtube from "../svgElements/icons/Youtube"

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div id="adress" className={styles.inner}>
        <h2 className={styles.title}>Наши контакты</h2>
        <p className={styles.line}>
          <b>Phone: </b> +375444595259
        </p>
        <p className={styles.line}>
          <b>Email: </b>{" "}
          <Link
            href="mailto:mbc.coffee@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            mbc.coffee@gmail.com
          </Link>
        </p>
        <p className={styles.line}>Г. Лида, ул. Замковая 2</p>
        <p className={styles.line}>Г. Минск, ул. Тимирязева 10</p>
        <p className={styles.line}>Будние: 8:00 - 21:00</p>
        <p className={styles.line}>Выходные: 9:00 - 22:00</p>
        <div className={styles.links}>
          <Link
            href="https://www.youtube.com/@manualbrewcoffee?si=UjnzfuuAdH67HHZ0"
            target="_blank"
            className={styles.instagram}
          >
            <Youtube size={40} />
          </Link>
          <Link
            href="https://www.instagram.com/mbc.culture/?igsh=cnk5N3RiNjk3aXRv#"
            target="_blank"
            className={styles.youtube}
          >
            <Instagram size={40} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
