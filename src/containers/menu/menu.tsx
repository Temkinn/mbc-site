import styles from "./styles.module.scss";
import Position from "./position/Position";
import Link from "next/link";
import items from "./items/items";

export default function Menu() {
  //Units to components

  return (
    <section id="menu" className={styles.main}>
      <h2 className={styles.title}>Наше Меню</h2>
      <nav className={styles.links}>
        <div className={styles.up}>
          <Link href={"#black"} className={styles.link}>
            Black
          </Link>
          <Link href={"#milk"} className={styles.link}>
            Milk
          </Link>
          <Link href={"#other"} className={styles.link}>
            Other
          </Link>
          {/*<button onClick={() => goToUnit("special")} className={styles.link}>
            special
          </button>*/}
        </div>
        <div className={styles.down}>
          <Link href={"#tea"} className={styles.link}>
            Tea
          </Link>
          <Link href={"#breakfast"} className={styles.link}>
            Завтраки
          </Link>
          <Link href={"#sweet"} className={styles.link}>
            Tea
          </Link>
        </div>
      </nav>
      <main className={styles.menu}>
        <div className={styles.unit}>
          <Link href={"#menu"} id="black" className={styles.unitTitle}>
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
          <Link href={"#menu"} id="milk" className={styles.unitTitle}>
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
          <Link href={"#menu"} id="other" className={styles.unitTitle}>
            other
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

        {/*<div className={styles.unit}>
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
        </div>*/}

        <div className={styles.unit}>
          <Link href={"#menu"} id="tea" className={styles.unitTitle}>
            tea
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
          <Link href={"#menu"} id="breakfast" className={styles.unitTitle}>
            Завтраки
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
          <Link href={"#menu"} id="sweet" className={styles.unitTitle}>
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
      </main>
    </section>
  );
}
