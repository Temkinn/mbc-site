import styles from "./styles.module.css";
import Position from "./position.jsx";
import items from "./items/items";
import Link from "next/link";

export default function Menu() {
  // function mapping(unit) {
  // 	unit
  // }

  return (
    <div id="menu" className={styles.main}>
      <h2 className={styles.title}>Наше Меню</h2>
      <nav className={styles.links}>
        <div className={styles.up}>
          <div className={styles.linkContainer}>
            <Link href="#black" className={styles.link}>
              Black
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <Link href="#milk" className={styles.link}>
              Milk
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <Link href="#other" className={styles.link}>
              other
            </Link>
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.linkContainer}>
            <Link href="#tea" className={styles.link}>
              tea
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <Link href="#breakfast" className={styles.link}>
              завтраки
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <Link href="#sweet" className={styles.link}>
              сладкое
            </Link>
          </div>
        </div>
      </nav>
      <div className={styles.menu}>
        <div className={styles.unit}>
          <Link href="#menu" className={styles.unitTitle} id="black">
            Black
          </Link>
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
          <Link href="#menu" className={styles.unitTitle} id="milk">
            Milk
          </Link>
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
          <Link href="#menu" className={styles.unitTitle} id="other">
            Other
          </Link>
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
          <Link href="#menu" className={styles.unitTitle} id="tea">
            Tea
          </Link>
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
          <Link href="#menu" className={styles.unitTitle} id="breakfast">
            завтраки целый день
          </Link>
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
          <Link href="#menu" className={styles.unitTitle} id="sweet">
            Сладкое
          </Link>
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
