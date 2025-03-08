import styles from "./styles.module.css";
import Bread from "../svgElements/bread/bread";
import Croissant from "../svgElements/croissant/croissant";

export default function About() {
  return (
    <div className={styles.container}>
      <Bread size={170} />
      <Croissant size={160} />

      <div className={styles.text}>
        <h2 className={styles.title}>О нашей кофейне</h2>

        <p className={styles.paragraph}>
          Проект "MBC CULTURE" представляет собой современное заведение, где
          каждый гость может ощутить тепло и комфорт, находясь в компании
          друзей, коллег или единомышленников. Мы стремимся создать атмосферу, в
          которой люди смогут приятно проводить время и наслаждаться
          высококачественными напитками.
        </p>

        <p className={styles.paragraph}>
          Основная идея "MBC CULTURE" — это формирование пространства для
          общения и вдохновения. Мы уверены, что наш продукт и трепетное
          отношение к каждому процессу помогут нам стать неотъемлемой частью
          вашей жизни.
        </p>

        <p className={styles.paragraph}>
          Мы совмещаем в себе уникальный продукт, хороший сервис и заботу о
          наших гостях. А также стремимся создать атмосферу, в которой люди
          смогут расслабиться и насладиться высоким уровнем комфорта для себя и
          своих близких.
        </p>
      </div>
    </div>
  );
}
