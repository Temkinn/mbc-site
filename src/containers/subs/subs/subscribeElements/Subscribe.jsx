import Link from "next/link";
import styles from "./styles.module.scss";
import Filter from "@/containers/svgElements/waysToCook/Filter";
import Mix from "@/containers/svgElements/waysToCook/Mix";
import Espresso from "@/containers/svgElements/waysToCook/Espresso";
import Drip from "../../../svgElements/waysToCook/Drip";

export default function Subscribe({
  color,
  title,
  price,
  old,
  way,
  amount,
  dots,
}) {
  const Waytocook = () => {
    switch (way) {
      case "filter":
        return <Filter />;
      case "mix":
        return <Mix />;
      case "espresso":
        return <Espresso />;
      case "drip":
        return <Drip />;
    }
  };

  const BackColor = () => {
    switch(color){
      case "blue":
        return "#16295d";
      case "green":
        return "#266665";
    }
  }

  const facts = [
    {
      name: "Понятный",
      dot: dots[0],
    },
    {
      name: "Плотный",
      dot: dots[1],
    },
    {
      name: "Деликатный",
      dot: dots[2],
    },
    {
      name: "Сочный",
      dot: dots[3],
    },
    {
      name: "Яркий",
      dot: dots[4],
    },
    {
      name: "Эксклюзивный",
      dot: dots[5],
    },
    {
      name: "Для чемпионов",
      dot: dots[6],
    },
    {
      name: "Выдающиеся ноты",
      dot: dots[7],
    },
  ];

  return (
    <div className={styles.container} style={{
      backgroundColor: BackColor()
    }}>
      <h2>{title}</h2>
      <h4>Кофе в зернах</h4>
      <div className={styles.price}>
        <h2>{price}</h2>
        <h3>{old}</h3>
      </div>
      <div className={styles.way}>
        <span>Способ приготовления</span>
        <Waytocook />
      </div>
      <div className={styles.power}>
        <span>Степень обжаривания</span>
        <div className={styles.cont}>
          <div>
            <span>{amount[0].first}</span>
            <p>{amount[0].second}</p>
          </div>
          <div>
            <span>{amount[1].first}</span>
            <p>{amount[1].second}</p>
          </div>
        </div>
      </div>
      <div className={styles.grams}>
        <p>{amount[0].gramms}</p>
        <p>{amount[1].gramms}</p>
      </div>
      <div className={styles.facts}>
        {facts.map((fact) => {
          if (fact.dot) {
            return (
              <div key={fact.name} className={styles.fact}>
                <div className={styles.full}></div>
                {fact.name}
              </div>
            );
          }
          return (
            <div key={fact.name} className={styles.fact}>
              <div className={styles.dot}></div>
              {fact.name}
            </div>
          );
        })}
      </div>
      <Link
        href="https://docs.google.com/forms/d/1Gx2PhXDeb8MmYds0EboKcs9T1BgHGB9QDdWEZ6sUdvg/edit"
        className={styles.sub}
      >
        Подписаться
      </Link>
    </div>
  );
}
