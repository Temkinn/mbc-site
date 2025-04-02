"use client";
import styles from "./styles.module.css";

export default function Welcome() {

  const goTo = (name) => {
    const unit = document.querySelector(`#${name}`);

    if (unit) {
      unit.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <h1 className={styles.title}>MBC.CULTURE</h1>
        <h2 className={styles.subtitle}>Кофейня на каждый день</h2>
      </div>
      <nav className={styles.buttonContainer}>
        {/* переделать divы в buttonы */}
        <div onClick={() => goTo("menu")} className={styles.button1}>
          Наше меню
        </div>
        <div onClick={() => goTo("subscribe")} className={styles.button2}>
          Лояльность
        </div>
        <div onClick={() => goTo("adress")} className={styles.button3}>
          Где мы?
        </div>
      </nav>
    </div>
  );
}
