'use client'
import React from "react";
import styles from "./styles.module.scss";

export default function Navigation() {
  const goToSubs = () => {
    document.getElementById("subs").scrollIntoView({ behavior: "smooth" });
  };
  const goToLoyalty = () => {
    document.getElementById("loyalty").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="subscribe" className={styles.container}>
      <h1>Выгода вместе с MBC Culture</h1>
      <nav>
        <button onClick={goToSubs}>Подписки</button>
        <button onClick={goToLoyalty}>Карта лояльности</button>
      </nav>
    </div>
  );
}
