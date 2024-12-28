import styles from "./styles.module.css";
import Position from "./position.jsx";
import items from "./items/items";
import photos from "./items/photos";

export default function Menu() {
  // function mapping(unit) {
  // 	unit
  // }

  return (
    <div id="menu" className={styles.main}>
      <div className={styles.title}>Наше Меню</div>
      <div className={styles.links}>
        <div className={styles.up}>
          <div className={styles.linkContainer}>
            <a href="#black" className={styles.link}>
              Black
            </a>
          </div>
          <div className={styles.linkContainer}>
            <a href="#milk" className={styles.link}>
              Milk
            </a>
          </div>
          <div className={styles.linkContainer}>
            <a href="#other" className={styles.link}>
              other
            </a>
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.linkContainer}>
            <a href="#tea" className={styles.link}>
              tea
            </a>
          </div>
          <div className={styles.linkContainer}>
            <a href="#breakfast" className={styles.link}>
              завтраки
            </a>
          </div>
          <div className={styles.linkContainer}>
            <a href="#sweet" className={styles.link}>
              сладкое
            </a>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.unit}>
          <div className={styles.unitTitle} id="black">
            Black
          </div>
          <div className={styles.unitSubtitle}>
            Наведитесь на позицию, чтобы посмотреть описание
          </div>
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
          <div className={styles.unitTitle} id="milk">
            Milk
          </div>
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
          <div className={styles.unitTitle} id="other">
            Other
          </div>
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
          <div className={styles.unitTitle} id="tea">
            Tea
          </div>
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
          <div className={styles.unitTitle} id="breakfast">
            завтраки целый день
          </div>
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
          <div className={styles.unitTitle} id="sweet">
            Сладкое
          </div>
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
