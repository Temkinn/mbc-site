"use client";
import styles from './styles.module.scss';
import Duo from "../cardDuo/Duo.jsx";

export default function Friend() {
  return (
    <div className={styles.container}>
      <Duo
        front={require("../cards/friend.png")}
        back={require("../cards/back.png")}
        alt={`Карта "Кофейный друг"`}
      />
      <div className={styles.text}>
        <h2>Как ее получить?</h2>
        <ul>
          <li>совершить покупку в MBC на любую сумму и пройти регистрацию</li>
        </ul>
      </div>
      <div className={styles.text}>
        <h2>Что в ней полезного?</h2>
        <ul>
          <li>
            приветственный бонус в размере <b>10 BYN</b>
          </li>
          <li>
            начисление бонусов в размере <b>3% от каждого чека</b> по всем
            группам
          </li>
          <li>
            бонусные <b>15 BYN на ДЕНЬ РОЖДЕНИЯ</b>
          </li>
        </ul>
      </div>
      <div className={styles.text}>
        <h2>ВАЖНО ЗНАТЬ</h2>
        <ul>
          <li>
            бонусы не начисляются за покупку позиции “с полки”, а так же не
            начисляются при списании
          </li>
          <li>
            бонусными баллами можно закрыть не более 30% от общей суммы чека
          </li>
          <li>MAX сумма оплаты бонусными баллами в сутки = 50 BYN</li>
        </ul>
      </div>
    </div>
  );
}
