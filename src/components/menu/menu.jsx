import styles from "./styles.module.css";
import Position from "./position.jsx";
import items from "./items/items";
import Link from "next/link";

export default function Menu() {
  const goToUnit = (name) => {
    const unit = document.querySelector(`#${name}`);
    if (unit) {
      unit.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="menu" className={styles.main}>
      <h2 className={styles.title}>Наше Меню</h2>
      <nav className={styles.links}>
        <div className={styles.up}>
          <div className={styles.linkContainer}>
            <button onClick={() => goToUnit("black")} className={styles.link}>
              Black
            </button>
          </div>
          <div className={styles.linkContainer}>
            <button onClick={() => goToUnit("milk")} className={styles.link}>
              Milk
            </button>
          </div>
          <div className={styles.linkContainer}>
            <button onClick={() => goToUnit("other")} className={styles.link}>
              other
            </button>
          </div>
          <div className={styles.linkContainer}>
            <button onClick={() => goToUnit("special")} className={styles.link}>
              special
            </button>
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.linkContainer}>
            <button onClick={() => goToUnit("tea")} className={styles.link}>
              tea
            </button>
          </div>
          <div className={styles.linkContainer}>
            <button
              onClick={() => goToUnit("breakfast")}
              className={styles.link}
            >
              завтраки
            </button>
          </div>
          <div className={styles.linkContainer}>
            <button onClick={() => goToUnit("sweet")} className={styles.link}>
              сладкое
            </button>
          </div>
        </div>
      </nav>
      <div className={styles.menu}>
        <div className={styles.unit}>
          <button
            onClick={() => goToUnit("menu")}
            className={styles.unitTitle}
            id="black"
          >
            Black
          </button>
          <h3 className={styles.unitSubtitle}>
            Наведите на позицию, чтобы посмотреть описание
          </h3>
          <div className={styles.items}>
            {items.black.map((item) => {
              return (
                <Position
                  key={item.name}
                  name={item.name}
                  photo={item.photo}
                  amount={item.g}
                  price={item.price}
                  description={item.description}
                  kpfc={item.kpfc}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.unit}>
          <button
            onClick={() => goToUnit("menu")}
            className={styles.unitTitle}
            id="milk"
          >
            Milk
          </button>
          <div className={styles.items}>
            {items.milk.map((item) => {
              return (
                <Position
                  key={item.name}
                  name={item.name}
                  photo={item.photo}
                  amount={item.g}
                  price={item.price}
                  description={item.description}
                  kpfc={item.kpfc}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.unit}>
          <button
            onClick={() => goToUnit("menu")}
            className={styles.unitTitle}
            id="other"
          >
            Other
          </button>
          <div className={styles.items}>
            {items.other.map((item) => {
              return (
                <Position
                  key={item.name}
                  name={item.name}
                  photo={item.photo}
                  amount={item.g}
                  price={item.price}
                  description={item.description}
                  kpfc={item.kpfc}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.unit}>
          <button
            onClick={() => goToUnit("menu")}
            className={styles.unitTitle}
            id="special"
          >
            Special
          </button>
          <div className={styles.items}>
            {items.special.map((item) => {
              return (
                <Position
                  key={item.name}
                  name={item.name}
                  photo={item.photo}
                  amount={item.g}
                  price={item.price}
                  description={item.description}
                  kpfc={item.kpfc}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.unit}>
          <button
            onClick={() => goToUnit("menu")}
            className={styles.unitTitle}
            id="tea"
          >
            Tea
          </button>
          <div className={styles.items}>
            {items.tea.map((item) => {
              return (
                <Position
                  key={item.name}
                  name={item.name}
                  photo={item.photo}
                  amount={item.g}
                  price={item.price}
                  description={item.description}
                  kpfc={item.kpfc}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.unit}>
          <button
            onClick={() => goToUnit("menu")}
            className={styles.unitTitle}
            id="breakfast"
          >
            завтраки целый день
          </button>
          <div className={styles.items}>
            {items.breakfast.map((item) => {
              return (
                <Position
                  key={item.name}
                  name={item.name}
                  photo={item.photo}
                  amount={item.g}
                  price={item.price}
                  description={item.description}
                  kpfc={item.kpfc}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.unit}>
          <button
            onClick={() => goToUnit("menu")}
            className={styles.unitTitle}
            id="sweet"
          >
            Сладкое
          </button>
          <div className={styles.items}>
            {items.sweet.map((item) => {
              return (
                <Position
                  key={item.name}
                  name={item.name}
                  photo={item.photo}
                  amount={item.g}
                  price={item.price}
                  description={item.description}
                  kpfc={item.kpfc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
