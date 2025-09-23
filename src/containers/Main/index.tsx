import styles from "./styles.module.scss";
import Link from "next/link";

export default function Welcome() {
  return (
    <main className={styles.container}>
      <div className={styles.titles}>
        <h1>MBC.CULTURE</h1>
        <h2>Кофейня на каждый день</h2>
      </div>
      <nav>
        <Link href={""} className={styles.button1}>
          Наше меню
        </Link>
        <Link href={""} className={styles.button2}>
          Лояльность
        </Link>
        <Link href={""} className={styles.button3}>
          Где мы?
        </Link>
      </nav>
    </main>
  );
}
