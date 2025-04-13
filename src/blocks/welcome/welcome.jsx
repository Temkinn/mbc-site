"use client";
import styles from "./styles.module.css";
import "animate.css";
import "./animation.css";

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
        <h1 className={`${styles.title} mbc-culture-title`}>MBC.CULTURE</h1>
        <h2 className={`${styles.subtitle} mbc-culture-subtitle`}>
          Кофейня на каждый день
        </h2>
      </div>
      <nav className={styles.buttonContainer}>
        {/* переделать divы в buttonы */}
        <button
          onClick={() => goTo("menu")}
          className={`${styles.button1} menu-button`}
        >
          Наше меню
        </button>
        <button
          onClick={() => goTo("subscribe")}
          className={`${styles.button2} loyalty-button`}
        >
          Лояльность
        </button>
        <button
          onClick={() => goTo("adress")}
          className={`${styles.button3} location-button`}
        >
          Где мы?
        </button>
      </nav>
    </div>
  );
}
